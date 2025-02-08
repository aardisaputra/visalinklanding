"use client";
import CursorImage from "../assets/images/cursor.png";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import MessageImage from "../assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div
      id="demo"
      className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#003366_34%,#0066CC_65%,#66CCFF_82%)] py-[72px] sm:py-24 relative overflow-clip"
    >
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#0066CC] bg-[radial-gradient(closest-side,#000_82%,#0066CC)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center -mt-10"></div>
        <div className="flex justify-center mt-8 ">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tightner text-center inline-flex mb-2 mt-4">
              VisaLink <br />
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-xl text-center mt-8 max-w-[29rem]">
            Effortlessly manage work visa applications for new hires, monitor
            visa statuses in real-time, and receive timely expiration alerts—all
            with our AI-powered platform
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <a href="https://forms.gle/PGPomN7oAHzYTJ3j9">
            <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
              Sign up now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
