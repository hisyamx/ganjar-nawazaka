"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  useEffect(() => {
    if (visitedWelcome && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    }
  }, [visitedWelcome]);

  const handlePlayPauseMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Failed to play audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <BlockPintch>
      <main
        className="w-full absolute min-h-screen overflow-x-hidden flex flex-col max-w-[28.125rem] right-2/4 scroll-smooth"
        style={{ transform: `translate(50%)` }}
      >
        <audio ref={audioRef} src="/audio/backsound.mp3" loop />
        {visitedWelcome && (
          <nav className="fixed bottom-4 right-4 w-auto bg-white shadow-md p-2 rounded-full flex items-center z-50">
            <button
              onClick={handlePlayPauseMusic}
              className="bg-transparent border-none focus:outline-none"
            >
              <Image
                src={isPlaying ? "/pause.png" : "/play.png"}
                alt={isPlaying ? "Pause" : "Play"}
                width={40}
                height={40}
              />
            </button>
          </nav>
        )}
        <section id="scroll-container" className="relative w-full h-full">
          {!visitedWelcome && (
            <section className="absolute top-0 left-0 w-full h-full z-10">
              <Welcome onNext={() => setVisitedWelcome(true)} />
            </section>
          )}
          <StorySection visitedWelcome={visitedWelcome} />
          <Spacing size={100} />
          <GallerySection />
          <Spacing size={100} />
          <AddressSection />
          <Spacing size={80} />
          <AccountSection onDone={() => setVisitedAll(true)} />
        </section>
      </main>
    </BlockPintch>
  );
};

export default WeddingScroll;
