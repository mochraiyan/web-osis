export default function InfoPage() {
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
