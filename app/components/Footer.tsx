import SlideFadeInMotion from "./SlideInMotion"

export default function Footer() {
  return (
    <>
      <div className="text-center w-full mt-50 lg:mt-0">
        <div className="text-white bg-gray-600 container-curved-in h-45 text-center flex items-center justify-center">
          <SlideFadeInMotion delay={0.2} duration={1}>
            <p className="lg:mt-6 font-semibold text-sm mt-4 w-50 lg:text-lg lg:w-200">
              Temukan banyak pengalaman, buat banyak relasi, dan bangun jiwa
              kepemimpinanmu dengan menjadi bagian dari OSIS ASKARA ANAGATA
            </p>
          </SlideFadeInMotion>
        </div>
          <SlideFadeInMotion delay={0.3} duration={1}>
            <p className="p-2">Copyright &copy; 2025 | OSIS Askara Anagata</p>
          </SlideFadeInMotion>
      </div>
    </>
  );
}
