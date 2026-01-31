import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const PrivacyPolicy = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const faqItems = [
      {
        question: "How do I post a task?",
        answer:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        question: "Is there any charges for using Jobs can do?",
        answer:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        question: "How to join as a service provider?",
        answer:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        question: "How to create an invoice?",
        answer:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ];

    const toggleAnswer = (index) => {
      setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
      <div className="w-full max-w-[704px] py-4 px-2">
        <h1 className="text-xl font-semibold mb-2">Privacy Policy</h1>
        <p className="text-gray-700 mb-8">
          Learn how we collect, use, and protect your personal data to maintain a safe and trusted service environment.
        </p>

        <h3 className="font-semibold mt-4">1. Terms</h3>
        <p className="text-gray-600 mb-4">
          By accessing this website, you are agreeing to be bound by these
          website Terms and Conditions of Use, applicable laws and regulations
          and their compliance. If you disagree with any of the stated terms and
          conditions, you are prohibited from using or accessing this site. The
          materials contained in this site are secured by relevant copyright and
          trademark law.
        </p>

        <h3 className="font-semibold mt-4">2. Use Licence</h3>
        <p className="text-gray-600 mb-8">
          Permission is allowed to temporarily download one duplicate of the
          materials (data or programming) on Company's site for individual and
          non-business use only. This is just a permit of license and not an
          exchange of title, and under this permit, you may not: • modify or
          copy the materials; • use the materials for any commercial use, or for
          any public presentation (business or non-business); • attempt to dec
        </p>

        <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
        <p className="text-gray-700 mb-8">
          Our Customer Support is here to assist you with any questions, issues,
          or feedback to ensure a smooth experience.
        </p>

        <div>
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="mb-6 border border-[#F7F7F7] rounded-lg p-2 w-full"
            >
              <h4
                className="font-medium mb-2 flex items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                {item.question}
                <ChevronDown
                  className={`ml-auto transition-transform ${
                    openFaqIndex === index ? "rotate-180" : ""
                  }`}
                />
              </h4>
              {openFaqIndex === index && (
                <p className="text-gray-600 ml-7">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

export default PrivacyPolicy