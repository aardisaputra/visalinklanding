"use client"
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import clsx from "clsx";
import {motion , AnimatePresence} from 'framer-motion';
const items = [
  {
    question: "Why should you use VisaLink?",
    answer:
      "A large part of the US work visa application/management process is tediously manual, costly, and unnecessarily time consuming. Companies using VisaLink can begin the visa petitioning process right away without having to wait for a case manager or any onboarding. As a SaaS product, we are also able to have a more transparent and affordable pricing model that isn't \"case by case\" as most competitors do. Companies can now also track in real time the visa status of their current employees and new candidates which is a pain point that we identified particularly for large organizations.",
  },
  {
    question: "Why does VisaLink work?",
    answer:
      "Many work visa types such as the TN visa, E-3 visa, require a very standardized set of documents such that the process for applying to these visas can be easily automated. Based on our research, failures or rejections to these visas happen for easily fixable reasons such as typos and field mismatches, things our AI can detect.",
  },
  {
    question: "Why not stick to the traditional way of work visa sponsorships?",
    answer:
      "Legal fees can start at $5,000 and quickly reach $15,000 or more for each visa (source: Rippling). Not to mention, the complete delegation of work to 3rd parties leaves you effectively blind towards the state of the process at any time. Why waste weeks of waiting for an update by a lawyer when you can actually have a new hire start working instantly?",
  },
];

const AccordinationItem = ({question, answer}:{question:string, answer: string}) => {
  const[isOpen, setIsOpen] = useState(false);
  return(
   
    <div className=" py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
    <div className="flex items-center ">
      <span className="flex-1 text-lg font-bold">{question}</span>
      {isOpen ? <MinusIcon /> :<PlusIcon />}
      
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div 
        initial={{opacity: 0, height: 0, marginTop: 0}}
        animate={{opacity: 1, height: "auto" , marginTop:'16px'}}
        exit={{opacity: 0, height: 0, marginTop: 0}}
          >{answer}</motion.div>

      )}
      </AnimatePresence>
    
  </div>
  
    
  )
}

export const FAQs = () => {
  return (
    <div id="faq" className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#003366] to-black ">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
         {items.map(({question, answer}) => (
            <AccordinationItem question={question} answer={answer} key={question}/>
         ))}
        </div>
      </div>
    </div>
  )
};
