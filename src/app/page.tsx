import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Instructions } from "@/components/instructions";
import { FAQs } from "@/components/FAQs";
import AnimatedText from "@/components/animatedtext";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <br />
        <br />
        <br />
        <div className="flex flex-col md:flex-row md:gap-y-[0em] items-center justify-between gap-x-[2em] gap-y-[2em] max-w-4xl mt-8 mx-auto">
          <Image
            className="shadow-lg rounded-md"
            src={"/heroImage.jpg"}
            alt="Hero"
            height={400}
            width={400}
          />
          <div className="">
            <h1 className="text-5xl leading-[1.2] flex items-center">
              Simple{" "}
              <span className="mx-4">
                <AnimatedText />
              </span>{" "}
              visas
            </h1>
            <h1 className="text-5xl leading-[1.2]">for your business</h1>

            <br />
            <h2 className="text-xl">File visa applications without a lawyer</h2>
            <h2 className="text-xl">at a fraction of the traditional cost</h2>

            <br />
            <Button variant="outline" className="text-l">
              <div className="text-l">Learn More</div>
            </Button>
          </div>
        </div>

        <br />
        <br />
        <br />

        {/* Instructions Section */}
        <div className="md:max-w-full mx-auto p-8 bg-white shadow-lg">
          <div className="flex justify-center text-4xl py-4">
            Simple steps in filing a work visa application
          </div>
          <br />
          <div className="flex justify-center">
            <Instructions />
          </div>
        </div>

        {/* FAQ */}
        <FAQs />

        <br />
        <br />

        {/* Call to action */}
        <div className="max-w-6xl mx-8 lg:mx-auto p-6 bg-black shadow-lg rounded-xl">
          <div className="flex justify-center text-xl text-white">
            Let&apos;s help you assemble your all-star team!
          </div>
        </div>

        <br />
        <br />
      </div>
    </>
  );
}
