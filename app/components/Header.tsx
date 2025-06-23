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
    curved: true,
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
};

export default function Header() {
  const pathName = usePathname();
  const config = headerConfigMap[pathName] || defaultConfig;

  const headerStyle = {
    backgroundImage: `url(${config.imgPath})`,
  };

  const curveClass = config.curved ? "background-image" : "";

  return (
    <>
      <div
        style={headerStyle}
        className={`${curveClass} z-10 bg-cover bg-center lg:bg-bottom min-h-screen w-full shadow-2xl rounded-none sm:rounded-b-2xl lg:rounded-b-4xl lg:rounded-bl-4xl`}
      >
        <NavBar />
        {config.children}
      </div>
    </>
  );
}
