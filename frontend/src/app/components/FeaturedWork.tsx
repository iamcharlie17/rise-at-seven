"use client";

import { useEffect, useRef, useState } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const works = [
  {
    id: 1,
    title: "SIXT",
    description: "An extra 3m clicks regionally through SEO",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=2414c4f856c059625e43608b5128cfd5",
    date: "2023-2025",
    type: "Car rental",
    color: "#CB7B39",
  },
  {
    id: 2,
    title: "Dojo - B2B",
    description: "An extra 3m clicks regionally through SEO",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=dd63f860a1924655216d5eb62cf5e592",
    date: "2021-2025",
    type: "Card Machines",
    color: "#FDD8C4",
  },
  {
    id: 3,
    title: "Magnet Trade - B2B",
    description: "An extra 3m clicks regionally through SEO",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=381490e8c73ef79a1885309fd0b0c48a",
    date: "2023-2024",
    type: "",
    color: "#D8C4FD",
  },
  {
    id: 4,
    title: "Leading E Sim brand globally",
    description: "An extra 3m clicks regionally through SEO",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=49e33faaf74314496fd5f00b47fe926c",
    date: "2023-2025",
    type: "Esims",
    color: "#CB7B39",
  },
  {
    id: 5,
    title: "JD Sports",
    description: "An extra 3m clicks regionally through SEO",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=b0de9817445481a8f52dce0b5c443bbc",
    date: "2025",
    type: "Trainers",
    color: "#CB7B39",
  },
  {
    id: 6,
    title: "Parkdean Resorts",
    description: "An extra 3m clicks regionally through SEO",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=cbb1e369eeca98550153bca9743dbacb",
    date: "2019-2025",
    type: "Easter Breaks",
    color: "#D2B59D",
  },
];

const FeaturedWork = () => {
  return (
    <>
      <DesktopFeaturedWork />
      <MobileFeaturedWork />
    </>
  );
};

export default FeaturedWork;



const DesktopFeaturedWork = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredWorkId, setHoveredWorkId] = useState<number | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !titleContainerRef.current || !imageContainerRef.current) return;

      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const maxScroll = height - windowHeight;
      const scrolled = -top;

      let percentage = 0;
      if (maxScroll > 0) {
        percentage = scrolled / maxScroll;
      }

      if (percentage < 0) percentage = 0;
      if (percentage > 1) percentage = 1;

      const imgContainer = imageContainerRef.current;
      const titleContainer = titleContainerRef.current;

      const imgMax = imgContainer.scrollHeight - imgContainer.clientHeight;
      const titleMax = titleContainer.scrollHeight - titleContainer.clientHeight;

      imgContainer.scrollTop = percentage * imgMax;
      titleContainer.scrollTop = percentage * titleMax;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <>
    {isHovered && (
      <div
        className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      >
        <div className="bg-[#B2F6E3] text-black -rotate-45 p-8 rounded-full w-24 h-24 flex justify-center items-center transition-colors duration-300">
          <div>
            <HiArrowRight size={30} />
          </div>
        </div>
      </div>
    )}
    <div ref={sectionRef} className="hidden lg:block h-[350vh] relative">
      <section className="sticky top-0 p-4 h-screen">
        <div className="bg-black rounded-2xl h-full flex justify-between">
          <div className="flex-1 py-20 pl-12 space-y-20 text-white">
            <h1 className="text-lg font-medium">Featured Work</h1>
            <div className="relative">
              <div className="absolute top-0 w-full h-56 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
              <div
                className="h-[68vh] overflow-hidden"
                ref={titleContainerRef}
              >
                <div className="h-1/3"></div>
                {works?.map((work) => (
                  <div
                    key={work.id}
                    className="flex gap-2"
                    onMouseEnter={() => setHoveredWorkId(work.id)}
                    onMouseLeave={() => setHoveredWorkId(null)}
                  >
                    <h1
                      className={`text-[80px] leading-none font-medium cursor-pointer transition-all duration-300 py-1 ${
                        hoveredWorkId === work.id ? "pl-4" : ""
                      }`}
                    >
                      {work.title}
                    </h1>
                    <span className="text-xs">[{work.date}]</span>
                  </div>
                ))}
                <div className="h-1/3"></div>
              </div>
              <div className="absolute bottom-0 w-full h-56 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
          <div
            className="flex-1 p-8 pb-0 overflow-hidden"
            ref={imageContainerRef}
          >
            <div className="flex flex-col gap-8 items-end">
              {works?.map((work) => (
                <div
                  key={work.id}
                  className="relative group rounded-2xl overflow-hidden cursor-none"
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setHoveredWorkId(work.id);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setHoveredWorkId(null);
                  }}
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className={`w-3xl object-cover transition-transform duration-500 group-hover:scale-105 ${hoveredWorkId === work.id ? "scale-105" : ""}`}
                  />
                  <div
                    className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full scale-0 group-hover:scale-[150] origin-center transition-transform duration-700 ease-in-out z-10 pointer-events-none ${hoveredWorkId === work.id ? "scale-[150]" : ""}`}
                    style={{ backgroundColor: work.color }}
                  ></div>

                  <div className={`absolute top-0 left-0 w-full p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 z-20 pointer-events-none ${hoveredWorkId === work.id ? "opacity-100" : ""}`}>
                    <p className="text-6xl text-black font-medium">{work.description}</p>
                  </div>

                  {work.type && (
                    <span className="absolute bottom-4 right-4 bg-[#EFEEEC]/20 backdrop-blur-md px-3 py-1 rounded-full font-medium flex items-center gap-2 pointer-events-none text-white z-30">
                      <FaSearch /> {work.type} <BsGraphUpArrow />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div></>
}

const MobileFeaturedWork = () => {
  return (
    <section className="flex lg:hidden p-2 h-[calc(100vh-16px)] bg-black text-white rounded-2xl overflow-scroll">
      <div className="p-4">
        <h1 className="font-medium text-lg">Featured Work</h1>
        <div className="flex flex-col gap-4">
          {works?.map((work) => (
            <div
              key={work.id}
              className="relative mt-4 rounded-2xl overflow-hidden"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
              {work.type && (
                <span className="absolute top-4 right-4 bg-[#EFEEEC]/50 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                  <FaSearch /> {work.type} <BsGraphUpArrow />
                </span>
              )}
              <div className="absolute bottom-4 left-4">
                <p className="text-[12px] font-medium">[{work.date}]</p>
                <h2 className="font-semibold text-3xl">{work.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
