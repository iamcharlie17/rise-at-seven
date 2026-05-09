"use client";

import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { HiArrowRight } from "react-icons/hi";

const Sliding = () => {
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
    <section>
      <Marquee speed={50} loop={0}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="cursor-grab lg:cursor-none relative text-[65px] lg:text-[200px] font-medium leading-none flex items-center gap-4 pb-8 lg:py-16">
          <h1 className="whitespace-nowrap">Chasing Consumers</h1>
          <img
            src="https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=69735376fddade35059585570e316087"
            alt=""
            className="w-24 h-24 lg:w-48 lg:h-48 rounded-2xl object-cover"
          />
          <h1 className="whitespace-nowrap">Not Algorithms</h1>
          <img
            src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad"
            alt=""
            className="w-24 h-24 lg:w-48 lg:h-48 rounded-2xl object-cover"
          />
        </div>
      </Marquee>

      <div
        className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          opacity: isHovered ? 1 : 0
        }}
      >
        <button
          className={`flex items-center text-lg px-6 py-3 rounded-full bg-[#B3F6E3] font-medium text-black transition-all duration-300 ${isHovered ? "scale-100" : "scale-10"
            }`}
        >
          Send Us Your Brief
          <HiArrowRight size={20} className="-rotate-45 ml-2" />
        </button>
      </div>
    </section>
  );
};

export default Sliding;
