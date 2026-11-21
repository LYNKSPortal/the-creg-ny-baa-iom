"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react/lazy";
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

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

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
