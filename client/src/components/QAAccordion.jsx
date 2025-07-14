import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // Install lucide-react if not added yet

const QAAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-[12px] shadow-sm transition">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-4 text-left"
      >
        <span className="px-5 text-[24px] font-semibold text-gray-800">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-11 pb-4 text-[20px] text-gray-600">{answer}</div>
      )}
    </div>
  );
};

export default QAAccordion;
