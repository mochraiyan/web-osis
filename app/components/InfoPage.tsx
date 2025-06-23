import SlideFadeInMotion from "./SlideInMotion";

export default function InfoPage() {
  return (
    <section
      id="info"
      className="mt-40 lg:mt-[-130] bg-[url('/background-pix.jpeg')] items-center justify-center bg-cover bg-center min-h-screen flex flex-col p-10"
    >
      <div className="text-black text-left p-10 flex flex-col gap-20">
        <SlideFadeInMotion delay={0.2} duration={1}>
          <div className="text-center">
            <p className="text-4xl mt-[-60]">Organisasi Intra Sekolah</p>
            <p className="text-sm mt-5">
              Osis berkomitmen untuk merancang berbagai program yang dapat
              menunjang kreativitas, kedisiplinan dan kerohanian siswa.
            </p>
          </div>
        </SlideFadeInMotion>

        <div className="flex text-sm flex-col gap-10 lg:flex-row">
          <SlideFadeInMotion delay={0.3} duration={1}>
            <div className="flex-1 w-full">
              <p className="font-medium text-xl mb-3">
                Pembetukan karakter kepemimpinan
              </p>
              <p>
                Menjadi anggota OSIS mengajarkan tentang menjadi seorang
                pemimpin, ntah itu pemimpin dalam sebuah event, pemimpin dalam
                sebuah forum, atau bahkan pemimpin di sebuah organisasi
              </p>
            </div>
          </SlideFadeInMotion>
          <SlideFadeInMotion delay={0.4} duration={1}>
            <div className="flex-1 w-full">
              <p className="font-medium text-xl mb-3">
                Menambah relasi pertemanan
              </p>
              <p>
                Seorang anggota OSIS harus memiliki relasi yang cukup luas,
                seperti berteman dengan organisasi lain, mengenal sesama anggota
                OSIS dari sekola lain, dengan begitu, akan mudah untuk
                mendapatkan pengalaman dan ilmu dalam berorganisasi yang lebih
                banyak.
              </p>
            </div>
          </SlideFadeInMotion>
          <SlideFadeInMotion delay={0.5} duration={1}>
            <div className="flex-1 w-full">
              <p className="font-medium text-xl mb-3">
                Mengasah public speaking
              </p>
              <p>
                public speaking di butuhkan bagi setiap anggota OSIS untuk bisa
                menyampaikan pesan atau informasi kepada siswa atau siswi
                mengenai event yang akan datang.
              </p>
            </div>
          </SlideFadeInMotion>
        </div>
      </div>
    </section>
  );
}
