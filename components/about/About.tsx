"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { contentOfApp } from "@/content";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          About Me
        </motion.h2>
        <motion.div
          className="h-1 w-20 bg-primary mx-auto"
          initial={{ width: 0 }}
          animate={isInView ? { width: 150 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
        >
          <Image src="/me.jpg" alt="Avatar" fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-teal-500">
              Web Developer
            </span>{" "}
            &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 to-green-500">
              Devices Connectivity
            </span>{" "}
          </h3>
          <p className="text-muted-foreground mb-4">
            I'm a passionate web developer with a keen eye for design, user
            experience, and security for user actions. I have 2 years of web
            development experience, using ReactJS to create web applications. I
            have been using libraries such as TailwindCSS, Ant Design, MUI, and
            Redux.
          </p>
          <p className="text-muted-foreground mb-6">
            I also have overview knowledge about AWS, and apply CI/CD automation
            to deploy a web application to AWS Amplify, integrated with Lambda,
            DynamoDB, and Cognito. Besides, I also tried to use the WIX platform
            to create many websites using VeloJS for basic purposes.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Name:</h4>
              <p className="text-muted-foreground">
                {contentOfApp.portfolio.fullName}
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Email:</h4>
              <p className="text-muted-foreground break-all">
                {contentOfApp.portfolio.email}
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Location:</h4>
              <p className="text-muted-foreground">
                {contentOfApp.portfolio.location}
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Availability:</h4>
              <p className="text-muted-foreground">
                {contentOfApp.portfolio.availableStatus}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
