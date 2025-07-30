"use client";

import { useState, useEffect } from "react";
import {
  Brain,
  Search,
  Filter,
  Database,
  Wrench,
  TrendingUp,
} from "lucide-react";

export default function ArchitectureSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const architectureItems = [
    {
      id: 1,
      title: "LLMOps",
      icon: Brain,
      description:
        "대화 언어 모델의 생명주기를 체계적으로 관리하고 최적화합니다.",
      details: ["모델 버전 관리", "성능 최적화", "배포 자동화"],
      color: "blue",
      side: "left",
    },
    {
      id: 2,
      title: "RAG Engine",
      icon: Search,
      description:
        "검색증강생성을 통해 정확하고 신뢰할 수 있는 답변을 제공합니다.",
      details: ["벡터 검색", "컨텍스트 생성", "답변 품질 보장"],
      color: "emerald",
      side: "right",
    },
    {
      id: 3,
      title: "MCP Protocol",
      icon: Filter,
      description:
        "Model Context Protocol을 통한 안전하고 효율적인 모델 통신을 지원합니다.",
      details: ["보안 통신", "프로토콜 표준화", "API 게이트웨이"],
      color: "purple",
      side: "left",
    },
    {
      id: 4,
      title: "Vector DB",
      icon: Database,
      description:
        "고성능 벡터 데이터베이스로 의미 기반 검색과 매칭을 제공합니다.",
      details: ["임베딩 저장", "유사도 검색", "실시간 인덱싱"],
      color: "cyan",
      side: "right",
    },
    {
      id: 5,
      title: "Tool Hub",
      icon: Wrench,
      description:
        "다양한 AI 도구와 서비스를 통합하여 관리하는 중앙 허브입니다.",
      details: ["도구 통합", "워크플로우 관리", "서비스 오케스트레이션"],
      color: "orange",
      side: "left",
    },
    {
      id: 6,
      title: "Monitoring",
      icon: TrendingUp,
      description: "실시간 성능 모니터링과 상세한 분석 리포트를 제공합니다.",
      details: ["실시간 대시보드", "성능 분석", "알림 시스템"],
      color: "pink",
      side: "right",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(
              entry.target.getAttribute("data-item-id") || "0"
            );
            setVisibleItems((prev) => {
              if (!prev.includes(itemId)) {
                return [...prev, itemId];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const timelineItems = document.querySelectorAll("[data-item-id]");
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-500",
        light: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        shadow: "shadow-blue-200/50",
        gradient: "from-blue-400 to-blue-600",
      },
      emerald: {
        bg: "bg-emerald-500",
        light: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200",
        shadow: "shadow-emerald-200/50",
        gradient: "from-emerald-400 to-emerald-600",
      },
      purple: {
        bg: "bg-purple-500",
        light: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        shadow: "shadow-purple-200/50",
        gradient: "from-purple-400 to-purple-600",
      },
      cyan: {
        bg: "bg-cyan-500",
        light: "bg-cyan-50",
        text: "text-cyan-600",
        border: "border-cyan-200",
        shadow: "shadow-cyan-200/50",
        gradient: "from-cyan-400 to-cyan-600",
      },
      orange: {
        bg: "bg-orange-500",
        light: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        shadow: "shadow-orange-200/50",
        gradient: "from-orange-400 to-orange-600",
      },
      pink: {
        bg: "bg-pink-500",
        light: "bg-pink-50",
        text: "text-pink-600",
        border: "border-pink-200",
        shadow: "shadow-pink-200/50",
        gradient: "from-pink-400 to-pink-600",
      },
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 relative inline-block">
            Kubernetes 기반 확장 가능한 아키텍처
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            클라우드 네이티브 기술을 기반으로 한 안정적이고 확장 가능한 플랫폼
            아키텍처
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 rounded-full"></div>

          {/* Animated Progress Line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
            style={{
              height: `${(visibleItems.length / architectureItems.length) * 100}%`,
            }}
          ></div>

          {/* Timeline Items */}
          <div className="space-y-18">
            {architectureItems.map((item, index) => {
              const Icon = item.icon;
              const colors = getColorClasses(item.color);
              const isVisible = visibleItems.includes(item.id);
              const isLeft = item.side === "left";

              return (
                <div
                  key={item.id}
                  data-item-id={item.id}
                  className={`relative flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"} transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Content Card */}
                  <div className={`w-5/12 ${isLeft ? "pr-6" : "pl-6"}`}>
                    <div
                      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 ${colors?.border} ${colors?.shadow} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group`}
                    >
                      {/* Icon Header */}
                      <div className="flex items-center mb-4">
                        <div
                          className={`p-3 bg-gradient-to-r ${colors?.gradient} rounded-xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold ${colors?.text} `}>
                            {item.title}
                          </h3>
                          <div
                            className={`text-xs ${colors?.text} opacity-70 font-medium`}
                          >
                            Component {item.id}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Feature List */}
                      <div className="space-y-2">
                        {item.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="flex items-center opacity-0 animate-fadeInUp group-hover:opacity-100 transition-all duration-500"
                            style={{
                              animationDelay: `${isVisible ? detailIndex * 100 + 500 : 0}ms`,
                              opacity: isVisible ? 1 : 0,
                            }}
                          >
                            <div
                              className={`w-2 h-2 ${colors?.bg} rounded-full mr-3 animate-pulse`}
                            ></div>
                            <span className="text-gray-600 text-sm font-medium">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Hover Effect Border */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors?.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      ></div>
                    </div>
                  </div>

                  {/* Connection Line */}
                  <div
                    className={`absolute ${isLeft ? "right-1/2 mr-4" : "left-1/2 ml-4"} top-1/2 transform -translate-y-1/2`}
                  >
                    <div
                      className={`w-20 h-0.5 ${colors?.bg} ${isVisible ? "animate-pulse" : ""}`}
                    ></div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div
                      className={`relative w-8 h-8 ${colors?.bg} rounded-full shadow-xl flex items-center justify-center group-hover:scale-125 transition-all duration-300 ${
                        isVisible ? "animate-pulse" : ""
                      }`}
                    >
                      <Icon className="w-3 h-3 text-white" />

                      {/* Ripple Effect */}
                      {isVisible && (
                        <>
                          <div
                            className={`absolute inset-0 ${colors?.bg} rounded-full animate-ping opacity-30`}
                          ></div>
                          <div
                            className={`absolute inset-0 ${colors?.bg} rounded-full animate-ping opacity-20`}
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Side Space for Balance */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
