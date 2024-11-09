"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "https://res.cloudinary.com/dl2adjye7/image/upload/v1716817722/Amazon_icon.svg_a4qmtg.png",
  "https://res.cloudinary.com/dl2adjye7/image/upload/v1716800282/Apple_logo_black.svg_seeetv.png",
  "/support-svgrepo-com.svg",
];

const lineWidth = 80;
const lineHeight = 2;

const LogoBeam = () => {
  return (
    <div className="flex flex-col justify-center h-full items-center relative">
      <div className="bg-[#000]  rounded-2xl flex items-center justify-center w-24 h-24 p-4">
        <img
          src={logos[2]}
          alt="Logo 1"
          className="filter invert brightness-0"
        />
      </div>
    </div>
  );
};

const data = [50, 40, 300, 320, 500, 350, 200, 230, 500];
const maxData = Math.max(...data);
const chartHeight = 400;
const chartWidth = 800;

const CardWithEffect = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="relative bg-[#000] flex-1 rounded-xl border border-white/30 p-4 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: "transform" }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: "300px",
            height: "300px",
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: "#0066CC",
            filter: "blur(100px)",
            transform: "translate(-0%, -0%)",
            zIndex: 10, // Ensure the effect is on top
            willChange: "transform, top, left",
          }}
        />
      )}
      {children}
    </div>
  );
};

const AWSIcon = () => {
  return (
    <div className="flex flex-col justify-center h-full items-center relative mt-8 lg:mt-0">
      <div className="flex flex-row flex-wrap gap-8 justify-center h-full items-center relative mx-10 lg:mx-[5rem] lg:gap-y-4 xl:mx-[2rem]">
        <div className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-20 h-20 p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2]">
          <div className="filter invert brightness-0">H-1B</div>
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ willChange: "transform" }}
          />
        </div>
        <div className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-20 h-20  p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2]">
          <div className="filter invert brightness-0">TN</div>
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ willChange: "transform" }}
          />
        </div>
        <div className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-20 h-20 p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2]">
          <div className="filter invert brightness-0">O-1</div>
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ willChange: "transform" }}
          />
        </div>
        <div className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-20 h-20 p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2]">
          <div className="filter invert brightness-0">More..</div>
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ willChange: "transform" }}
          />
        </div>
      </div>

      <div className="text-left p-6 mt-4 md:pb-[3rem] lg:pb-0">
        <h1 className="text-white text-2xl font-bold mb-2">
          Diverse array of choices
        </h1>
        <p className="text-gray-400 text-lg">
          whatever visa you need, we got it!
        </p>
      </div>
    </div>
  );
};

const BentoBox1 = () => {
  const chartRef = useRef(null);
  const [isChartVisible, setIsChartVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsChartVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, [chartRef]);

  return (
    <div className="bg-[#000000] flex justify-center items-center min-h-[800px] p-5 rounded-lg sm:py-24 xl:mt-[15rem]">
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl min-h-[800px] md:min-h-[800px] md:h-[800px]">
        <div className="flex flex-col w-full md:w-1/2 gap-5 h-full md:h-[800px]">
          <CardWithEffect>
            <AWSIcon />
          </CardWithEffect>
          <CardWithEffect>
            <div className="flex flex-col justify-center h-full">
              <LogoBeam />
              <div className="text-left p-6">
                <h1 className="text-white text-2xl font-bold mb-2">
                  Live Support
                </h1>
                <p className="text-white/70 text-lg">
                  Ever need help from an actual person? We have immigration
                  lawyers who will help!
                </p>
              </div>
            </div>
          </CardWithEffect>
        </div>
        <CardWithEffect>
          <div className="flex flex-col justify-between h-full flex-1">
            <div className="mb-[5%] px-[16%] md:px-[5%] md:pt-[5%] lg:px-[16%] lg:pt-0">
              <Image
                src="/dashboard.png"
                width={200}
                height={50}
                alt={"Dashboard"}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="mb-[5%] px-[16%] md:px-[5%] lg:px-[16%]">
              <Image
                src="/tn_app.png"
                width={250}
                height={50}
                alt={"TN App"}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="text-left p-6 mt-4 flex-2">
              <h1 className="text-white text-2xl font-bold mb-2">
                User-friendly UI
              </h1>
              <p className="text-white/70 text-lg">
                Easily navigate our platform which lets you start and complete a
                visa application. Track your non-immigrant employee visa
                statuses
              </p>
            </div>
          </div>
        </CardWithEffect>
      </div>
    </div>
  );
};

function Bentodemo() {
  return (
    <div className="h-screen flex items-center justify-center  ">
      <BentoBox1 />
    </div>
  );
}

export default Bentodemo;
