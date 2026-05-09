"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import Button from "./buttons/Button";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.jpg";
import { FaClock } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const image =
  "https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad";
const authorImg =
  "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=1231&h=1145&q=100&auto=format&fit=crop&dm=1750949501&s=fe120a0db5c7acc0cd0c72601fb4ba89";

const whatNewData = [
  {
    id: 1,
    title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
    image: img1,
    time: "2 mins",
    author: { img: authorImg, name: "Ray Saddiq" },
  },
  {
    id: 2,
    title:
      "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as the go for global expansion",
    image: img2,
    time: "2 mins",
    author: { img: authorImg, name: "Ray Saddiq" },
  },
  {
    id: 3,
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    image: img3,
    time: "2 mins",
    author: { img: authorImg, name: "Carrie Rose" },
  },
];

const WhatNew = () => {
  return (
    <>
      <section className="lg:min-h-screen lg:-mt-200 py-8 lg:py-12 px-2 lg:px-4">
        <div className="flex justify-between items-end">
          <div className="text-5xl lg:text-8xl font-medium lg:flex items-center gap-2">
            <div className="flex items-end lg:items-center gap-2">
              <div className="overflow-hidden pb-2">
                <motion.h1
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  What&apos;s
                </motion.h1>
              </div>
              <motion.img
                src={image}
                alt="Service"
                initial={{ width: 0 }}
                whileInView={{ width: "var(--img-w)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.6,
                }}
                className="h-16 lg:h-24 object-cover rounded-md [--img-w:4rem] lg:[--img-w:6rem]"
              />
            </div>
            <div className="overflow-hidden pb-2 mt-2 lg:mt-0">
              <motion.h1
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1,
                }}
              >
                New
              </motion.h1>
            </div>
          </div>
          <div className="hidden lg:block">
            <Button type="white">
              <AnimatedText>Explore More Thoughts</AnimatedText>
            </Button>
          </div>
        </div>

        <hr className="mt-8 mb-12 text-gray-400 hidden lg:block" />

        <MobileWhatNew />
        <DesktopWhatNew />

        <div className="block lg:hidden mt-4">
          <Button type="white">Explore More Thoughts</Button>
        </div>
      </section>
    </>
  );
};

export default WhatNew;

const MobileWhatNew = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = whatNewData.length;

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > current ? 1 : -1);
      setCurrent(((next % total) + total) % total);
    },
    [current, total],
  );

  const sliderVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: "0%", opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div className="lg:hidden">
      <div className="relative overflow-hidden">
        {/* Ghost card to anchor the exact height */}
        <div
          className="w-[90%] p-4 invisible pointer-events-none py-2"
          aria-hidden
        >
          <div className="w-full aspect-square" />
          <div className="mt-4 space-y-2">
            <div className="flex gap-2 items-center text-sm">
              <div className="px-2.5 py-1.5 flex gap-1 items-center">
                <div className="h-5 w-5" />
                <span>&nbsp;</span>
              </div>
            </div>
            <h2 className="text-xl font-medium">{whatNewData[1].title}</h2>
          </div>
        </div>

        <div className="absolute inset-0 py-2 flex gap-4 w-full">
          <AnimatePresence custom={direction} mode="popLayout" initial={false}>
            {[0, 1].map((offset) => {
              const idx = (((current + offset) % total) + total) % total;
              const activeCard = whatNewData[idx];
              return (
                <motion.div
                  key={activeCard.id}
                  layout
                  custom={direction}
                  variants={sliderVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -40) goTo(current + 1);
                    else if (info.offset.x > 40) goTo(current - 1);
                  }}
                  className="min-w-[90%] w-[90%] h-full rounded-2xl bg-[#EFEEEC] cursor-grab active:cursor-grabbing"
                >
                  <img
                    src={activeCard.image.src}
                    alt={activeCard.title}
                    className="w-full aspect-square object-cover rounded-xl pointer-events-none"
                  />
                  <div className="mt-4 space-y-2">
                    <div className="text-gray-400 font-medium flex gap-2 items-center">
                      <div className="px-2.5 py-1.5 bg-white flex gap-1 items-center rounded-full text-sm">
                        <img
                          src={activeCard.author.img}
                          alt=""
                          className="h-5 aspect-square rounded-full object-cover pointer-events-none"
                        />
                        <span>{activeCard.author.name}</span>
                      </div>
                      <div className="px-2.5 py-1.5 bg-white flex gap-1 items-center rounded-full text-sm">
                        <FaClock />
                        <span>{activeCard.time}</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-medium text-black">
                      {activeCard.title}
                    </h2>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-4 w-full h-[3px] bg-black/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-black rounded-full"
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>
    </div>
  );
};

const DesktopWhatNew = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className={`hidden lg:block fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${isHovered ? "opacity-100" : "opacity-0"}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      >
        <div
          className={`bg-[#B2F6E3] text-black -rotate-45 rounded-full w-24 h-24 p-8 flex justify-center items-center transition-transform duration-300 ${isHovered ? "scale-100" : "scale-[0.1]"}`}
        >
          <HiArrowRight size={30} />
        </div>
      </div>

      <div className="hidden lg:flex justify-between gap-4">
        {whatNewData?.map((n) => (
          <div
            key={n.id}
            className="space-y-5 group cursor-none transition-transform duration-300 hover:-translate-y-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={n.image.src}
                alt=""
                className="aspect-square object-cover w-full transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full scale-0 group-hover:scale-[150] origin-center transition-transform duration-700 ease-in-out z-10 pointer-events-none bg-white/20" />
            </div>
            <div className="space-y-2">
              <div className="text-gray-400 font-medium flex gap-2 items-center text-lg">
                <div className="px-2.5 py-1.5 bg-white flex gap-1 items-center rounded-full">
                  <img
                    src={n.author.img}
                    alt=""
                    className="h-6 aspect-square rounded-full object-cover"
                  />
                  <h1>{n.author.name}</h1>
                </div>
                <div className="px-2.5 py-1.5 bg-white flex gap-1 items-center rounded-full">
                  <FaClock />
                  <h1>{n.time}</h1>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-medium text-black max-w-120">
                  {n.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
