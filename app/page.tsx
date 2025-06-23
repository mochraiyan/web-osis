import NavBar from "./components/NavBar";

function InfoPage() {
  return (
    <section
      id="info"
      className="mt-40 lg:mt-[-100] bg-[url('/background-pix.jpeg')] items-center justify-center bg-cover bg-center h-screen flex flex-col p-10"
    >
      <div className="text-black text-left p-10 flex flex-col gap-20">
        <div className="text-center">
          <p className="text-4xl mt-[-60]">Organisasi Intra Sekolah</p>
          <p className="text-sm mt-5">
            Osis berkomitmen untuk merancang berbagai program yang dapat
            menunjang kreativitas, kedisiplinan dan kerohanian siswa.
          </p>
        </div>
        <div className="flex text-sm flex-col gap-10 lg:flex-row">
          <div className="flex-1 w-full">
            <p className="font-medium text-xl mb-3">
              Pembetukan karakter kepemimpinan
            </p>
            <p>
              Menjadi anggota OSIS mengajarkan tentang menjadi seorang pemimpin,
              ntah itu pemimpin dalam sebuah event, pemimpin dalam sebuah forum,
              atau bahkan pemimpin di sebuah organisasi
            </p>
          </div>
          <div className="flex-1 w-full">
            <p className="font-medium text-xl mb-3">
              Menambah relasi pertemanan
            </p>
            <p>
              Seorang anggota OSIS harus memiliki relasi yang cukup luas,
              seperti berteman dengan organisasi lain, mengenal sesama anggota
              OSIS dari sekola lain, dengan begitu, akan mudah untuk mendapatkan
              pengalaman dan ilmu dalam berorganisasi yang lebih banyak.
            </p>
          </div>
          <div className="flex-1 w-full">
            <p className="font-medium text-xl mb-3">Mengasah public speaking</p>
            <p>
              public speaking di butuhkan bagi setiap anggota OSIS untuk bisa
              menyampaikan pesan atau informasi kepada siswa atau siswi mengenai
              event yang akan datang.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="absolute inset-0 flex flex-col mt-70 lg:mt-35 text-white text-center px-4">
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-7xl mb-2">
        Welcome
      </h1>
      <p className="font-medium text-lg sm:text-xl lg:text-3xl mb-1">
        ASKARA ANAGATA GEN-17
      </p>
      <p className="font-medium text-sm lg:text-xl">2025/2026</p>
    </div>
  );
}

function Footer() {
  return <>
    <div className="text-center w-full mt-50 lg:mt-0">
        <div className="text-white bg-gray-600 container-curved-in h-45 text-center flex items-center justify-center">
          <p className="lg:mt-6 font-semibold text-sm mt-4 w-50 lg:text-lg lg:w-200">Temukan banyak pengalaman, buat banyak relasi, dan bangun jiwa kepemimpinanmu dengan menjadi bagian dari OSIS ASKARA ANAGATA</p>
        </div>
        <p className="p-2">Copyright &copy; 2025 | OSIS Askara Anagata</p>
    </div>
  </>;
}

export default function RootPage() {
  return (
    <div className="w-full">
      <div className="background-image bg-[url('/background.jpeg')] bg-cover bg-center lg:bg-bottom opacity-95 h-screen w-full shadow-2xl rounded-none sm:rounded-b-2xl lg:rounded-b-4xl lg:rounded-bl-4xl relative">
        <NavBar />
        <HomePage />
      </div>
      <InfoPage />
      <Footer />
    </div>
  );
}
