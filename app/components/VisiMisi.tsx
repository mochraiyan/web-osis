export default function VisiMisi() {
    return (
        <div className="mb-30 flex items-center justify-center text-center gap-4 flex-col pt-[100px] lg:pt-[150px] text-black px-4">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-7xl mb-2">
                VISI DAN MISI
            </h1>
            <p className="font-medium text-lg sm:text-xl lg:text-3xl mb-1">
                Visi dan Misi OSIS SMK Negeri 2 Singosari
            </p>
            <div className="text-black text-left gap-10">
                <div className="text-left mt-10 w-full max-w-2xl">
                    <h2 className="text-2xl font-bold mb-4 bg-gray-600 w-fit rounded-full text-white p-4 pl-8 pr-8">Visi</h2>
                    <p className="text-lg">
                        Terwujudnya OSIS yang berprestasi, berkarakter, dan berwawasan
                        global dalam menciptakan lingkungan sekolah yang kondusif,
                        inovatif, dan berbudaya.
                    </p>        
                </div>
                <div className="text-left mt-10">
                    <h2 className="text-2xl font-bold mb-4 bg-gray-600 w-fit rounded-full text-white p-4 pl-8 pr-8">Misi</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            Meningkatkan kualitas kepemimpinan dan keterampilan anggota OSIS
                            melalui pelatihan dan pengembangan diri.
                        </li>
                        <li>
                            Mendorong partisipasi aktif siswa dalam kegiatan ekstrakurikuler
                            dan organisasi sekolah.
                        </li>
                        <li>
                            Membangun kerjasama yang baik antara OSIS, siswa, guru, dan
                            pihak sekolah untuk menciptakan lingkungan belajar yang
                            kondusif.
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}
