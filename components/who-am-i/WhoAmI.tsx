"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contentOfApp } from "@/content";
import { useRouter } from "next/navigation";

export default function WhoAmI() {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-teal-500">
            {contentOfApp.portfolio.name}
          </span>
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl mb-8 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-teal-500">
            {contentOfApp.portfolio.role}
          </span>{" "}
          with a cup of{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-amber-700 to-yellow-700">
            coffee
          </span>
        </motion.h2>
        {contentOfApp.life === "enabled" && (
          <div className="flex flex-col">
            <p>&#128161;</p>
            {contentOfApp.portfolio.lifeMotto.map((motto) => (
              <motion.h4
                key={motto}
                className="text-md md:text-md mb-2 text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {motto}
              </motion.h4>
            ))}
          </div>
        )}

        {contentOfApp.portfolio.attractButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-5"
          >
            <Button size="lg" onClick={() => router.push("/life")}>
              View what I shared about Meditation...
            </Button>
          </motion.div>
        )}

        <motion.div
          className="absolute bottom-10"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
          }}
        >
          <ArrowDown className="h-8 w-8 text-primary" />
        </motion.div>
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0"
        style={{
          opacity: Math.min(scrollY / 500, 0.5),
        }}
      />
    </section>
  );
}
