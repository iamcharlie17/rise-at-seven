"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      {/* Custom cursor — same style as FeaturedWork */}
      <div
        className={`fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${isHovered ? "opacity-100" : "opacity-0"
          }`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      >
        <div
          className={`bg-[#B2F6E3] text-black -rotate-45 rounded-full w-24 h-24 p-8 flex justify-center items-center transition-transform duration-300 ${isHovered ? "scale-100" : "scale-[0.1]"
            }`}
        >
          <HiArrowRight size={30} />
        </div>
      </div>

      <section className="lg:min-h-screen lg:-mt-200 py-8 lg:py-12 px-2 lg:px-4">
        {/* Header */}
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
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                className="h-16 lg:h-24 object-cover rounded-md [--img-w:4rem] lg:[--img-w:6rem]"
              />
            </div>
            <div className="overflow-hidden pb-2 mt-2 lg:mt-0">
              <motion.h1
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
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

        <hr className="mt-8 mb-12 text-gray-400" />

        {/* Cards */}
        <div className="flex justify-between gap-4">
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
      </section>
    </>
  );
};

export default WhatNew;
