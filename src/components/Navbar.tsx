"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/destinations", label: "Destinations" },
    { href: "/services", label: "Packages" },
    { href: "/blog", label: "Journal" },
  ];

  return (
    <>
      <header>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border font-body">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link href="/" className="flex items-center gap-2 group" onClick={closeMenu}>
                <Compass className="w-8 h-8 text-primary transition-transform group-hover:rotate-45 duration-500" />
                <span className="font-heading text-3xl text-primary tracking-wider">
                  ELOHIM TOURS
                </span>
              </Link>
              <div className="hidden md:flex items-center gap-8 font-body">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-base font-medium transition-colors ${
                        isActive ? "text-primary font-bold" : "text-text hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="flex items-center gap-4 ml-2 border-l border-border pl-6 font-body">
                  <a
                    href="tel:9925125511"
                    className="flex items-center gap-2 text-sm font-bold text-primary hover:text-cta transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 99251 25511</span>
                  </a>
                  <Link
                    href="/contact"
                    className="bg-cta hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30 text-sm tracking-wide uppercase"
                  >
                    Book Trip
                  </Link>
                </div>
              </div>
              <button
                id="mobileMenuBtn"
                onClick={toggleMenu}
                aria-label="Toggle mobile menu"
                className="md:hidden text-text hover:text-primary focus:outline-none"
              >
                <Menu className="w-8 h-8" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobileMenu"
        className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex-col items-center justify-center gap-8 transition-all duration-300 font-body ${
          isMobileMenuOpen ? "flex" : "hidden"
        }`}
      >
        <button
          id="closeMenuBtn"
          onClick={closeMenu}
          aria-label="Close mobile menu"
          className="absolute top-6 right-6 text-text hover:text-primary focus:outline-none"
        >
          <X className="w-8 h-8" />
        </button>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`text-4xl font-heading transition-colors ${
                isActive ? "text-primary font-bold" : "text-text hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <a
          href="tel:9925125511"
          onClick={closeMenu}
          className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-cta transition-colors font-body mt-4"
        >
          <Phone className="w-6 h-6" />
          <span>+91 99251 25511</span>
        </a>
        <Link
          href="/contact"
          onClick={closeMenu}
          className="text-4xl font-heading text-cta hover:text-orange-700 mt-2"
        >
          Book Trip
        </Link>
      </div>
    </>
  );
}
