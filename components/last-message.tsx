import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";
import LogoFull from "@/public/images/logo_full.png";

export default function LargeTestimonial() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Side gradients for brightness effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-40"></div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        <div className="py-12 md:py-16 lg:py-20">
          <div className="text-center">
            <div className="mb-8 md:mb-10">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            <blockquote className="relative z-10">
              <div className="text-base md:text-lg lg:text-xl text-gray-800 space-y-4">
                <p className="font-medium">
                  외부망 없이도 작동하는{" "}
                  <span className=" font-bold bg-blue-50 px-2 py-1 rounded-lg">
                    LLM 기반 AI 자동화
                  </span>
                  ,
                </p>
                <p className="font-medium">
                  <span className=" font-bold bg-green-50 px-2 py-1 rounded-lg">
                    쿠버네티스로 유연하게 확장되는 인프라 구조
                  </span>
                  ,
                </p>
                <p className="font-medium">
                  그리고{" "}
                  <span className="font-bold bg-purple-50 px-2 py-1 rounded-lg">
                    기업 보안 정책을 고려한 완벽한 설계
                  </span>
                  .
                </p>

                <div className="mt-6 pt-6  border-gradient-to-r from-blue-500 to-indigo-800">
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                    <span className="inline-block align-middle mx-2">
                      <Image
                        src={LogoFull}
                        alt="OASIS"
                        width={120}
                        height={40}
                        className="inline-block drop-shadow-lg"
                      />
                    </span>
                    이기에 가능합니다.
                  </p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
