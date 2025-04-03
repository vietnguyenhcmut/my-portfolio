"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { contentOfApp } from "@/content";
import { FaCircleInfo } from "react-icons/fa6";
import { Badge } from "../ui/badge";

export default function Career() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="career" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Career
        </motion.h2>
        <motion.div
          className="h-1 w-20 bg-primary mx-auto"
          initial={{ width: 0 }}
          animate={isInView ? { width: 150 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>

      {contentOfApp.portfolio.career.map((career, index) => (
        <div
          key={index}
          className="flex flex-row items-start justify-between gap-2 mb-10 p-4 border rounded-2xl relative"
        >
          <div
            className="flex flex-col items-start z-30"
            style={{ width: "800px" }}
          >
            <motion.h4
              className="text-xl md:text-xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              ref={ref}
            >
              {career.company}
            </motion.h4>
            <div className="flex flex-row items-center gap-4 mb-2">
              <motion.h4
                className="text-sm md:text-sm mb-2 text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                ref={ref}
              >
                &#x1F553; {career.time}
              </motion.h4>
              <motion.h4
                className="text-sm md:text-sm mb-2 text-muted-foreground flex flex-row items-center gap-1"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                ref={ref}
              >
                <FaCircleInfo /> {career.industry}
              </motion.h4>
            </div>

            {career.role.map((role, index) => (
              <div key={index} className="flex flex-col items-start">
                <motion.h4
                  className="text-md md:text-md mb-2 text-muted-foreground font-bold"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5 }}
                  ref={ref}
                >
                  &#x1F4BC; {role.title}
                </motion.h4>
                <motion.ul
                  className="text-md md:text-md mb-2 text-muted-foreground pl-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5 }}
                  ref={ref}
                >
                  {role.achievements.map((achievement, index) => (
                    <li key={index} className="list-disc ml-4">
                      {achievement}
                    </li>
                  ))}
                </motion.ul>
              </div>
            ))}
            <div className="mt-2 flex flex-row gap-2 flex-wrap">
              {career.skills.map((skill, index) => (
                <Badge className="bg-slate-100 text-slate-500 border border-slate-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-[200px] aspect-[1/1] rounded-lg absolute right-5 z-10 overflow-hidden flex justify-center items-center"
          >
            <Image
              src={career.logo.name}
              alt="Avatar"
              height={career.logo.height}
              width={career.logo.width}
              className="opacity-10"
            />
          </motion.div>
        </div>
      ))}
    </section>
  );
}
