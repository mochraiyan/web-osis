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
  
  // State and ref for the desktop dropdown menu
  const [isDesktopSekbidOpen, setIsDesktopSekbidOpen] = useState(false);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile menu and desktop dropdown on route change
  useEffect(() => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    }
    // Also close the desktop dropdown when navigating
    if (isDesktopSekbidOpen) {
      setIsDesktopSekbidOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Effect to handle clicks outside of the desktop dropdown to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target as Node)) {
        setIsDesktopSekbidOpen(false);
      }
    }
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [desktopDropdownRef]);


  // --- START OF FIX --- (This is your original, correct body scroll lock)
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
  // --- END OF FIX ---


  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname?.startsWith(href);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileSekbidOpen(false); // Also close the accordion
  };

  const navLinks = [
    { href: "/", label: "Home", scroll: true },
    { href: "/about", label: "About Us" },
    { href: "/program", label: "Program Kerja" },
    { href: "/struktur", label: "Struktur Organisasi" },
  ];

  const sekbidLinks = [
    { href: "inti-osis", label: "INTIOSIS" },
    ...Array.from({ length: 10 }).map((_, i) => ({
      href: `${i + 1}`,
      label: `BIDANG ${i + 1}`,
    })),
  ];

  return (
    <header className="backdrop-blur-3xl text-white shadow-lg">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 py-2">
        {/* Logo and Title Section */}
        <Link href="/" className="flex gap-3 items-center" onClick={closeMobileMenu}>
          <Image
            src={"/smkn2singosari.png"}
            alt="logo-smk"
            width={50}
            height={50}
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <Image
            src={"/logo-osis.png"}
            alt="logo-osis"
            width={40}
            height={45}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <div className="text-left">
            <h1 className="font-bold text-sm sm:text-lg">Askara Anagata</h1>
            <p className="font-light text-xs hidden sm:block">
              OSIS SMKN 2 SINGOSARI
            </p>
          </div>
        </Link>

        {/* Desktop Navigation (Hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  scroll={link.scroll}
                  className={`relative pb-1 hover:text-white transition-colors text-base ${
                    isActive(link.href) ? "text-white font-semibold" : "text-white/70"
                  } group`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 bottom-[-5px] w-full h-0.5 bg-white transition-transform duration-300 origin-center ${
                      isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
          {/* Desktop Sekbid Dropdown (State-driven for hover and click) */}
          <div
            className="relative"
            ref={desktopDropdownRef}
            onMouseEnter={() => setIsDesktopSekbidOpen(true)}
          >
            <button
              onClick={() => setIsDesktopSekbidOpen((prev) => !prev)}
              className={`relative pb-1 hover:text-white transition-colors text-base flex items-center gap-1 ${
                isActive("/sekbid") ? "text-white font-semibold" : "text-white/70"
              }`}
            >
              Sekbid
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isDesktopSekbidOpen ? "rotate-180" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-[-5px] w-full h-0.5 bg-white transition-transform duration-300 origin-center ${
                  isActive("/sekbid") || isDesktopSekbidOpen ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </button>
            <div
              onMouseLeave={() => setIsDesktopSekbidOpen(false)}
              className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-48 bg-gray-800 rounded-md shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
                isDesktopSekbidOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <ul className="p-2">
                {sekbidLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/sekbid/${link.href}`}
                      className={`block w-full text-left px-4 py-2 rounded-md text-sm whitespace-nowrap transition-colors ${
                        isActive(`/sekbid/${link.href}`)
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button (Visible on mobile) */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Sidebar (Overlay) */}
      <div 
        className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60" onClick={closeMobileMenu}></div>

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-gray-900 shadow-2xl transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ maxWidth: 'calc(100vw - 3rem)' }}
        >
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
            {/* Mobile Sekbid Accordion (JS-driven) */}
            <li>
              <button
                onClick={() => setIsMobileSekbidOpen(!isMobileSekbidOpen)}
                className={`w-full flex justify-between items-center text-base py-2 px-3 rounded-md transition-colors ${
                  isActive("/sekbid")
                    ? "bg-white/10 text-white font-semibold"
                    : "text-white/70 hover:bg-white/5"
                }`}
              >
                <span>Sekbid</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isMobileSekbidOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileSekbidOpen && (
                <ul className="pl-4 mt-2 space-y-1 border-l-2 border-gray-700">
                  {sekbidLinks.map((link) => (
                    <li key={`mobile-sekbid-${link.href}`}>
                      <Link
                        scroll={false}
                        href={`/sekbid/${link.href}`}
                        className={`block text-sm py-2 px-4 rounded-md transition-colors ${
                          isActive(`/sekbid/${link.href}`)
                            ? "text-white font-semibold"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
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