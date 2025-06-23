import NavBar from "../components/NavBar";

export default function RootPage() {
    return (
    <div className="w-full">
        <div className="bg-[url('/sekolah.jpeg')] bg-cover bg-center lg:bg-bottom h-screen w-full shadow-2xl rounded-none sm:rounded-b-2xl lg:rounded-b-4xl lg:rounded-bl-4xl relative">
            <NavBar />
        </div>
    </div>
    );
} 