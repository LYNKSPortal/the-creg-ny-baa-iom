"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react/lazy";
import type MuxPlayerElement from "@mux/mux-player";
import type { MuxCSSProperties } from "@mux/mux-player-react";
import { heroVideo } from "@/data/video";

function getPrefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Full-bleed, muted/looping background video for the hero.
 * Falls back to a static poster frame for visitors who prefer reduced
 * motion, and never shows playback controls since it's purely decorative.
 */
export function HeroVideoBackground() {
  const [reducedMotion, setReducedMotion] = useState(getPrefersReducedMotion);
  const playerRef = useRef<MuxPlayerElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Decorative background videos can freeze on a single frame if the browser
  // pauses autoplay (e.g. low-power mode, tab backgrounding) or hls.js hits a
  // recoverable stall/error. Since controls are hidden there's no way for a
  // visitor to nudge it themselves, so resume playback automatically.
  useEffect(() => {
    if (reducedMotion) return;
    const player = playerRef.current;
    if (!player) return;

    const resume = () => {
      player.play()?.catch(() => {
        // Autoplay can be legitimately blocked (e.g. battery saver); nothing
        // more to do here without user interaction.
      });
    };

    const onPause = () => resume();
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible" && player.paused) resume();
    };

    player.addEventListener("pause", onPause);
    player.addEventListener("error", resume);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      player.removeEventListener("pause", onPause);
      player.removeEventListener("error", resume);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [reducedMotion]);

  const posterUrl = `https://image.mux.com/${heroVideo.playbackId}/thumbnail.jpg?time=${heroVideo.posterTime}&width=1200`;

  if (reducedMotion) {
    return (
      <Image
        src={posterUrl}
        alt={heroVideo.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    );
  }

  return (
    <MuxPlayer
      ref={playerRef}
      playbackId={heroVideo.playbackId}
      streamType="on-demand"
      autoPlay="muted"
      muted
      loop
      playsInline
      nohotkeys
      preload="auto"
      maxResolution="720p"
      thumbnailTime={heroVideo.posterTime}
      poster={posterUrl}
      metadata={{ video_title: heroVideo.title }}
      aria-label={heroVideo.title}
      className="absolute inset-0 h-full w-full"
      style={
        {
          "--media-object-fit": "cover",
          "--controls": "none",
          width: "100%",
          height: "100%",
        } satisfies MuxCSSProperties
      }
    />
  );
}
