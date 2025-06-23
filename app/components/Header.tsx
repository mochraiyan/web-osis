"use client";

import NavBar from "./NavBar";

import { usePathname } from "next/navigation";

export type HeaderConfig = {
  imgPath: string;
  curved: boolean;
};

const defaultConfig: HeaderConfig = {
  imgPath: "/background.jpeg",
  curved: true,
};

export const headerConfigMap: { [key: string]: HeaderConfig } = {
  "/": {
    imgPath: "/background.jpeg",
    curved: true,
  },
  "/about": {
    imgPath: "/sekolah.jpeg",
    curved: false,
  },
  "/program": {
    imgPath: "/sekolah.jpeg",
    curved: false,
  },
  "/struktur": {
    imgPath: "/sekolah.jpeg",
    curved: false,
  },
  "/sekbid": {
    imgPath: "/sekolah.jpeg",
    curved: false,
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
    <div
      style={headerStyle}
      className={`${curveClass} bg-cover bg-center lg:bg-bottom h-screen w-full shadow-2xl rounded-none sm:rounded-b-2xl lg:rounded-b-4xl lg:rounded-bl-4xl relative`}
    >
      <NavBar />
    </div>
  );
}
