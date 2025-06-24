"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSekbidOpen, setIsMobileSekbidOpen] = useState(false);
  const [isMobileLainnyaOpen, setIsMobileLainnyaOpen] = useState(false);

  const [isDesktopSekbidOpen, setIsDesktopSekbidOpen] = useState(false);
  const [isDesktopLainnyaOpen, setIsDesktopLainnyaOpen] = useState(false);
  const desktopSekbidRef = useRef<HTMLDivElement>(null);
  const desktopLainnyaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    closeMobileMenu();
    setIsDesktopSekbidOpen(false);
    setIsDesktopLainnyaOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (desktopSekbidRef.current && !desktopSekbidRef.current.contains(event.target as Node)) {
        setIsDesktopSekbidOpen(false);
      }
      if (desktopLainnyaRef.current && !desktopLainnyaRef.current.contains(event.target as Node)) {
        setIsDesktopLainnyaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname?.startsWith(href);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileSekbidOpen(false);
    setIsMobileLainnyaOpen(false);
  };

  const navLinks = [
    { href: "/about", label: "Home" },
    { href: "/", label: "About us", scroll: true },
  ];

  const sekbidLinks = [
    { href: "inti-osis", label: "INTI OSIS" },
    ...Array.from({ length: 10 }).map((_, i) => ({
      href: `${i + 1}`,
      label: `BIDANG ${i + 1}`,
    })),
  ];

  const lainnyaLinks = [
    { href: "/struktur", label: "Struktur Organisasi" },
    { href: "/proker", label: "Program Kerja" },
    { href: "/pilketos", label: "Pemilihan Ketua OSIS"},
    { href: "/events", label: "Events"},
  ];

  return (
    <header className="backdrop-blur-3xl text-white shadow-lg sticky top-0 z-40">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-5 py-4">
        {/* Logo and Title Section */}
        <Link href="/" className="flex gap-4 items-center" onClick={closeMobileMenu}>
          <Image src={"/smkn2singosari.png"} alt="logo-smk" width={60} height={60} className="w-10 h-10 sm:w-12 sm:h-12"/>
          <Image src={"/logo-osis.png"} alt="logo-osis" width={50} height={50} className="w-8 h-8 sm:w-10 sm:h-10"/>
          <div className="text-left">
            <h1 className="font-bold text-lg sm:text-xl">Askara Anagata</h1>
            <p className="font-light text-sm hidden sm:block">OSIS SMKN 2 SINGOSARI</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8"> {/* Gap dikembalikan ke 8 */}
          <ul className="flex items-center gap-8"> {/* Gap dikembalikan ke 8 */}
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  scroll={link.scroll ?? false}
                  className={`relative pb-1 hover:text-white transition-colors text-lg ${ /* Font size dikembalikan ke lg */
                    isActive(link.href) ? "text-white font-semibold" : "text-white/70"
                  } group`}
                >
                  {link.label}
                  <span className={`absolute left-0 bottom-[-5px] w-full h-0.5 bg-white transition-transform duration-300 origin-center ${
                    isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Desktop Sekbid Dropdown */}
          <div className="relative" ref={desktopSekbidRef} onMouseEnter={() => setIsDesktopSekbidOpen(true)}>
            <button
              onClick={() => setIsDesktopSekbidOpen((prev) => !prev)}
              className={`relative pb-1 hover:text-white transition-colors text-lg flex items-center gap-1 ${
                isActive("/sekbid") ? "text-white font-semibold" : "text-white/70"
              }`}
            >
              Seksi Bidang
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDesktopSekbidOpen ? "rotate-180" : ""}`}/>
            </button>
            <div 
            onMouseLeave={() => setIsDesktopSekbidOpen(false)}
            className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-48 bg-gray-800 rounded-md shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
              isDesktopSekbidOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
            }`}>
              <ul className="p-2">
                {sekbidLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={`/sekbid/${link.href}`} className={`block w-full text-left px-4 py-2 rounded-md text-sm whitespace-nowrap transition-colors ${
                      isActive(`/sekbid/${link.href}`) ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Desktop "Lainnya" Dropdown */}
          <div className="relative" ref={desktopLainnyaRef} onMouseEnter={() => setIsDesktopLainnyaOpen(true)}>
            <button
              onClick={() => setIsDesktopLainnyaOpen((prev) => !prev)}
              className={`relative pb-1 hover:text-white transition-colors text-lg flex items-center gap-1 ${
                isActive("/artikel") || isActive("/prestasi") ? "text-white font-semibold" : "text-white/70"
              }`}
            >
              Lainnya
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDesktopLainnyaOpen ? "rotate-180" : ""}`}/>
            </button>
            <div onMouseLeave={() => setIsDesktopLainnyaOpen(false)} className={`absolute right-0 top-full mt-3 w-48 bg-gray-800 rounded-md shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
              isDesktopLainnyaOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
            }`}>
              <ul className="p-2">
                {lainnyaLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={`block w-full text-left px-4 py-2 rounded-md text-sm whitespace-nowrap transition-colors ${
                      isActive(link.href) ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Sidebar (Overlay) */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out lg:hidden ${
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
        <div className="absolute inset-0 bg-black/60" onClick={closeMobileMenu}></div>
        <div className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-gray-900 shadow-2xl transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`} style={{ maxWidth: 'calc(100vw - 3rem)' }}>
          <div className="flex justify-between items-center p-4">
            <h2 className="font-bold text-lg">Menu</h2>
            <button onClick={closeMobileMenu} aria-label="Close menu">
              <X className="w-8 h-8 text-white" />
            </button>
          </div>
          <ul className="bg-gray-800 p-4 space-y-2">
            {navLinks.map((link) => (
              <li key={`mobile-${link.href}`}>
                <Link
                  scroll={false}
                  href={link.href}
                  className={`block text-base py-2 px-3 rounded-md transition-colors ${
                    isActive(link.href)
                      ? "bg-white/10 text-white font-semibold border-b border-white"
                      : "text-white/70 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            
            {/* Mobile Sekbid Accordion */}
            <li>
              <button
                onClick={() => setIsMobileSekbidOpen(!isMobileSekbidOpen)}
                className={`w-full flex justify-between items-center text-base py-2 px-3 rounded-md transition-colors ${
                  isActive("/sekbid") ? "bg-white/10 text-white font-semibold" : "text-white/70 hover:bg-white/5"
                }`}
              >
                <span>Seksi Bidang</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileSekbidOpen ? "rotate-180" : ""}`}/>
              </button>
              {isMobileSekbidOpen && (
                <ul className="pl-4 mt-2 space-y-1 border-l-2 border-gray-700">
                  {sekbidLinks.map((link) => (
                    <li key={`mobile-sekbid-${link.href}`}>
                      <Link scroll={false} href={`/sekbid/${link.href}`} className={`block text-sm py-2 px-4 rounded-md transition-colors ${
                        isActive(`/sekbid/${link.href}`) ? "text-white font-semibold border-b border-white" : "text-white/60 hover:text-white"
                      }`}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            
            {/* Mobile "Lainnya" Accordion */}
            <li>
              <button
                onClick={() => setIsMobileLainnyaOpen(!isMobileLainnyaOpen)}
                className={`w-full flex justify-between items-center text-base py-2 px-3 rounded-md transition-colors ${
                  isActive("/artikel") || isActive("/prestasi") ? "bg-white/10 text-white font-semibold" : "text-white/70 hover:bg-white/5"
                }`}
              >
                <span>Lainnya</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileLainnyaOpen ? "rotate-180" : ""}`}/>
              </button>
              {isMobileLainnyaOpen && (
                <ul className="pl-4 mt-2 space-y-1 border-l-2 border-gray-700">
                  {lainnyaLinks.map((link) => (
                    <li key={`mobile-lainnya-${link.href}`}>
                      <Link scroll={false} href={link.href} className={`block text-sm py-2 px-4 rounded-md transition-colors ${
                        isActive(link.href) ? "text-white font-semibold border-b border-white" : "text-white/60 hover:text-white"
                      }`}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar;