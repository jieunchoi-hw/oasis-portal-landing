"use client";

import Image from "next/image";
import {
  Bot,
  Search,
  Plug,
  Workflow,
  BarChart3,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  const features = [
    {
      id: 1,
      title: "다양한 AI 비서 (AI Agent)",
      icon: Bot,
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-900/30 to-purple-900/30",
      borderColor: "hover:border-blue-400/60",
      iconColor: "text-blue-400",
      bulletColor: "text-blue-400",
      items: [
        "사전 정의된 비서: 문서 요약, 번역, 회의록 등",
        "사용자 맞춤형 비서: 성격, 역할, 톤 설정",
        "Human-in-the-Loop: 사용자 개입 지점 관리",
      ],
    },
    {
      id: 2,
      title: "RAG 기반 고도화된 검색",
      icon: Search,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-900/30 to-teal-900/30",
      borderColor: "hover:border-emerald-400/60",
      iconColor: "text-emerald-400",
      bulletColor: "text-emerald-400",
      items: [
        "벡터 DB 기반 문서 검색 및 유사도 응답",
        "업로드 문서 검색/요약/답변 기능",
        "개인/워크스페이스별 클라우드 스토리지",
      ],
    },
    {
      id: 3,
      title: "외부 시스템 및 도구 연동",
      icon: Plug,
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-900/30 to-purple-900/30",
      borderColor: "hover:border-violet-400/60",
      iconColor: "text-violet-400",
      bulletColor: "text-violet-400",
      items: [
        "사내 시스템 연계 (메일, 회의실, 조직도)",
        "외부 MCP / Tool Hub 연동",
        "API 기반 워크플로우 연결",
      ],
    },
    {
      id: 4,
      title: "워크플로우 기반 업무 자동화",
      icon: Workflow,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-900/30 to-red-900/30",
      borderColor: "hover:border-orange-400/60",
      iconColor: "text-orange-400",
      bulletColor: "text-orange-400",
      items: [
        "검색 → 요약 → 작성 → 제출 자동화",
        "다단계 작업을 에이전트 간 협업",
        "역할 분담과 순차 실행",
      ],
    },
    {
      id: 5,
      title: "통합 관리 및 모니터링",
      icon: BarChart3,
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-900/30 to-blue-900/30",
      borderColor: "hover:border-cyan-400/60",
      iconColor: "text-cyan-400",
      bulletColor: "text-cyan-400",
      items: [
        "비서별 사용량, 응답률, 실패율 통계",
        "부서/개인별 사용 패턴 분석",
        "개인정보 보안 및 이상행위 탐지",
      ],
    },
  ];

  return (
    <section className="relative min-h-screen before:absolute before:inset-0 before:-z-20 before:bg-gradient-to-br before:from-gray-900 before:via-slate-900 before:to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-10 md:py-20">
          {/* Hero Section */}
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-18">
            <div
              className="relative mb-12"
              data-aos="zoom-y-out"
              data-aos-delay={300}
            >
              <div className="relative bg-gradient-to-r from-gray-800/60 to-gray-700/60 rounded-3xl p-10 border border-gray-600/40 backdrop-blur-xl shadow-2xl">
                <div className="absolute -top-4 left-10 text-5xl text-blue-400/70">
                  <Sparkles className="w-8 h-8 animate-pulse" />
                </div>
                <div className="absolute -bottom-4 right-10 text-5xl text-purple-400/70">
                  <Zap className="w-8 h-8 animate-bounce" />
                </div>
                <h2 className="text-xl font-bold text-gray-100 md:text-2xl xl:text-3xl leading-relaxed">
                  AI 비서, 검색, 외부 도구, 자동화, 보안까지 통합한{" "}
                  <span className="relative">
                    <span className="font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      All-in-One
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full"></span>
                  </span>{" "}
                  플랫폼
                </h2>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="relative">
            {/* Desktop Layout: Asymmetric Grid */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-12 gap-8 max-w-6xl mx-auto">
                {/* First Row: 2 cards */}
                <div className="col-span-6">
                  {features.slice(0, 1).map((feature, index) => (
                    <FeatureCard
                      key={feature.id}
                      feature={feature}
                      index={index}
                    />
                  ))}
                </div>
                <div className="col-span-6">
                  {features.slice(1, 2).map((feature, index) => (
                    <FeatureCard
                      key={feature.id}
                      feature={feature}
                      index={index + 1}
                    />
                  ))}
                </div>

                {/* Second Row: 3 cards */}
                <div className="col-span-4">
                  {features.slice(2, 3).map((feature, index) => (
                    <FeatureCard
                      key={feature.id}
                      feature={feature}
                      index={index + 2}
                    />
                  ))}
                </div>
                <div className="col-span-4">
                  {features.slice(3, 4).map((feature, index) => (
                    <FeatureCard
                      key={feature.id}
                      feature={feature}
                      index={index + 3}
                    />
                  ))}
                </div>
                <div className="col-span-4">
                  {features.slice(4, 5).map((feature, index) => (
                    <FeatureCard
                      key={feature.id}
                      feature={feature}
                      index={index + 4}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <FeatureCard key={feature.id} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const Icon = feature.icon;

  return (
    <div
      className={`group relative bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 border border-gray-700/40 ${feature.borderColor} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-${feature.iconColor.split("-")[1]}-500/20 backdrop-blur-xl`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      style={{
        background: `linear-gradient(135deg, ${
          feature.bgGradient.includes("blue")
            ? "rgba(30, 64, 175, 0.1)"
            : feature.bgGradient.includes("emerald")
              ? "rgba(5, 150, 105, 0.1)"
              : feature.bgGradient.includes("violet")
                ? "rgba(124, 58, 237, 0.1)"
                : feature.bgGradient.includes("orange")
                  ? "rgba(249, 115, 22, 0.1)"
                  : "rgba(6, 182, 212, 0.1)"
        } 0%, rgba(15, 23, 42, 0.3) 100%)`,
      }}
    >
      {/* Floating number badge */}
      <div
        className={`absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
      >
        {feature.id}
      </div>

      {/* Glowing effect on hover */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div
            className={`mr-4 p-3 bg-gradient-to-r ${feature.gradient} bg-opacity-20 rounded-2xl group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon
              className={`w-8 h-8 ${feature.iconColor} group-hover:animate-pulse`}
            />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300 leading-tight">
            {feature.title}
          </h3>
        </div>

        <ul className="space-y-3">
          {feature.items.map((item: string, itemIndex: number) => (
            <li
              key={itemIndex}
              className="flex items-start group-hover:translate-x-1 transition-transform duration-300"
              style={{ transitionDelay: `${itemIndex * 50}ms` }}
            >
              <div className={`${feature.bulletColor} mr-3 mt-1 flex-shrink-0`}>
                <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
              </div>
              <span className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Corner accent */}
      <div
        className={`absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-r ${feature.gradient} opacity-5 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300`}
      ></div>
    </div>
  );
}
