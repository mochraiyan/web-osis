import SlideFadeInMotion from "./SlideInMotion"

export default function AboutUsePage() {
  return (
    <SlideFadeInMotion delay={0.2} duration={1}>
      <div className="flex items-center gap-4 flex-col pt-[100px] lg:pt-[150px] text-white text-center px-4">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-8xl mb-2">
          ASKARA ANAGATA
        </h1>
        <p className="font-medium text-lg sm:text-xl lg:text-3xl mb-1">
          Selamat Datang Di Website OSIS SMK Negeri 2 Singosari
        </p>
        <p className="font-medium text-sm lg:text-xl">2025/2026</p>
        <h3 className="font-medium text-sm lg:text-2xl mt-4 bg-[#343434] p-5 pr-10 pl-10 shadow-2xl w-fit rounded-full">
          Gen 17 | 2025 - 2026
        </h3>
      </div>
    </SlideFadeInMotion>
  );
}
