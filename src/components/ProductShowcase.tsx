"use client";
import appScreen from "../assets/images/product.avif";
import Iframe from "react-iframe";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.6], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.3, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-black py-[14em]  sm:py-[15em] md:py-[5em]  xl:pt-[14rem]">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter">
          Quick Demo of User Flow
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-white/70 text-center mt-5 ">
            Simplifying the entire process largely.
          </p>
        </div>
        <div className="flex justify-center">
          <motion.div
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: "800px",
            }}
          >
            <div className="w-[60vw] h-0 pb-[56.25%] justify-center ">
              <iframe
                className="absolute top-0 w-[100%] h-full mt-14"
                src="https://www.youtube.com/embed/d5xiCAKOhas?si=smtCXbG7LK5vlE_2"
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media;"
              ></iframe>
            </div>

            {/* <Image src={appScreen}  ref={appImage} alt="app screen" className="mt-14" /> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
