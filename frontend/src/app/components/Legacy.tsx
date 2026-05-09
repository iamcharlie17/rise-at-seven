"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type CardType = {
  id: number;
  bgColor: string;
  textColor: string;
  image: string;
  title: string;
  description: React.ReactNode;
  rotation: number;
  zIndex: string;
};

const legacyCards: CardType[] = [
  {
    id: 1,
    bgColor: "bg-black",
    textColor: "text-white",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=69735376fddade35059585570e316087",
    title: "Pioneers",
    description: (
      <>
        We&apos;re dedicated to creating the industry narrative that others
        follow 3 years from now. We paved the path for creative SEO,
        multi-channel search with Digital PR, and Social Search and we will
        continue to do it
        <br />
        <br />
        We&apos;re on a mission to be the first search-first agency to win a
        Cannes Lion disrupting the status quo.
      </>
    ),
    rotation: 5,
    zIndex: "z-30",
  },
  {
    id: 2,
    bgColor: "bg-[#B2F6E3]",
    textColor: "text-black",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=69735376fddade35059585570e316087",
    title: "Award Winning",
    description: (
      <>
        A roll top bath full of 79 awards. Voted The Drum&apos;s best agency
        outside of London. We are official judges for industry awards including
        Global Search Awards and Global Content Marketing Awards.
      </>
    ),
    rotation: 10,
    zIndex: "z-20",
  },
  {
    id: 3,
    bgColor: "bg-white",
    textColor: "text-black",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=211fe5c665b93a978c596f9070aed44c",
    title: "Speed",
    description: (
      <>
        People ask us why we are called Rise at Seven? Ever heard the saying
        Early Bird catches the worm? Google is moving fast, but humans are
        moving faster. We chase consumers, not algorithms. We&apos;ve created a
        service which takes ideas to result within 60 minutes.
      </>
    ),
    rotation: 15,
    zIndex: "z-10",
  },
];

const Legacy = () => {
  return (
    <>
      <DesktopLegacy />
    </>
  );
};

export default Legacy;

const DesktopLegacy = () => {
  // Outer ref: full scroll range for animations (400vh → range = 300vh)
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  return (
    <div ref={scrollRef} className="h-[300vh] relative">
      {/*
        Inner div height = 250vh → sticky releases after 250-100 = 150vh of scroll.
        Card 3 starts at scrollYProgress=0.5 = 0.5×300vh = 150vh. They match exactly,
        so the section un-sticks the moment card 3 begins its animation.
      */}
      <div className="h-[250vh]">
        <section className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center py-16">
          <h1 className="text-center text-xl font-medium mb-12">
            Legacy In The Making
          </h1>
          <div className="grid grid-cols-1 grid-rows-1 place-items-center flex-1">
            {legacyCards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                scrollYProgress={scrollYProgress}
                index={index}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const Card = ({
  card,
  scrollYProgress,
  index,
}: {
  card: CardType;
  scrollYProgress: MotionValue<number>;
  index: number;
}) => {
  const duration = 0.5;
  const start = index * 0.25;
  const end = start + duration;

  const y = useTransform(scrollYProgress, [start, end], ["0vh", "-120vh"]);
  const rotate = useTransform(
    scrollYProgress,
    [start, end],
    [card.rotation, -45],
  );

  return (
    <motion.div
      className={`col-start-1 row-start-1 ${card.zIndex} ${card.bgColor} ${card.textColor} w-140 aspect-square p-12 flex flex-col items-center gap-4 rounded-3xl origin-center`}
      style={{ y, rotate }}
    >
      <img
        src={card.image}
        alt={card.title}
        className="w-44 h-44 object-cover rounded-2xl"
      />
      <h1 className="text-7xl font-medium text-center">{card.title}</h1>
      <p className="text-center">{card.description}</p>
    </motion.div>
  );
};
