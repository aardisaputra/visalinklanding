"use client";
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
const items = [
  {
    question: "Why should you use VisaLink?",
    answer:
      'The U.S. work visa application and management process is often highly manual, costly, and time-consuming. With VisaLink, companies can initiate the visa petition process immediately, without waiting for a case manager or undergoing lengthy onboarding. As a SaaS solution, we offer a more transparent and cost-effective pricing model, avoiding the traditional "case-by-case" approach used by most competitors. Additionally, VisaLink enables real-time tracking of visa statuses for both current employees and new candidates—addressing a significant challenge, particularly for large organizations.',
  },
  {
    question: "Why does VisaLink work?",
    answer:
      "Many work visa types, such as the TN and E-3 visas, require a standardized set of documents, making the application process well-suited for automation. Our research shows that denials or rejections often occur due to simple, easily correctable errors like typos and mismatched fields—issues that our AI is designed to detect and prevent.",
  },
  {
    question: "Why not stick to the traditional way of work visa sponsorships?",
    answer:
      "Legal fees for visa processing can range from $5,000 to $15,000 or more per visa (source: Rippling). Additionally, outsourcing the entire process to third parties often leaves you without visibility into the status at any given time. Instead of waiting weeks for updates from a lawyer, our platform will drive you to the same destination in a fraction of the time and cost.",
  },
];

const AccordinationItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className=" py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div
      id="faq"
      className="bg-black text-white py-[12rem] sm:py-24 bg-gradient-to-b from-[#003366] to-black "
    >
      <div className="container">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mt-[8rem] md:mt-[0em] lg:pt-[0em] lg:mt-[2em] mx-auto text-center text-white tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordinationItem
              question={question}
              answer={answer}
              key={question}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
