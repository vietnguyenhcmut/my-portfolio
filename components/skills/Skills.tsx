"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { contentOfApp } from "@/content";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-8 max-w-6xl mx-auto bg-muted/30 rounded-2xl"
    >
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          My Skills
        </motion.h2>
        <motion.div
          className="h-1 w-20 bg-primary mx-auto"
          initial={{ width: 0 }}
          animate={isInView ? { width: 150 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {contentOfApp.portfolio.skills.map((skill, index) => (
          <motion.div
            key={skill.type}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="mb-4"
          >
            <div className="flex justify-start mb-1 flex-wrap">
              <span className="font-medium">{skill.type}: &nbsp;</span>
              <span className="text-muted-foreground">
                {skill.list.map((every) => `${every}, `)}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
