import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Check, Sparkles, MapPin, Phone } from "lucide-react";
import GoaPackages from "@/components/GoaPackages";
import BaliPackages from "@/components/BaliPackages";

export const metadata = {
  title: "Premium Tour Packages | Elohim Tours",
  description:
    "Explore our premium tour packages: Goa 3N/4D & 5★ Astor Suite Land Packages, Baku Experience Premium Package, and customized tours for Georgia and the Philippines.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Curated Adventures Hero */}
      <section
        id="curated_adventures"
        className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary overflow-hidden font-body"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-25 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center font-body">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-bold tracking-wider mb-6 border border-white/30 uppercase">
            <Sparkles className="w-4 h-4 text-orange-400" /> Exclusive Land Packages
          </span>
          <h1 className="text-6xl lg:text-8xl font-heading text-white mb-6 leading-tight">
            Premium Holiday Packages
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-body leading-relaxed font-light">
            Unbeatable B2C & B2B rates. Specializing in top domestic escapes like Goa and premium international getaways across Azerbaijan, Georgia, and the Philippines.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages_list" className="py-24 bg-background font-body">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24 font-body">
          {/* Package 1: Goa (Interactive Selector) */}
          <GoaPackages />

          {/* Package 2: Baku Experience */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-12 shadow-xl border border-border grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch lg:items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto w-full lg:min-h-[550px] lg:h-full order-1 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1583467875263-d50dec37a88c?q=80&w=1000&auto=format&fit=crop"
                alt="Baku Azerbaijan"
                fill
                sizes="(max-w-1024px) 100vw, 40vw"
                className="rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg font-body font-bold text-sm text-primary flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cta" /> Baku, Azerbaijan
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-2">
              <div className="flex flex-wrap items-center gap-3 font-body">
                <span className="bg-orange-100 text-cta font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full font-body flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-cta" /> PREMIUM PACKAGE 3
                </span>
                <span className="bg-green-100 text-primary font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full font-body">
                  3 Nights / 4 Days
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-primary leading-tight">
                Baku Experience Land Package (Without Flight)
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed font-body">
                Discover the architectural marvels and historic beauty of Azerbaijan with our exclusive premium package, designed for supreme comfort and memorable sightseeing. Special B2B rates available!
              </p>

              {/* Itinerary & Inclusions */}
              <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-border font-body">
                <div>
                  <h4 className="font-bold text-text mb-3 flex items-center gap-2 text-primary font-body">
                    <Calendar className="w-5 h-5 text-secondary" /> Tour Highlights
                  </h4>
                  <ul className="space-y-2 text-sm text-muted font-body">
                    <li><strong className="text-text">Day 1:</strong> Airport Transfer + Panoramic Tour</li>
                    <li><strong className="text-text">Day 2:</strong> Baku City Tour</li>
                    <li><strong className="text-text">Day 3:</strong> Gobustan Tour + Shopping</li>
                    <li><strong className="text-text">Day 4:</strong> Airport Transfer</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-text mb-3 flex items-center gap-2 text-primary font-body">
                    <Check className="w-5 h-5 text-secondary" /> Package Includes
                  </h4>
                  <ul className="space-y-2 text-sm text-muted font-body">
                    <li>✔️ 3 Nights in 4★ Hotel (BB)</li>
                    <li>✔️ Private Transportation & English-speaking Guide</li>
                    <li>✔️ Entrance Fees (Gobustan, Mud Volcano, Funicular, Mini Venice)</li>
                    <li>✔️ 2 Bottles of Water per day & E-visa Support</li>
                    <li>✔️ 24/7 Ground Assistance</li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-border font-body">
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-cta font-body">B2B & B2C Inquiries</p>
                  <span className="text-3xl font-heading text-text font-bold">
                    Best Industry Rates
                  </span>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <a
                    href="tel:9925125511"
                    className="flex-1 sm:flex-initial p-3.5 bg-secondary/20 hover:bg-secondary/30 text-primary rounded-full transition-colors font-body flex items-center justify-center gap-2"
                    title="Call Now"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="sm:hidden text-sm font-bold">Call Us</span>
                  </a>
                  <Link
                    href="/contact"
                    className="flex-2 sm:flex-initial bg-cta hover:bg-orange-700 text-white px-6 sm:px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30 uppercase tracking-wide text-sm font-body text-center flex items-center justify-center"
                  >
                    Inquire B2B / B2C
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Package 3: Georgia Scenic Escape */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-12 shadow-xl border border-border grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch lg:items-center">
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-3 font-body">
                <span className="bg-orange-100 text-cta font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full font-body">
                  Caucasus Paradise
                </span>
                <span className="bg-green-100 text-primary font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full font-body">
                  4 Nights / 5 Days
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-primary leading-tight">
                Georgia Panoramic Highlands
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed font-body">
                Explore the charming cobblestone streets of Tbilisi and the majestic snow-capped peaks of Kazbegi. Enjoy premium 4★ stays, private wine tasting, and guided Caucasus excursions.
              </p>
              <ul className="space-y-3 text-muted mb-8 list-disc list-inside font-body text-sm">
                <li>4 Nights in premium 4★ boutique hotel in Tbilisi</li>
                <li>Private chauffeured transfers & English-speaking guides</li>
                <li>Guided tours to Ananuri Fortress, Gudauri & Kazbegi</li>
                <li>Traditional Georgian dining & wine masterclass</li>
                <li>24/7 dedicated concierge assistance</li>
              </ul>
              <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-border font-body">
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-muted font-body">Inquire Rates</p>
                  <span className="text-3xl font-heading text-text font-bold">
                    Special Couple & Group Rates
                  </span>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <a
                    href="tel:9925125511"
                    className="flex-1 sm:flex-initial p-3.5 bg-secondary/20 hover:bg-secondary/30 text-primary rounded-full transition-colors font-body flex items-center justify-center gap-2"
                    title="Call Now"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="sm:hidden text-sm font-bold">Call Us</span>
                  </a>
                  <Link
                    href="/contact"
                    className="flex-2 sm:flex-initial bg-primary hover:bg-green-900 text-white px-6 sm:px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-green-800/30 uppercase tracking-wide text-sm font-body text-center flex items-center justify-center"
                  >
                    Book Georgia
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto w-full lg:min-h-[550px] lg:h-full order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=1000&auto=format&fit=crop"
                alt="Tbilisi Georgia"
                fill
                sizes="(max-w-1024px) 100vw, 40vw"
                className="rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg font-body font-bold text-sm text-primary flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cta" /> Tbilisi, Georgia
              </div>
            </div>
          </div>

          {/* Package 4: Philippines */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-12 shadow-xl border border-border grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch lg:items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto w-full lg:min-h-[550px] lg:h-full order-1 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1000&auto=format&fit=crop"
                alt="Palawan Philippines"
                fill
                sizes="(max-w-1024px) 100vw, 40vw"
                className="rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg font-body font-bold text-sm text-primary flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cta" /> El Nido, Palawan
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-2">
              <div className="flex flex-wrap items-center gap-3 font-body">
                <span className="bg-orange-100 text-cta font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full font-body">
                  Tropical Luxury
                </span>
                <span className="bg-green-100 text-primary font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full font-body">
                  5 Nights / 6 Days
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-primary leading-tight">
                Philippines Island Escape (Palawan & Manila)
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed font-body">
                Immerse yourself in world-renowned limestone lagoons, crystal turquoise beaches, and spectacular underwater marine life. B2B & B2C custom land operations.
              </p>
              <ul className="space-y-3 text-muted mb-8 list-disc list-inside font-body text-sm">
                <li>Premium beachside resort accommodations with breakfast</li>
                <li>Private island-hopping tours across El Nido secret lagoons</li>
                <li>Snorkeling gear, environmental fees & permits included</li>
                <li>Airport transfers in Manila and Puerto Princesa</li>
              </ul>
              <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-border font-body">
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-cta font-body">Inquire Rates</p>
                  <span className="text-3xl font-heading text-text font-bold">
                    Customized Itineraries
                  </span>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <a
                    href="tel:9925125511"
                    className="flex-1 sm:flex-initial p-3.5 bg-secondary/20 hover:bg-secondary/30 text-primary rounded-full transition-colors font-body flex items-center justify-center gap-2"
                    title="Call Now"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="sm:hidden text-sm font-bold">Call Us</span>
                  </a>
                  <Link
                    href="/contact"
                    className="flex-2 sm:flex-initial bg-cta hover:bg-orange-700 text-white px-6 sm:px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30 uppercase tracking-wide text-sm font-body text-center flex items-center justify-center"
                  >
                    Inquire Philippines
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Package 5: Bali Comfort Package (Interactive Selector) */}
          <BaliPackages />
        </div>
      </section>

      {/* How It Works */}
      <section id="how_it_works" className="py-24 bg-white font-body">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 font-body">
            <h2 className="text-5xl font-heading text-primary mb-4 leading-tight">
              Booking With Elohim Tours
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto font-body">
              Your journey from dream to reality in 4 seamless steps.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative font-body">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10"></div>

            {/* Step 1 */}
            <div className="text-center bg-white pt-4 font-body">
              <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white shadow-md font-body">
                1
              </div>
              <h3 className="text-xl font-heading text-text mb-2 font-body font-bold">Inquiry</h3>
              <p className="text-muted text-sm leading-relaxed font-body">
                Call +91 99251 25511 or submit an inquiry for Goa, Baku, Georgia, or Philippines.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center bg-white pt-4 font-body">
              <div className="w-16 h-16 mx-auto bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white shadow-md font-body">
                2
              </div>
              <h3 className="text-xl font-heading text-text mb-2 font-body font-bold">Customization</h3>
              <p className="text-muted text-sm leading-relaxed font-body">
                We confirm hotel availability, B2B/B2C rates, and customize inclusions.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center bg-white pt-4 font-body">
              <div className="w-16 h-16 mx-auto bg-cta text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white shadow-md font-body">
                3
              </div>
              <h3 className="text-xl font-heading text-text mb-2 font-body font-bold">Confirmation</h3>
              <p className="text-muted text-sm leading-relaxed font-body">
                Secure your booking with an advance deposit and receive your official travel voucher & e-visa.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center bg-white pt-4 font-body">
              <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white shadow-md font-body">
                4
              </div>
              <h3 className="text-xl font-heading text-text mb-2 font-body font-bold">Travel</h3>
              <p className="text-muted text-sm leading-relaxed font-body">
                Enjoy 24/7 on-ground assistance and private chauffeured transfers throughout your trip.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
