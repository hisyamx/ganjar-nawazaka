"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import Address from "./Address";
import Image from "next/image";
import Navigations from "./Navigations";
import RollingBanner from "../RollingBanner";
import SlideUp from "../SlideUp";
import Spacing from "../Spacing";
import Text from "../Text";
import Title from "./Title";
import useIsInView from "@/hooks/useIsInView";

const TITLE = ["AKAD", "&", "RESEPSI"];
const AddressSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [transitionIds, setTransitionIds] = useState<number[]>([]);

  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const handleTransition = useCallback(() => {
    setTimeout(() => {
      setTransitionIds((prev) => (prev.length === 0 ? [0, 1, 2, 3] : prev));
    }, 0);

    setTimeout(() => {
      intervalId.current = setInterval(() => {
        setTransitionIds((prev) => {
          if (prev.length === TITLE.length + 3) {
            clearInterval(intervalId.current!);
            return prev;
          }
          return prev.concat(prev.length);
        });
      }, 200);
    }, 1000);

    setTimeout(() => {
      setTransitionIds((prev) => prev.concat(prev.length));
    }, 2000);

    setTimeout(() => {
      setTransitionIds((prev) =>
        prev.concat([prev.length, prev.length + 1, prev.length + 2])
      );
    }, 2200);
  }, []);

  useIsInView(ref, handleTransition);

  useEffect(() => {
    if (transitionIds.length > TITLE.length + 6) {
      clearInterval(intervalId.current!);
      intervalId.current = null;
    }
  }, [transitionIds]);

  return (
    <>
      <section ref={ref} id="address-section" className="w-full px-24pxr">
        {TITLE.map((title, index) => (
          <SlideUp key={index} show={transitionIds.includes(index)}>
            <Title>{title}</Title>
          </SlideUp>
        ))}
        <Spacing size={10} />
        <SlideUp show={transitionIds.includes(TITLE.length)}>
          <Address
            title="Akad"
            desc={`Akad Nikah : 14 September 2024, pukul 07.00 WIB (pagi)`}
          />
        </SlideUp>
        {/* <Spacing size={20} />
        <SlideUp show={transitionIds.includes(TITLE.length + 1)}>
          <Address
            title="자가용 이용 시"
            desc="삼청각 내 주차장 이용 가능 (2시간 무료)"
          />
        </SlideUp>
        <Spacing size={20} />
        <SlideUp show={transitionIds.includes(TITLE.length + 2)}>
          <Address
            title="셔틀버스 이용 시"
            desc="지하철 4호선 한성대입구역 6번 출구 50m (15분간격)"
          />
        </SlideUp>
        <Spacing size={20} /> */}
        <SlideUp show={transitionIds.includes(TITLE.length + 3)}>
          <Text
            display="block"
            className="w-full p-10pxr text-12pxr leading-22pxr bg-[#F4F4F4] text-[#474747] mt-4"
          >
            di kediaman mempelai putri, Jl. Tentara Pelajar, Gg. Masjid, RT 1 RW
            3, Kelurahan Sijeruk, Kecamatan Kendal, Kab. Kendal, Jawa Tengah ♡
          </Text>
        </SlideUp>
        <Spacing size={20} />
        {/* Kalau ada maps image */}
        {/* <SlideUp id="map" show={transitionIds.includes(TITLE.length + 4)}>
          <Image
            quality={100}
            src={"/map.png"}
            alt="map"
            width={382}
            height={245}
            className="w-full"
          />
        </SlideUp> */}

        {/* section 2 */}
        <Spacing size={10} />
        <SlideUp show={transitionIds.includes(TITLE.length)}>
          <Address
            title="Resepsi"
            desc={` Resepsi pernikahan : 14 September 2024, jam 11.00 WIB - 13.00 WIB`}
          />
        </SlideUp>
        {/* <Spacing size={20} />
        <SlideUp show={transitionIds.includes(TITLE.length + 1)}>
          <Address
            title="자가용 이용 시"
            desc="삼청각 내 주차장 이용 가능 (2시간 무료)"
          />
        </SlideUp>
        <Spacing size={20} />
        <SlideUp show={transitionIds.includes(TITLE.length + 2)}>
          <Address
            title="셔틀버스 이용 시"
            desc="지하철 4호선 한성대입구역 6번 출구 50m (15분간격)"
          />
        </SlideUp>
        <Spacing size={20} /> */}
        <SlideUp show={transitionIds.includes(TITLE.length + 3)}>
          <Text
            display="block"
            className="w-full p-10pxr text-12pxr leading-22pxr bg-[#F4F4F4] text-[#474747] mt-4"
          >
            di Gentuman Resto , Tambakrejo, Patebon, Kabupaten Kendal, Jawa Tengah 51351 ♡
          </Text>
        </SlideUp>
        <Spacing size={20} />
        {/* Kalau ada maps image */}
        {/* <SlideUp id="map" show={transitionIds.includes(TITLE.length + 4)}>
          <Image
            quality={100}
            src={"/map.png"}
            alt="map"
            width={382}
            height={245}
            className="w-full"
          />
        </SlideUp> */}

        {/* <Spacing size={20} /> */}
        <SlideUp id="" show={transitionIds.includes(TITLE.length + 5)}>
          <Navigations />
        </SlideUp>
      </section>

      <SlideUp show={transitionIds.includes(TITLE.length + 6)}>
        <Spacing size={80} />
        <RollingBanner />
      </SlideUp>
    </>
  );
};

export default AddressSection;
