"use client";

import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname?.startsWith(href);
  };

  return (
    <header className="p-1 md:p-3 backdrop-blur-lg text-white shadow-xl/30">
      <nav className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-between lg:justify-evenly m-2 items-center">
        <div className="flex gap-3 items-center justify-center">
          <div>
            <Image
              src={"/smkn2singosari.png"}
              alt="logo-smk"
              width={50}
              height={50}
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px]"
            />
          </div>
          <div>
            <Image
              src={"/logo-osis.png"}
              alt="logo-osis"
              width={40}
              height={45}
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[40px] lg:h-[45px]"
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="font-bold text-sm sm:text-lg lg:text-xl">
              Askara Anagata
            </h1>
            <p className="font-light text-xs sm:text-sm hidden lg:block">
              OFFICIAL WEBSITE OSIS SMKN 2 SINGOSARI
            </p>
          </div>
        </div>
        <div className="w-full lg:w-auto">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-wrap justify-center lg:justify-end lg:flex-row flex-col items-center gap-3 sm:gap-4 lg:gap-6">
              <NavigationMenuItem>
                <Link 
                  href="/" 
                  className={`relative hover:text-white transition-colors text-lg ${isActive('/') ? 'text-white' : ''}`}
                >
                  Home
                  {isActive('/') && (
                    <span className="absolute left-0 bottom-[-10] w-full h-0.5 bg-white animate-underline"></span>
                  )}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  href="/about" 
                  className={`relative hover:text-black transition-colors text-lg ${isActive('/about') ? 'text-black' : ''}`}
                >
                  About Us
                  {isActive('/about') && (
                    <span className="absolute left-0 bottom-[-10] w-full h-0.5 bg-black animate-underline"></span>
                  )}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/program"
                  className={`relative hover:text-black transition-colors whitespace-nowrap text-lg ${isActive('/program') ? 'text-black' : ''}`}
                >
                  Program Kerja
                  {isActive('/program') && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black animate-underline"></span>
                  )}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/struktur"
                  className={`relative hover:text-black transition-colors whitespace-nowrap text-lg ${isActive('/struktur') ? 'text-black' : ''}`}
                >
                  Struktur Organisasi
                  {isActive('/struktur') && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black animate-underline"></span>
                  )}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  href="/sekbid" 
                  className={`relative hover:text-black transition-colors text-lg ${isActive('/sekbid') ? 'text-black' : ''}`}
                >
                  Sekbid
                  {isActive('/sekbid') && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black animate-underline"></span>
                  )}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;