"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { BookTableButton } from "@/components/ui/BookTableButton";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] w-full items-end overflow-hidden bg-cng-black">
      {/* Placeholder cinematic backdrop — replace with real hero photography/video of the Creg Ny Baa corner */}
      <div
        role="img"
        aria-label="Placeholder — TT motorcycles racing around the famous Creg Ny Baa corner on the Isle of Man Mountain Road, with dramatic countryside views beyond"
        className="placeholder-art absolute inset-0 bg-cng-black"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,16,46,0.25),transparent_55%)]" />
        <svg
          className="absolute inset-0 h-full w-full text-white/[0.06]"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path d="M0 620 C 200 520 350 680 550 560 S 900 420 1200 500" fill="none" stroke="currentColor" strokeWidth="6" />
          <path d="M0 700 C 250 600 450 760 650 640 S 1000 500 1200 580" fill="none" stroke="#C6A66B" strokeOpacity="0.25" strokeWidth="3" />
        </svg>
        <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-sm border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/60 sm:right-6 sm:top-6">
          Photography coming soon
        </span>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-cng-black via-cng-black/60 to-cng-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-40 sm:px-6 sm:pb-28 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-cng-gold"
        >
          Mountain Road · Isle of Man TT Course
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display max-w-4xl text-balance text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          The Legendary <span className="text-cng-red">Creg Ny Baa</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/80 sm:text-xl"
        >
          One of the most iconic corners on the Isle of Man TT course — a legendary pub,
          restaurant and race-day landmark where Manx hospitality meets motorsport history,
          high above the island&apos;s dramatic countryside.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <BookTableButton />
          <PrimaryButton href="/tt-2027" variant="outline">
            Explore TT Experiences
          </PrimaryButton>
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
