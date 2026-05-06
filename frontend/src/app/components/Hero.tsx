"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaAmazon } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { SiPinterest, SiReddit, SiTiktok, SiYoutube } from "react-icons/si";
import LaurelWreathLeft from "./icons/laurel-wreath-left";
import LaurelWreathRight from "./icons/laurel-wreath-right";

const Hero = ({
  bgImage,
  isPreloaderDone,
}: {
  bgImage: string;
  isPreloaderDone: boolean;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="h-[calc(100vh-1rem)] my-2 bg-cover bg-center flex items-center justify-center relative rounded-3xl overflow-hidden text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
      }}
    >
      <style>{`
        @keyframes expandWidth {
          from {
            width: 0rem;
          }
          to {
            width: 7.5rem;
          }
        }
        @keyframes expandWidthMobile {
          from {
            width: 0rem;
          }
          to {
            width: 3.5rem;
          }
        }
        .hero-expand-img {
          width: 0rem;
          height: 7.5rem;
          animation: ${isPreloaderDone ? "expandWidth 0.4s ease-out 0.5s forwards" : "none"};
        }
        @media (max-width: 1024px) {
          .hero-expand-img {
            height: 3.5rem;
            animation: ${isPreloaderDone ? "expandWidthMobile 0.4s ease-out 0.5s forwards" : "none"};
          }
        }
      `}</style>

      <div
        className="absolute inset-0 blur-md"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      <div className="container mx-auto flex flex-col gap-2 items-center px-4 py-8 lg:py-12 text-center z-10 relative">
        <p className="uppercase text-[12px] lg:text-sm font-semibold text-white leading-none">
          #1 Most recommended <br /> content marketing agency
        </p>
        <div className="flex items-center">
          <div>
            <LaurelWreathLeft />
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <img
              src="https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/global-search-awards.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847622&s=590d094eb1537f802651cf997f550bbb"
              alt="Company Logo"
              width={50}
            />
            <img
              src="https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/Mask-group.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847620&s=e302afbd58f1be1cd9a3b75a2d8969fe"
              alt="Company Logo"
              width={30}
            />
            <img
              src="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UKSocial-Media-Awards-White.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=8ab3593005a19fec2b91467ddd4869ea"
              alt="Company Logo"
              width={60}
            />
            <img
              src="https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UK-Content-Awards-White.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=1eb3d80746ace5c014434b6f0284de6f"
              alt="Company Logo"
              width={60}
            />
          </div>
          <div>
            <LaurelWreathRight />
          </div>
        </div>
        <div className="text-white text-6xl lg:text-9xl font-semibold flex flex-col items-center leading-none tracking-tight pt-4">
          <div className="overflow-hidden pb-1">
            <motion.h1
              initial={{ y: "100%" }}
              animate={isPreloaderDone ? { y: "0" } : { y: "100%" }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.05,
              }}
            >
              WeCreate
            </motion.h1>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-1 overflow-hidden pb-1 -mt-2">
            <div className="flex items-center justify-center gap-1">
              <motion.h1
                initial={{ y: "100%" }}
                animate={isPreloaderDone ? { y: 0 } : { y: "100%" }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1,
                }}
              >
                Category
              </motion.h1>
              <img
                src={bgImage}
                alt=""
                className="hero-expand-img rounded-xl lg:rounded-2xl object-cover object-center"
              />
            </div>
            <motion.h1
              initial={{ y: "100%" }}
              animate={isPreloaderDone || isMobile ? { y: 0 } : { y: "100%" }}
              transition={{
                duration: isMobile ? 0 : 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="lg:ml-2 text-center w-full lg:w-auto -mt-2"
            >
              Leaders
            </motion.h1>
          </div>
        </div>
        <div className="text-white font-semibold text-lg lg:text-3xl">
          <h1>on every searchable platform</h1>
        </div>

        <section className=" hidden lg:flex flex-row items-center justify-center gap-8 mt-8 flex-wrap">
          <div>
            <div className="text-white text-2xl font-semibold">Google</div>
          </div>

          <div>
            <div className="text-white font-semibold">ChatGPT</div>
          </div>

          <div>
            <div className="text-white font-semibold">Gemini</div>
          </div>

          <div className="flex flex-row items-center gap-1">
            <SiTiktok className="text-white" size={20} />
            <div className="text-white font-semibold">TikTok</div>
          </div>

          <div className="flex flex-row items-center gap-1">
            <SiYoutube className="text-white" size={20} />
            <div className="text-white font-semibold">YouTube</div>
          </div>

          <div className="flex flex-row items-center gap-1">
            <SiPinterest className="text-white" size={20} />
            <div className="text-white font-semibold">Pinterest</div>
          </div>

          <div className="flex flex-row items-center gap-1">
            <FiFileText className="text-white" size={20} />
            <div className="text-white font-semibold">Giphy</div>
          </div>

          <div className="flex flex-row items-center gap-1">
            <SiReddit className="text-white" size={20} />
            <div className="text-white font-semibold">Reddit</div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <FaAmazon className="text-white" size={20} />
          </div>
        </section>
      </div>

      <div className="absolute bottom-12 lg:bottom-16 w-full text-center z-20">
        <h1 className="font-semibold text-sm lg:text-xl text-white">
          4 Global Offices serving <br /> UK, USA (New York) & EU
        </h1>
      </div>
    </section>
  );
};

export default Hero;
