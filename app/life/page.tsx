"use client";

import Leftbar from "@/components/life/left-bar/Leftbar";
import MainContent from "@/components/life/main-content/MainContent";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export type ContentOfLifeProps = {
  title: string;
  content: string[];
};

const contentOfLife: ContentOfLifeProps[] = [
  {
    title: "Getting started",
    content: [],
  },
  {
    title: "Where are you in this world?",
    content: [
      "Have you ever thought about this world? About where you came from ? And why do you live ?",
      "If you have, maybe...",
      "So, why you are searching this ...",
      "Have you ever thought about this world? About where you came from ? And why do you live ?",
      "If you have, maybe...",
      "So, why you are searching this ...",
      "Have you ever thought about this world? About where you came from ? And why do you live ?",
      "If you have, maybe...",
      "So, why you are searching this ...",
      "Have you ever thought about this world? About where you came from ? And why do you live ?",
      "If you have, maybe...",
      "So, why you are searching this ...",
      "Have you ever thought about this world? About where you came from ? And why do you live ?",
      "If you have, maybe...",
      "So, why you are searching this ...",
      "Have you ever thought about this world? About where you came from ? And why do you live ?",
      "If you have, maybe...",
      "So, why you are searching this ...",
      "Have you ever thought about this world? About where you came from ? And why do you live ?",
      "If you have, maybe...",
      "So, why you are searching this ...",
      "Have you ever thought about this world? About where you came from ? And why do you live ?",
      "If you have, maybe...",
      "So, why you are searching this ...",
      "Have you ever thought about this world? About where you came from ? And why do you live ?",
      "If you have, maybe...",
      "So, why you are searching this ...",
      "Have you ever thought about this world? About where you came from ? And why do you live ?",
      "If you have, maybe...",
      "So, why you are searching this ...",
      "Have you ever thought about this world? About where you came from ? And why do you live ?",
      "If you have, maybe...",
      "So, why you are searching this ...",
      "Have you ever thought about this world? About where you came from ? And why do you live ?",
      "If you have, maybe...",
      "So, why you are searching this ...",
      "Have you ever thought about this world? About where you came from ? And why do you live ?",
      "If you have, maybe...",
      "So, why you are searching this ...",
    ],
  },
  {
    title: "Part 2",
    content: ["Part 2"],
  },
  {
    title: "Part 3",
    content: ["Part 3"],
  },
  {
    title: "Part 4",
    content: ["Part 4"],
  },
  {
    title: "Part 5",
    content: ["Part 5"],
  },
  {
    title: "Part 6",
    content: ["Part 6"],
  },
  {
    title: "Part 7",
    content: ["Part 7"],
  },
  {
    title: "Part 8",
    content: ["Part 8"],
  },
  {
    title: "Part 9",
    content: ["Part 9"],
  },
  {
    title: "Part 10",
    content: ["Part 10"],
  },
  {
    title: "Part 11",
    content: ["Part 11"],
  },
  {
    title: "Part 12",
    content: ["Part 12"],
  },
  {
    title: "Part 13",
    content: ["Part 13"],
  },
  {
    title: "Part 14",
    content: ["Part 14"],
  },
  {
    title: "Part 15",
    content: ["Part 15"],
  },
  {
    title: "Part 16",
    content: ["Part 16"],
  },
  {
    title: "Part 17",
    content: ["Part 17"],
  },
  {
    title: "Part 18",
    content: ["Part 18"],
  },
  {
    title: "Part 19",
    content: ["Part 19"],
  },
  {
    title: "Part 20",
    content: ["Part 20"],
  },
];

export default function Life() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [indexOfItem, setIndexOfItem] = useState(0);
  const [item, setItem] = useState(contentOfLife[0]);

  useEffect(() => {
    setItem(contentOfLife[indexOfItem]);
  }, [indexOfItem]);

  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center">
        <Navbar />
        <p className="absolute top-1/2 text-4xl text-muted-foreground">
          Are you looking for my sharing on meditation? It will come soon !
        </p>
        {/* <div className="w-full flex flex-row pt-16 border-t">
          <Leftbar
            contentOfLife={contentOfLife}
            setIndexOfItem={setIndexOfItem}
          />
          <MainContent item={item} />
        </div> */}
      </div>
    </main>
  );
}
