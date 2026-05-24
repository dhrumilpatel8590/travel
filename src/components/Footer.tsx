import React from "react";
import Link from "next/link";
import { Compass, MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-text text-white pt-20 pb-10 mt-auto font-body">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16 font-body">
          <div className="col-span-1 md:col-span-2 font-body">
            <Link href="/" className="flex items-center gap-2 mb-6 inline-flex group">
              <Compass className="w-8 h-8 text-secondary transition-transform group-hover:rotate-45 duration-500" />
              <span className="font-heading text-3xl text-white tracking-wider">
                ELOHIM TOURS
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed font-body">
              Premier Indian Travel Agency delivering exceptional holiday experiences across India (Goa) and international destinations like Azerbaijan, Georgia, and the Philippines.
            </p>
            <div className="flex gap-4 font-body">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors text-white"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors text-white"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors text-white"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="font-body">
            <h4 className="font-heading text-xl text-white mb-6">Explore</h4>
            <ul className="space-y-4 font-body">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-cta transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-400 hover:text-cta transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-cta transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-cta transition-colors">
                  Journal
                </Link>
              </li>
            </ul>
          </div>
          <div className="font-body">
            <h4 className="font-heading text-xl text-white mb-6">Contact</h4>
            <ul className="space-y-4 font-body">
              <li className="flex items-start gap-3 text-gray-400 font-body">
                <MapPin className="w-5 h-5 text-secondary mt-1 shrink-0" />
                <span className="leading-relaxed">
                  A/202, Sairam Residency,
                  <br />
                  Behind Nutan Row House,
                  <br />
                  Near Vidyakunj School,
                  <br />
                  Pal, Surat.
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-body">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:9925125511" className="hover:text-white transition-colors">
                  +91 99251 25511
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-body">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:elohimtours@mail.com" className="hover:text-white transition-colors">
                  elohimtours@mail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-body">
          <p className="text-gray-500 text-sm">
            © 2026 Elohim Tours. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 font-body">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
