"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left focus:outline-none hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <span className="ml-6 flex-shrink-0">
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-6">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const faqData = [
    {
      question: "OASIS는 외부 인터넷 없이도 작동하나요?",
      answer:
        "네, OASIS는 완전히 독립적인 환경에서 작동합니다. 모든 AI 모델과 서비스가 내부 네트워크에서 실행되므로 외부 인터넷 연결 없이도 안전하게 AI 자동화를 구현할 수 있습니다.",
    },
    {
      question: "기존 시스템과 어떻게 통합되나요?",
      answer:
        "OASIS는 REST API와 다양한 커넥터를 제공하여 기존 엔터프라이즈 시스템과 원활하게 통합됩니다. 쿠버네티스 기반으로 구축되어 확장성과 안정성을 보장합니다.",
    },
    {
      question: "보안 정책은 어떻게 준수되나요?",
      answer:
        "OASIS는 기업 보안 정책을 완벽히 준수합니다. 모든 데이터는 내부 서버에서만 처리되며, 외부로의 데이터 전송이 없습니다. 또한 역할 기반 접근 제어(RBAC)와 암호화를 통해 데이터 보안을 강화합니다.",
    },
    {
      question: "어떤 종류의 AI 자동화가 가능한가요?",
      answer:
        "문서 처리, 데이터 분석, 고객 서비스 자동화, 업무 프로세스 최적화 등 다양한 AI 자동화가 가능합니다. LLM 기반으로 자연어 처리가 가능하여 복잡한 업무도 자동화할 수 있습니다.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Side gradients for brightness effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-40"></div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        <div className="py-16 md:py-24">
          <div
            className="text-center mb-12"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-lg text-gray-600">
              OASIS에 대해 궁금한 점들을 확인해보세요
            </p>
          </div>

          <div
            className="bg-gray-50 rounded-2xl px-8 md:px-10"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
