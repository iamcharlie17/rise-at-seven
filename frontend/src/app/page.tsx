"use client";

import { useState } from "react";
import Announcement from "./components/Announcement";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Agencies from "./components/Agencies";
import DrivingDemand from "./components/DrivingDemand";
import FeaturedWork from "./components/FeaturedWork";
import Service from "./components/Service";
import Sliding from "./components/Sliding";
import Legacy from "./components/Legacy";
import WhatNew from "./components/WhatNew";
import Footer from "./components/Footer";

const Home = () => {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const image =
    "https://rise-atseven.transforms.svdcdn.com/production/images/unnamed-6.png?w=213&h=278&q=100&auto=format&fit=crop&dm=1750948726&s=0ecee9869674cd309d3170dfd7b29674";

  return (
    <main className="bg-[#EFEEEC] p-1 lg:p-2">
      {!isPreloaderDone && (
        <Preloader onComplete={() => setIsPreloaderDone(true)} />
      )}
      <Announcement />
      <Navbar />
      <Hero bgImage={image} isPreloaderDone={isPreloaderDone} />
      <Agencies />
      <DrivingDemand />
      <FeaturedWork />
      <Service />
      <Sliding />
      <Legacy/>
      <WhatNew/>
      <Footer/>
    </main>
  );
};

export default Home;
