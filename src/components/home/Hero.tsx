"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-16 text-center sm:px-6 sm:pb-28 sm:pt-20 sm:text-left lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-cng-gold"
        >
          Mountain Road
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> · </span>
          Isle of Man TT Course
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl text-balance font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:mx-0 sm:text-7xl lg:text-8xl"
        >
          The Legendary <span className="text-cng-red">Creg Ny Baa</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/80 sm:mx-0 sm:text-xl"
        >
          One of the most iconic corners on the Isle of Man TT course, a legendary pub,
          restaurant and race-day landmark where Manx hospitality meets motorsport history,
          high above the island&apos;s dramatic countryside.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:justify-start"
        >
          <BookTableButton />
          <PrimaryButton href="/tt-2027" variant="outline">
            Explore TT Experiences
          </PrimaryButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5 sm:justify-start"
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
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/50"
        aria-hidden="true"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </section>
  );
}
