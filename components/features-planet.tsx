import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import {
  FileText,
  PenTool,
  BarChart3,
  MessageCircle,
  Search,
  Globe,
} from "lucide-react";

export default function FeaturesPlanet() {
  const useCases = [
    {
      icon: FileText,
      title: "문서 요약 및 분석",
      description:
        "대량의 문서를 자동으로 분석하고 핵심 내용을 추출하여 의사결정을 지원합니다. 계약서, 보고서, 연구자료 등을 빠르게 이해할 수 있습니다.",
    },
    {
      icon: PenTool,
      title: "회의록 자동 생성",
      description:
        "회의 내용을 실시간으로 기록하고 주요 결정사항, 액션 아이템을 자동으로 정리하여 회의 효율성을 극대화합니다.",
    },
    {
      icon: BarChart3,
      title: "시장조사 리포트",
      description:
        "다양한 데이터 소스를 분석하여 종합적인 시장 조사 리포트를 자동 생성합니다. 트렌드 분석과 인사이트 도출을 지원합니다.",
    },
    {
      icon: MessageCircle,
      title: "고객 지원 자동화",
      description:
        "고객 문의를 자동으로 분류하고 적절한 답변을 생성하여 고객 만족도를 높이고 응답 시간을 단축합니다.",
    },
    {
      icon: Search,
      title: "지식 검색 시스템",
      description:
        "기업 내부의 방대한 지식베이스에서 필요한 정보를 즉시 검색하고 관련 문서를 추천합니다.",
    },
    {
      icon: Globe,
      title: "다국어 번역 서비스",
      description:
        "글로벌 비즈니스를 위한 실시간 다국어 번역과 현지화 서비스를 제공하여 소통의 장벽을 해소합니다.",
    },
  ];

  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-100 md:text-4xl mb-4">
              반복적인 문서 작업, 회의 정리, 고객 응대, 번역 업무까지
            </h2>
            <h2 className="text-xl text-gray-400 md:text-xl">
              OASIS는 다양한 업무를 자동화해 실질적인 변화를 만들어냅니다.
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    {/* Floating Icons around Planet */}
                    <div className="absolute left-5 top-6 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500">
                      <div className="bg-blue-500/20 backdrop-blur-sm rounded-full p-3 border border-blue-500/30">
                        <FileText className="w-6 h-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="absolute left-76 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-80 transition-opacity duration-500">
                      <div className="bg-green-500/20 backdrop-blur-sm rounded-full p-3 border border-green-500/30">
                        <PenTool className="w-6 h-6 text-green-400" />
                      </div>
                    </div>
                    <div className="absolute -left-6 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-80 transition-opacity duration-500">
                      <div className="bg-purple-500/20 backdrop-blur-sm rounded-full p-3 border border-purple-500/30">
                        <BarChart3 className="w-6 h-6 text-purple-400" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500">
                      <div className="bg-orange-500/20 backdrop-blur-sm rounded-full p-3 border border-orange-500/30">
                        <MessageCircle className="w-6 h-6 text-orange-400" />
                      </div>
                    </div>
                    <div className="absolute -right-10 top-32 z-10 animate-[float_4s_ease-in-out_infinite_0.5s_both] opacity-80 transition-opacity duration-500">
                      <div className="bg-cyan-500/20 backdrop-blur-sm rounded-full p-3 border border-cyan-500/30">
                        <Search className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>
                    <div className="absolute left-20 bottom-6 z-10 animate-[float_4s_ease-in-out_infinite_1.5s_both] opacity-80 transition-opacity duration-500">
                      <div className="bg-indigo-500/20 backdrop-blur-sm rounded-full p-3 border border-indigo-500/30">
                        <Globe className="w-6 h-6 text-indigo-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <article
                  key={index}
                  className="group hover:bg-gray-800/50 transition-colors duration-300 rounded-lg"
                >
                  <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                    <Icon className="w-4 h-4 text-blue-500" />
                    <span>{useCase.title}</span>
                  </h3>
                  <p className="text-[15px] text-gray-400 leading-relaxed">
                    {useCase.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
