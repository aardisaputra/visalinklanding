"use client";
import HelixImage from "../assets/images/helix2.png";
import EmojiImage from "../assets/images/emojistar.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { use, useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div
      id="contact"
      className="bg-black text-white py-[72px] sm:py-24"
      ref={containerRef}
    >
      <div className="container max-w-xl relative">
        {/* <motion.div style={{translateY}}>
      <Image src={HelixImage} alt="helix" className="absolute top-6 left-[calc(100%+36px)]" />
      </motion.div>
      <motion.div style={{translateY}}>
       
      <Image src={EmojiImage} alt="emoji" className="absolute -top-[120px] right-[calc(100%+30px)]" />
      </motion.div> */}

        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Got Any Questions?
        </h2>
        <p className="text-xl text-white/70  mt-5">
          Reach out to our emails here: <br /> support@visalink.live
        </p>
        <div className="flex justify-center mt-8">
          <a href="https://forms.gle/PGPomN7oAHzYTJ3j9">
            <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
              Sign up here!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
