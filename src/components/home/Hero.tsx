"use client";

import Image from "next/image";
import { ChevronDown, Motorbike } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { BookTableButton } from "@/components/ui/BookTableButton";
import { HeroVideoBackground } from "@/components/home/HeroVideoBackground";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-end overflow-hidden bg-cng-black">
      {/* Drone footage of TT racing at the Creg Ny Baa corner (Mux) */}
      <div className="absolute inset-0 bg-cng-black">
        <HeroVideoBackground />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-cng-black via-cng-black/60 to-cng-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-32 pt-28 text-center sm:px-6 sm:pb-28 sm:pt-20 sm:text-left lg:px-8">
        <p
          className="hero-fade mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-cng-gold"
        >
          Mountain Road
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> · </span>
          Isle of Man TT Course
        </p>
        <h1
          className="hero-fade mx-auto max-w-4xl text-balance font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:mx-0 sm:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.1s" }}
        >
          The Legendary <span className="text-cng-red">Creg Ny Baa</span>
        </h1>
        <p
          className="hero-fade mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/80 sm:mx-0 sm:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          One of the most iconic corners on the Isle of Man TT course, a legendary pub,
          restaurant and race-day landmark where Manx hospitality meets motorsport history,
          high above the island&apos;s dramatic countryside.
        </p>
        <div
          className="hero-fade mt-10 flex flex-wrap items-center justify-center gap-4 sm:justify-start"
          style={{ animationDelay: "0.3s" }}
        >
          <BookTableButton />
          <PrimaryButton href="/tt-2027" variant="outline">
            <Motorbike className="h-4 w-4" aria-hidden="true" />
            Explore TT Experiences
          </PrimaryButton>
        </div>

        <div
          className="hero-fade mt-10 flex flex-wrap items-center justify-center gap-5 sm:justify-start"
          style={{ animationDelay: "0.4s" }}
        >
          <Image
            src="/awards/awards-for-exel.png"
            alt="Isle of Man Newspapers Awards for Excellence: Finalist"
            width={140}
            height={140}
            style={{ width: 140, height: 140 }}
          />
          <Image
            src="/awards/manx-menu.png"
            alt="Manx Menu Award Winner"
            width={140}
            height={140}
            style={{ width: 140, height: 140 }}
          />
        </div>
      </div>

      <div
        className="hero-fade absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/50"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </div>
    </section>
  );
}
