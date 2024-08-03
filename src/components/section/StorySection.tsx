"use client";

import React, { useEffect, useRef, useState } from "react";

import { BonVivantFont } from "@/style/fonts";
import SlideUp from "../SlideUp";
import Spacing from "../Spacing";
import Title from "./Title";
import Text, { TextProps } from "../Text";
import { useInterval } from "@/hooks/useInterval";
import useIsInView from "@/hooks/useIsInView";
import Image from "next/image";

const TITLE = ["QS Ar-Rum 21"];
const Story = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [transitionIds, setTransitionIds] = useState<number[]>([]);

  const [startTransition, setStartTransition] = useState(false);
  const [callTimeout, setCallTimeout] = useState(false);

  useInterval(() => {
    if (!startTransition || transitionIds.length >= TITLE.length) return;

    setTransitionIds((prev) => {
      return prev.concat(prev.length);
    });
  }, 200);

  useInterval(() => {
    if (
      !startTransition ||
      !callTimeout ||
      transitionIds.length >= TITLE.length + 5
    )
      return;
    setTransitionIds((prev) => {
      return prev.concat(prev.length);
    });
  }, 200);

  useEffect(() => {
    if (!startTransition) return;
    setTimeout(() => {
      setCallTimeout(true);
    }, 1000);
  }, [startTransition]);

  useEffect(() => {
    if (transitionIds.length === 4) {
      setStartTransition(false);
    }
  }, [transitionIds]);

  useIsInView(ref, () => setStartTransition(true));

  return (
    <section
      id="reli-section"
      ref={ref}
      className="w-full px-24pxr relative -mt-8"
    >
      <div className="absolute inset-0">
        <Image
          quality={100}
          src="/welcome/bg.png"
          layout="fill"
          objectFit="cover"
          alt="background"
          className="-z-10 rounded-t-[1.25rem]"
        />
      </div>

      <Spacing size={50} />

      {TITLE.map((title, index) => (
        <SlideUp key={index} show={transitionIds.includes(index)}>
          <Title key={title} display="block">
            {title}
          </Title>
        </SlideUp>
      ))}

      <Spacing size={15} />

      <SlideUp show={transitionIds.includes(TITLE.length)} className="w-full pb-24">
        <Text
          display="inline-block"
          className={`whitespace-pre-line text-justify`}
        >
          {`"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."`}
        </Text>
      </SlideUp>
    </section>
  );
};

export default Story;
