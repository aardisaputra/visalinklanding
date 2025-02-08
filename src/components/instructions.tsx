import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const data = [
  [
    "/validate.png",
    "Validate visa request",
    "Using basic information from the candidate, our AI-powered platform will make sure that the candidate is appplying for the appropriate visa or will suggest a better alternative visa",
  ],
  [
    "/generate.png",
    "Generate package",
    "More information is filled out in our easy-to-use platform with the help of AI models trained on historical cases that can generate or infer content, resulting in a final visa package",
  ],
  [
    "/verify.png",
    "Verify supporting documents",
    "The candidate then uploads their supporting documents, (including passports, pictures, etc.) which is vetted against legal requirements",
  ],
  [
    "/submission.png",
    "Final submission",
    "A final visa package containing everything required to submit to USCIS is then sent through email",
  ],
];

export function Instructions() {
  return (
    <Carousel className="w-full max-w-5xl">
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 flex-row">
              <h2 className="text-center">
                STEP {index + 1}/4: {data[index][1]}
              </h2>
              <br />
              <Card className="h-[400px] shadow-none border-none">
                <CardContent className="flex items-center justify-center p-6 h-full">
                  <div className="flex items-center justify-center space-x-8">
                    <Image
                      className="shadow-lg rounded-md"
                      src={data[index][0]}
                      alt="Hero"
                      height={400}
                      width={400}
                    />
                    <div>{data[index][2]}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
