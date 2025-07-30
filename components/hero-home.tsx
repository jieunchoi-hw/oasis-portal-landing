import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-30">
          {/* Section header */}
          <div className="pb-2 text-center md:pb-2">
            <div
              className="mb-6 flex justify-center"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            ></div>
            <h1
              className="mb-6 border-y text-5xl font-bold leading-relaxed bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 bg-clip-text text-transparent [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-5xl"
              data-aos="zoom-y-out"
              data-aos-delay={400}
            >
              AI 업무 자동화를 넘어서, <br /> AI Orchestration의 시작
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                여러 AI Agent가 목적 중심으로 협업하고 스스로 문제를 해결하는
                통합형 AI Orchestration Platform으로 확장성과 안정성을 갖춘 LLM
                기반 워크플로우를 구축하세요.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      무료 체험 시작
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5"></span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    자세히 알아보기
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-4xl mt-12"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative p-2 rounded-2xl bg-gradient-to-r from-gray-100 via-white to-gray-200 animate-spin-slow">
              <Image
                src="/images/pages/heroImage.png"
                alt="OASIS AI Orchestration Platform"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
