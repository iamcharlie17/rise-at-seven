"use client";

import AnimatedText from "@/app/components/AnimatedText";
import Logo from "@/app/components/logos/Logo";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

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
  const { scrollY } = useScroll();
  const [navbarState, setNavbarState] = useState<
    "initial" | "top" | "hidden" | "modified"
  >("initial");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    if (latest < 25) {
      setNavbarState("initial");
    } else if (latest >= 25 && latest < 120) {
      setNavbarState("top");
    } else if (latest >= 120) {
      if (latest > previous) {
        setNavbarState("hidden");
      } else {
        setNavbarState("modified");
      }
    }
  });

  const isModified = navbarState === "modified";

  return (
    <motion.div
      className="fixed left-2 right-2 z-40 p-4"
      variants={{
        initial: {
          y: 10,
          backgroundColor: "rgba(255, 255, 255, 0)",
          borderRadius: "0px",
          backdropFilter: "blur(0px)",
        },
        top: {
          y: -30,
          backgroundColor: "rgba(255, 255, 255, 0)",
          borderRadius: "0px",
          backdropFilter: "blur(0px)",
        },
        hidden: {
          y: "-150%",
          backgroundColor: "rgba(255, 255, 255, 0)",
          borderRadius: "0px",
          backdropFilter: "blur(0px)",
        },
        modified: {
          y: -30,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "9999px",
          backdropFilter: "blur(16px)",
          margin: "0 4px",
          padding: "10px 18px",
        },
      }}
      initial="initial"
      animate={navbarState}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div
        className={`flex justify-between items-center transition-colors duration-300 ${isModified ? "text-black" : "text-white"}`}
      >
        <Link href="/">
          <Logo
            className={`w-30 lg:w-40 ${isModified ? "text-black" : "text-white"}`}
          />
        </Link>
        <div
          className="hidden lg:flex items-center gap-2 font-semibold"
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
                  className={`absolute inset-0 rounded-full -z-10 bg-white`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  hoveredIndex === index
                    ? "text-black"
                    : isModified
                      ? "text-black"
                      : "text-white"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        <div>
          <button
            className={`hidden lg:flex relative overflow-hidden py-2 px-8 rounded-4xl font-semibold hover:rounded-xl transition-all duration-300 ease-out group cursor-pointer ${
              isModified ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <AnimatedText>
              Get In Touch <FaArrowRight size={15} className="-rotate-45" />
            </AnimatedText>
          </button>
          <button className="block lg:hidden">
            <HiOutlineMenuAlt4 size={30}/>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
