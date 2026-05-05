"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";

const Home = () => {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const image =
    "https://rise-atseven.transforms.svdcdn.com/production/images/unnamed-6.png?w=213&h=278&q=100&auto=format&fit=crop&dm=1750948726&s=0ecee9869674cd309d3170dfd7b29674";

  return (
    <main>
      {!isPreloaderDone && (
        <Preloader onComplete={() => setIsPreloaderDone(true)} />
      )}
      <Navbar />
      <Hero bgImage={image} isPreloaderDone={isPreloaderDone} />
    </main>
  );
};

export default Home;
