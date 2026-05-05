"use client";

import AnimatedText from "@/app/components/AnimatedText";
import Logo from "@/app/components/logos/Logo";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const links = [
  { name: "Services +", href: "#" },
  { name: "Industries +", href: "#" },
  { name: "International +", href: "#" },
  { name: "About", href: "#" },
  { name: "Work +", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Webinar", href: "#" },
];

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed top-2 left-2 right-2 z-40 text-white p-4">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Logo className="w-40" />
        </Link>
        <div
          className="flex items-center gap-2 font-semibold"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="relative px-4 py-0.5 rounded-full transition-colors duration-300 z-10"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="navbar-hover-bg"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-300 ${hoveredIndex === index ? "text-black" : "text-white"}`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        <div>
          <button className="relative overflow-hidden py-2 px-8 rounded-4xl bg-white text-black font-semibold hover:rounded-xl transition-all duration-300 ease-out group">
            <AnimatedText>
              Get In Touch <FaArrowRight size={15} className="-rotate-45" />
            </AnimatedText>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
