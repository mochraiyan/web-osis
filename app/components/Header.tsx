"use client";

import AboutUsePage from "./AboutUsePage";
import HomePage from "./HomePage";
import NavBar from "./NavBar";

import { usePathname } from "next/navigation";

export type HeaderConfig = {
  imgPath: string;
  curved: boolean;
  children: React.ReactNode;
};

const defaultConfig: HeaderConfig = {
  imgPath: "/background.jpeg",
  curved: true,
  children: <HomePage />,
};

export const headerConfigMap: { [key: string]: HeaderConfig } = {
  "/": {
    imgPath: "/background.jpeg",
    curved: false,
    children: <HomePage />,
  },
  "/about": {
    imgPath: "/sekolah.jpeg",
    curved: false,
    children: <AboutUsePage />,
  },
  "/program": {
    imgPath: "/sekolah.jpeg",
    curved: false,
    children: <HomePage />,
  },
  "/struktur": {
    imgPath: "/sekolah.jpeg",
    curved: false,
    children: <HomePage />,
  },
  "/sekbid": {
    imgPath: "/sekolah.jpeg",
    curved: false,
    children: <HomePage />,
  },
  "/sekbid/inti-osis": {
    imgPath: "/sekolah.jpeg",
    curved: false,
    children: <HomePage />,
  },
  "/sekbid/sekbid1": {
    imgPath: "/sekolah.jpeg",
    curved: false,
    children: <HomePage />,
  },
  "/sekbid/sekbid2": {
    imgPath: "/sekolah.jpeg",
    curved: false,
    children: <HomePage />,   
  },
  "/sekbid/sekbid3": {
    imgPath: "/sekolah.jpeg",
    curved: false,
    children: <HomePage />,
  },
  "/sekbid/sekbid4": {
    imgPath: "/sekolah.jpeg",
    curved: false,
    children: <HomePage />,
  },
  "/sekbid/sekbid5": {
    imgPath: "/sekolah.jpeg",
    curved: false,
    children: <HomePage />,
  },
  "/sekbid/sekbid6": {
    imgPath: "/sekolah.jpeg",
    curved: false,
    children: <HomePage />,
  },
  "/sekbid/sekbid7": {
    imgPath: "/sekolah.jpeg",
    curved: false,
    children: <HomePage />,
  },
  "/sekbid/sekbid8": {
    imgPath: "/sekolah.jpeg",
    curved: false,
    children: <HomePage />,
  },
  "/sekbid/sekbid9": {  
    imgPath: "/sekolah.jpeg",
    curved: false,
    children: <HomePage />,
  },
  "/sekbid/sekbid10": {
    imgPath: "/sekolah.jpeg",
    curved: false,
    children: <HomePage />,
  },
};

export default function Header() {
  const pathName = usePathname();
  // A safer way to handle potential undefined paths, especially during build
  const config = headerConfigMap[pathName] || headerConfigMap["/"] || defaultConfig;

  const headerStyle = {
    backgroundImage: `url(${config.imgPath})`,
  };

  const curveClass = config.curved ? "background-image" : "";

  return (
    <>
      {/*
        --- THE FIX IS ON THIS LINE ---
        Added `relative` for better stacking context and `overflow-x-hidden` to prevent horizontal scrolling.
      */}
      <div
        style={headerStyle}
        className={`${curveClass} relative z-10 bg-cover bg-center lg:bg-bottom min-h-screen w-full shadow-2xl rounded-none sm:rounded-b-2xl lg:rounded-b-4xl lg:rounded-bl-4xl overflow-x-hidden`}
      >
        <NavBar />
        {config.children}
      </div>
    </>
  );
}