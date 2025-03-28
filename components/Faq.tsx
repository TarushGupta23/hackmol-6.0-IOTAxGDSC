// components/FAQSection.tsx
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Types
type TabType = "GENERAL" | "REGISTER" | "EXPENSE";
type FAQItem = {
  question: string;
  answer: string;
};
type FAQData = {
  [key in TabType]: FAQItem[];
};

// Custom TabSwitcher Component
const TabSwitcher = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}) => {
  const tabs: TabType[] = ["GENERAL", "REGISTER", "EXPENSE"];

  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-4 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={cn(
            "py-2 px-3 sm:py-3 sm:px-8 text-sm sm:text-base rounded-full border border-cyan-500 font-custom transition-colors w-full sm:w-auto select-none",
            activeTab === tab
              ? "bg-white text-[#0c1930] font-semibold"
              : "bg-transparent text-white hover:bg-cyan-950/30"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

// Sample FAQ data
const faqData: FAQData = {
  GENERAL: [
    {
      question: "What is Hackmol 6.0?",
      answer:
        "HackMol 6.0 is Punjab's premier 36-hour hackathon, bringing together top developers, innovators, and tech enthusiasts to solve real-world challenges in AI, Web3, IoT, and more. Compete for ₹2L+ in prizes, network with industry experts, and showcase your skills in a high-energy, hybrid-format competition.",
    },
    {
      question: "What can I win?",
      answer:
        "Participants can win cash prizes, tech gadgets, exclusive merchandise, internship opportunities, and recognition from industry leaders. The total prize pool includes various categories and special awards for innovation.",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "No, hackers of all skill levels are welcome! We have tracks for beginners and experienced participants with mentors available to help you along the way.",
    },
  ],
  REGISTER: [
    {
      question: "How do I register?",
      answer:
        "Registration is open through the Devfolio page. Simply fill out the registration form with your personal details and project interests to secure your spot.",
    },
    {
      question: "What's the registration deadline?",
      answer:
        "Registration closes on March 29, 2025. Early registrations get priority access to limited workshops and mentor sessions.",
    },
    {
      question: "What can be the size of team?",
      answer:
        "Teams must consist of 2 to 4 members. Individual registrations are not allowed. Each team member needs to complete their registration and link to the team name.",
    },
  ],
  EXPENSE: [
    {
      question: "What's the cost?",
      answer:
        "Selected teams will be notified about the cost upon confirmation of their selection.",
    },
    {
      question: "Is travel covered?",
      answer:
        "Travel expenses will not be covered. Participants are responsible for their own travel costs, as we do not offer travel grants.",
    },
    {
      question: "What about accommodations?",
      answer:
        "Basic accommodation will be provided to all participants for the duration of the event. Separate accommodations will be arranged for male and female participants.",
    },
    {
      question: "Are meals provided?",
      answer:
        "Yes, all meals are provided throughout the event, including breakfast, lunch, dinner, and snacks.",
    },
  ],
};

// Main FAQ Section Component
const FAQSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("GENERAL");

  return (
    <div className="relative min-h-screen w-full bg-[#0c1930] text-white py-10 sm:py-16 px-4 md:px-8" id="faq">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-16 select-none">
          <div className="flex items-center justify-center mb-1 relative">
            <h2 className="text-4xl md:text-5xl font-bold font-custom w-full">
              <span className="event-timeline-title">Frequently asked questions</span>
              <div className="h-0.5 max-w-xl bg-gradient-to-r from-transparent via-[#0ce3ff] to-transparent mx-auto mb-2"></div>
            </h2>
          </div>
          <p className="text-[#0ce3ff] text-lg tracking-wider font-sans uppercase">
            Your Quest for Answers Ends Here
          </p>
        </div>

        {/* Tab Switcher */}
        <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqData[activeTab].map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-[3px] border-white pt-2"
            >
              <AccordionTrigger className="flex items-start text-left py-4 sm:py-5 text-base sm:text-xl font-custom pr-2 w-full">
                <div className="flex items-start gap-2 sm:gap-3 w-full">
                  <img
                    src="/icons/faq.png"
                    alt="FAQ Icon"
                    className="h-6 sm:h-8 mt-1 flex-shrink-0"
                  />
                  <span className="pt-1 break-words">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pl-8 sm:pl-12 pr-2 sm:pr-4 py-3 sm:py-4 text-sm sm:text-base font-sans">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40 overflow-hidden">
        <div className="relative h-full w-full">
          <img
            src="/kratos-black.png"
            alt="Background"
            className="absolute -left-2 bottom-0 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
