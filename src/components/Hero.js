"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-white w-full py-16 lg:py-32 px-4 my-2 overflow-hidden">

      {/* Background Decorative SVGs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top-left abstract blob */}
        <svg className="absolute top-[-100px] right-[-100px] w-[350px]" viewBox="0 0 200 200">
          <path
            fill="#ffe34c"
            d="M43.5,-64.6C54.2,-55.5,61.7,-43.6,66.3,-30.9C70.9,-18.2,72.5,-4.6,70.1,7.7C67.7,20.1,61.3,31.2,52.4,41.2C43.5,51.2,32,60.1,19.1,64.9C6.1,69.7,-8.3,70.4,-22.8,67.4C-37.3,64.3,-51.8,57.4,-60.3,46.4C-68.8,35.4,-71.3,20.4,-71.2,5.5C-71.1,-9.4,-68.4,-24.3,-60.4,-35.9C-52.3,-47.4,-38.8,-55.6,-25.2,-63.3C-11.7,-70.9,2,-78,15.8,-75.1C29.5,-72.2,43.5,-59.7,43.5,-64.6Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* Bottom-right dot grid */}
        <svg className="absolute bottom-[-80px] right-[-80px] w-[250px] " viewBox="0 0 100 100">
          <defs>
            <pattern
              id="smallGrid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="#FFD700" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left content same as before */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left flex-1"
        >
          <h1 className="text-6xl font-bold font-sans text-primary">
            Progress Media
          </h1>
          <p className="font-serif text-accent mt-4 text-xl">
            SECRETS TO STOP FAILURE
          </p>
          <p className="font-sans font-bold text-primary mt-2 text-lg">
            TECH • FITNESS • MINDSET
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-accent text-white px-6 py-3 rounded-full font-bold shadow-md transition"
          >
            Get Started
          </motion.button>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-accent mx-auto lg:mx-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Icons same as before */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 flex gap-6 flex-wrap justify-center"
        >
          {["tech-icon.webp", "fitness-icon.webp", "mindset-icon.webp"].map((icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={`/assets/${icon}`}
                alt={`${icon.split("-")[0]} icon`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] rounded-xl shadow-lg transition-all"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
