import Image from "next/image";
import { Bot, Search, Plug, Workflow, BarChart3 } from "lucide-react";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <div
              className="relative mb-8"
              data-aos="zoom-y-out"
              data-aos-delay={300}
            >
              <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm">
                <div className="absolute -top-3 left-8 text-4xl text-blue-400 opacity-60">
                  "
                </div>
                <div className="absolute -bottom-8 right-8 text-4xl text-purple-400 opacity-60">
                  "
                </div>
                <h2 className="text-xl font-medium text-gray-200 md:text-2xl leading-relaxed">
                  AI 비서, 검색, 외부 도구, 자동화, 보안까지 통합한{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    All-in-One
                  </span>{" "}
                  플랫폼
                </h2>
              </div>
            </div>
          </div>

          {/* Core Features Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {/* Feature 1 - AI Agent */}
            <div className="group relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-6 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <div className="flex items-center mb-4 mt-2">
                <div className="mr-3 p-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg">
                  <Bot className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  다양한 AI 비서 (AI Agent)
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>사전 정의된 비서: 문서 요약, 번역, 회의록 등</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>사용자 맞춤형 비서: 성격, 역할, 톤 설정</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Human-in-the-Loop: 사용자 개입 지점 관리</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 - RAG Search */}
            <div className="group relative bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl p-6 border border-gray-700/30 hover:border-green-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <div className="flex items-center mb-4 mt-2">
                <div className="mr-3 p-2 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-lg">
                  <Search className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  RAG 기반 고도화된 검색
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>벡터 DB 기반 문서 검색 및 유사도 응답</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>업로드 문서 검색/요약/답변 기능</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>개인/워크스페이스별 클라우드 스토리지</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 - External Integration */}
            <div className="group relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-6 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <div className="flex items-center mb-4 mt-2">
                <div className="mr-3 p-2 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-lg">
                  <Plug className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  외부 시스템 및 도구 연동
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>사내 시스템 연계 (메일, 회의실, 조직도)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>외부 MCP / Tool Hub 연동</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>API 기반 워크플로우 연결</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 - Workflow Automation */}
            <div className="group relative bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-2xl p-6 border border-gray-700/30 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                4
              </div>
              <div className="flex items-center mb-4 mt-2">
                <div className="mr-3 p-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-lg">
                  <Workflow className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  워크플로우 기반 업무 자동화
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>검색 → 요약 → 작성 → 제출 자동화</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>다단계 작업을 에이전트 간 협업</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>역할 분담과 순차 실행</span>
                </li>
              </ul>
            </div>

            {/* Feature 5 - Management & Monitoring */}
            <div className="group relative bg-gradient-to-br from-teal-900/20 to-cyan-900/20 rounded-2xl p-6 border border-gray-700/30 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                5
              </div>
              <div className="flex items-center mb-4 mt-2">
                <div className="mr-3 p-2 bg-gradient-to-r from-teal-500/20 to-cyan-600/20 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  통합 관리 및 모니터링
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <span>비서별 사용량, 응답률, 실패율 통계</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <span>부서/개인별 사용 패턴 분석</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <span>개인정보 보안 및 이상행위 탐지</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
