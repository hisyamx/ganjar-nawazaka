"use client";

import React, { useEffect, useState } from "react";

import AccountSection from "./section/AccountSection";
import AddressSection from "./section/AddressSection";
import BlockPintch from "./BlockPintch";
import CalendarSection from "./section/CalendarSection";
import CoupleSection from "./section/CoupleSection";
import GallerySection from "./section/GallerySection";
import IntroduceSection from "./section/IntroduceSection";
import Spacing from "./Spacing";
import Welcome from "./welcome/Welcome";
import StorySection from "./section/StorySection";

const WeddingScroll = () => {
  const [visitedWelcome, setVisitedWelcome] = useState(false);
  const [visitedAll, setVisitedAll] = useState(false);

  useEffect(() => {
    if (visitedAll) {
      document.body.style.overflow = "auto";
    } else if (!visitedWelcome) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [visitedWelcome, visitedAll]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <BlockPintch>
      <main
        className="w-full absolute min-h-screen overflow-x-hidden flex flex-col max-w-[28.125rem] right-2/4 scroll-smooth"
        style={{ transform: `translate(50%)` }}
      >
        {/* <div className="absolute inset-0 bg-black/70 z-10" /> */}
        {/* <main
          className="w-full absolute min-h-screen overflow-x-hidden flex flex-col large:max-w-[430px] right-2/4 scroll-smooth"
          style={{ transform: `translate(50%)` }}
        > */}
        <section id="scroll-container" className="relative w-full h-full">
          {!visitedWelcome && (
            <section className="absolute top-0 left-0 w-full h-full z-10">
              <Welcome onNext={() => setVisitedWelcome(true)} />
            </section>
          )}
          <IntroduceSection visitedWelcome={visitedWelcome} />
          {/* <Spacing size={100} /> */}
          <StorySection />
          <Spacing size={100} />
          <CoupleSection />
          <Spacing size={100} />
          <CalendarSection />
          <Spacing size={100} />
          <AddressSection />
          <Spacing size={100} />
          <GallerySection />
          <Spacing size={80} />
          <AccountSection onDone={() => setVisitedAll(true)} />
        </section>
      </main>
    </BlockPintch>
  );
};

export default WeddingScroll;
