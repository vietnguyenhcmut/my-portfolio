import { ContentOfLifeProps } from "@/app/life/page";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type MainContentProps = {
  item: ContentOfLifeProps;
};

const GettingStarted = () => {
  return (
    <div className="flex flex-col items-center pt-20">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        You know what ?{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-teal-500">
          Viewer
        </span>
      </motion.h1>
      <div className="flex flex-col items-center space-x-2">
        <motion.h2
          className="text-2xl md:text-3xl mb-8 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-teal-500">
            Meditation
          </span>{" "}
          is a technique{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-green-500 to-cyan-500">
            that will help you focus on the moments
          </span>
        </motion.h2>
        <motion.h4
          className="text-lg md:text-lg mb-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          &#128161; It helps you save your time and energy to solve a problem
        </motion.h4>
        <motion.h4
          className="text-md md:text-md mb-6 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          And, enjoy your life
        </motion.h4>
        <motion.h4
          className="text-md md:text-md mb-6 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Maybe no one around you will tell you what you should do, because they
          don't wanna take their time for you. That's why you need to do that
          yourself.
        </motion.h4>
      </div>
    </div>
  );
};

export default function MainContent({ item }: MainContentProps) {
  return (
    <div className="w-full h-full relative border-t bg-slate-50">
      <div className="absolute backdrop-blur-sm w-full pl-10 pt-4 pb-4">
        <motion.h4
          className="text-xl md:text-xl font-bold"
          initial={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {item.title}
        </motion.h4>
      </div>

      <div
        style={{
          height: "calc(100vh - 80px)",
          overflow: "auto",
          paddingTop: "80px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        {item.title === "Getting started" && <GettingStarted />}
        {item.content.map((paragraph, index) => (
          <motion.h4
            key={index}
            className="text-md md:text-md mb-2 text-muted-foreground text-wrap"
            initial={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {paragraph}
          </motion.h4>
        ))}
      </div>
    </div>
  );
}
