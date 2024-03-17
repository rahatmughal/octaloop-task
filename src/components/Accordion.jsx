import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Accordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="flex w-full py-10 flex-col gap-3">
      {faqs.map((faq, index) => (
        <div
          className="w-full h-full p-5 bg-second-primary/50 cursor-pointer rounded-md"
          key={faq.id}
          onClick={() => toggleAccordion(index)}
        >
          {/* Question */}
          <div className="w-full flex items-center justify-between ">
            <span className={`font-zen-dots xl:text-xl text-lg text-second-primary`}>
              {faq.question}
            </span>
            <FaAngleDown
              className={`text-2xl text-second-primary transition-transform ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>

          <div
            className={`w-full flex items-center justify-between transition-all duration-200 ${
              openIndex === index ? "h-[130px]" : "h-0"
            } object-cover overflow-hidden`}
          >
            <span
              className={`font-inter text-white font-light py-4 xl:text-lg text-base tracking-wider`}
            >
              {faq.answer}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
