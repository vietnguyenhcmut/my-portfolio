"use client";

import { contentOfApp } from "@/content";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="education" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Education
        </motion.h2>
        <motion.div
          className="h-1 w-20 bg-primary mx-auto"
          initial={{ width: 0 }}
          animate={isInView ? { width: 150 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>

      {contentOfApp.portfolio.education.map((education, index) => (
        <div
          key={index}
          className="flex flex-row justify-between items-center gap-2 p-4 flex-wrap relative mb-10"
        >
          <div
            className="flex flex-col items-start z-30"
            style={{ width: "800px" }}
          >
            <motion.h4
              className="text-xl md:text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-blue-800"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              ref={ref}
            >
              {education.name}
            </motion.h4>
            <motion.h4
              className="text-sm md:text-sm mb-2 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              ref={ref}
            >
              &#x1F553; {education.time}
            </motion.h4>
            <motion.h4
              className="text-sm md:text-sm mb-4 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              ref={ref}
            >
              &#x1F393; {education.major}
            </motion.h4>
            {education.brief.map((brief) => (
              <motion.h4
                className="text-md md:text-md mb-1 text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                ref={ref}
              >
                {brief}
              </motion.h4>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-[200px] h-[200px] rounded-lg overflow-hidden absolute right-0 z-10"
          >
            <Image
              src={education.logoPath}
              alt="Logo"
              fill
              className="object-cover opacity-10"
            />
          </motion.div>
        </div>
      ))}
    </section>
  );
}
