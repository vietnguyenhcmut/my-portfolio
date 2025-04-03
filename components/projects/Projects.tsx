"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { contentOfApp } from "@/content";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          My Projects
        </motion.h2>
        <motion.div
          className="h-1 w-20 bg-primary mx-auto"
          initial={{ width: 0 }}
          animate={isInView ? { width: 150 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contentOfApp.portfolio.projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <Card className="overflow-hidden h-full flex flex-col">
              {/* <div className="relative h-48 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div> */}
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-muted px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    onClick={() => window.open(project.linkGithub, "_blank")}
                    disabled={project.linkGithub === ""}
                  >
                    <div className="flex flex-row items-center">
                      {" "}
                      <FaGithub className="h-4 w-4 mr-2" />
                      Source
                    </div>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    onClick={() => window.open(project.linkDemo, "_blank")}
                    disabled={project.linkDemo === ""}
                  >
                    <div className="flex flex-row items-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
