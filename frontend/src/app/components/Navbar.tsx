"use client";

import AnimatedText from "@/app/components/AnimatedText";
import Logo from "@/app/components/logos/Logo";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <>
      <MobileModal
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <motion.div
        className="fixed left-2 right-2 z-40 p-4 lg:p-4"
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
            <button
              className="flex items-center justify-center lg:hidden relative z-40 p-2 -mr-2 outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <HiOutlineMenuAlt4 size={30} className="pointer-events-none" />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;

const MobileAccordionItem = ({
  title,
  items
}: {
  title: string;
  items?: string[]
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => items && setIsOpen(!isOpen)}
      >
        <h1>{title}</h1>
        {items && (
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="p-1 border border-white rounded-full pointer-events-none"
          >
            <IoIosArrowDown size={15} />
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {isOpen && items && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col text-lg py-2 text-white font-medium">
              {items.map((item, idx) => (
                <span key={idx}>{item}</span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 lg:hidden flex p-2"
        >
          <div
            className="absolute inset-0 bg-black/40  backdrop-blur-sm"
            onClick={onClose}
          />

          <div className="relative w-full h-full bg-black/50 backdrop-blur-md flex flex-col justify-between rounded-3xl overflow-hidden shadow-2xl">
            <section>
              <div className="flex justify-between items-center px-4 py-2">
                <Logo className="w-30 text-white" />
                <button
                  className="relative z-50 p-2 text-white outline-none -mr-2"
                  onClick={onClose}
                >
                  <motion.div
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiOutlineX size={30} className="pointer-events-none" />
                  </motion.div>
                </button>
              </div>

              <div className="text-white px-4 pt-8 font-semibold text-4xl overflow-y-auto max-h-[70vh]">
                <MobileAccordionItem
                  title="Services"
                  items={["Search & Growth Strategy", "Onsite SEO", "Content Experience", "B2B Marketing"]}
                />
                <MobileAccordionItem
                  title="Industries"
                  items={["B2B Marketing"]}
                />
                <MobileAccordionItem
                  title="International"
                  items={["US Digital PR", "Spain Digital PR"]}
                />
                <MobileAccordionItem
                  title="About"
                  items={["About Us", "Meet The Risers", "Culture"]}
                />
                <MobileAccordionItem title="Work" />
                <MobileAccordionItem title="Careers" />
                <MobileAccordionItem title="Blog" />
                <MobileAccordionItem title="Webinar" />
              </div>
            </section>

            <section className="m-2 shrink-0">
              <button
                className="py-2 px-8 rounded-4xl font-semibold w-full bg-white flex gap-2 items-center justify-center"
              >
                  Get In Touch <FaArrowRight size={15} className="-rotate-45" />
              </button>
            </section>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
