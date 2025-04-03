"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../mode-toggle/ModeToggle";
import { contentOfApp } from "@/content";
import { FaDownload, FaGithub } from "react-icons/fa6";

const navItems =
  contentOfApp.life === "enabled"
    ? [
        { name: "Portfolio", href: "/" },
        { name: "Life", href: "/life" },
      ]
    : [{ name: "Portfolio", href: "/" }];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`h-16 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#" className="text-2xl font-bold">
          Who Am I ?
        </Link>

        <div className="hidden md:flex items-center space-x-2">
          <nav className="flex space-x-6 mr-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Button
            onClick={() =>
              window.open("https://github.com/vietnguyenhcmut/my-porfolio")
            }
            className="flex flex-row items-center gap-2"
          >
            <FaGithub />
            Source Code
          </Button>

          <Button>
            {" "}
            <a
              download
              href="/CV_NguyenVanViet_LT.pdf"
              className="flex flex-row items-center gap-2"
            >
              <FaDownload /> Download My CV
            </a>
          </Button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-background z-50 md:hidden"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col items-center space-y-6 p-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Button className="mt-4 w-full">Download My CV</Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
