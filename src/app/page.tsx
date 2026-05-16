import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Map,
  ShieldCheck,
  Headset,
  Mountain,
  Waves,
  Compass,
  ChevronRight,
  Plane,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen min-h-[600px] flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed font-body"
      >
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <span className="inline-block py-1 px-4 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold tracking-wider mb-6 border border-white/30 uppercase font-body">
            PREMIER INDIAN TRAVEL AGENCY
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading text-white mb-6 text-shadow leading-none">
            Your Ultimate <br />
            <span className="text-cta font-heading">Travel</span> Experience
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto font-light font-body leading-relaxed">
            Unbeatable B2C & B2B land packages. From the sunny beaches of Goa to the vibrant streets of Baku, Tbilisi, and the Philippines—Elohim Tours crafts memories for a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center font-body">
            <Link
              href="/services"
              className="bg-cta hover:bg-orange-700 text-white text-lg px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-orange-500/30 flex items-center justify-center gap-2 uppercase tracking-wide text-sm font-body"
            >
              Explore Packages <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-lg px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center uppercase tracking-wide text-sm font-body"
            >
              Inquire / Call Us
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
          <ChevronDown className="w-10 h-10" />
        </div>
      </section>

      {/* Why Travel With Elohim Tours */}
      <section id="why_travel_with_us" className="py-24 bg-background font-body">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 font-body">
            <h2 className="text-5xl font-heading text-primary mb-4 leading-tight">Why Choose Elohim Tours?</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto font-body font-light">
              We provide flawless itineraries, premium accommodations, and round-the-clock personal assistance for complete peace of mind.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 font-body">
            {/* Feature 1 */}
            <div className="text-center group bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <Map className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading text-text mb-3">Verified Local Experts</h3>
              <p className="text-muted font-body leading-relaxed text-sm">
                Our drivers and English-speaking guides are carefully vetted to ensure safe, authentic, and seamless travel experiences.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <ShieldCheck className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading text-text mb-3">Premium Stays & Visas</h3>
              <p className="text-muted font-body leading-relaxed text-sm">
                We handle 3★ to 5★ boutique bookings and offer complete e-visa assistance so you can focus entirely on enjoying your trip.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <Headset className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading text-text mb-3">24/7 Ground Assistance</h3>
              <p className="text-muted font-body leading-relaxed text-sm">
                From airport pickups to departure transfers, our dedicated support team is available around the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="popular_destinations" className="py-24 bg-white font-body">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 font-body">
          <div className="flex justify-between items-end mb-12 font-body">
            <div>
              <span className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block font-body">
                Featured Gateways
              </span>
              <h2 className="text-5xl font-heading text-primary leading-tight">Top Destinations</h2>
            </div>
            <Link
              href="/destinations"
              className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-cta transition-colors font-body"
            >
              View All Destinations <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 font-body">
            {/* Card 1: Goa */}
            <Link href="/services" className="group relative h-96 rounded-3xl overflow-hidden block shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop"
                alt="Goa"
                fill
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 z-10 font-body">
                <span className="bg-cta text-white font-bold text-xs uppercase tracking-wider px-2.5 py-1 rounded-md mb-2 inline-block font-body">
                  ₹25,000 / couple
                </span>
                <span className="text-white/80 text-sm font-bold mb-1 block font-body">India</span>
                <h3 className="text-3xl font-heading text-white group-hover:text-cta transition-colors leading-tight">
                  Candolim, Goa
                </h3>
              </div>
            </Link>

            {/* Card 2: Baku */}
            <Link href="/services" className="group relative h-96 rounded-3xl overflow-hidden block shadow-lg lg:mt-8">
              <Image
                src="https://images.unsplash.com/photo-1583467875263-d50dec37a88c?q=80&w=800&auto=format&fit=crop"
                alt="Baku Azerbaijan"
                fill
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 z-10 font-body">
                <span className="bg-primary text-white font-bold text-xs uppercase tracking-wider px-2.5 py-1 rounded-md mb-2 inline-block font-body">
                  Premium 3N/4D
                </span>
                <span className="text-white/80 text-sm font-bold mb-1 block font-body">Azerbaijan</span>
                <h3 className="text-3xl font-heading text-white group-hover:text-cta transition-colors leading-tight">
                  Baku
                </h3>
              </div>
            </Link>

            {/* Card 3: Georgia */}
            <Link href="/services" className="group relative h-96 rounded-3xl overflow-hidden block shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=800&auto=format&fit=crop"
                alt="Georgia"
                fill
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 z-10 font-body">
                <span className="bg-secondary text-primary font-bold text-xs uppercase tracking-wider px-2.5 py-1 rounded-md mb-2 inline-block font-body">
                  Highland Stays
                </span>
                <span className="text-white/80 text-sm font-bold mb-1 block font-body">Caucasus</span>
                <h3 className="text-3xl font-heading text-white group-hover:text-cta transition-colors leading-tight">
                  Tbilisi & Kazbegi
                </h3>
              </div>
            </Link>

            {/* Card 4: Philippines */}
            <Link href="/services" className="group relative h-96 rounded-3xl overflow-hidden block shadow-lg lg:mt-8">
              <Image
                src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=800&auto=format&fit=crop"
                alt="Philippines"
                fill
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 z-10 font-body">
                <span className="bg-cta text-white font-bold text-xs uppercase tracking-wider px-2.5 py-1 rounded-md mb-2 inline-block font-body">
                  Island Hopping
                </span>
                <span className="text-white/80 text-sm font-bold mb-1 block font-body">Southeast Asia</span>
                <h3 className="text-3xl font-heading text-white group-hover:text-cta transition-colors leading-tight">
                  Palawan, Philippines
                </h3>
              </div>
            </Link>
          </div>
          <div className="mt-8 text-center md:hidden font-body">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-cta transition-colors font-body"
            >
              View All Destinations <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Adventure Styles */}
      <section id="adventure_styles" className="py-24 bg-background font-body">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 font-body">
          <div className="text-center mb-16 font-body">
            <h2 className="text-5xl font-heading text-primary mb-4 leading-tight">Holiday Themes</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto font-body font-light">
              Choose the travel experience that aligns with your holiday goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 font-body">
            {/* Theme 1 */}
            <div className="bg-white p-8 rounded-3xl border border-border card-hover flex flex-col shadow-sm hover:shadow-xl">
              <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <Waves className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading text-text mb-3 leading-snug">Beach Escapes & Resorts</h3>
              <p className="text-muted mb-6 font-body flex-grow text-sm leading-relaxed font-light">
                Unwind on white-sand beaches with luxury ocean-front resort bookings in Candolim (Goa) and El Nido (Philippines).
              </p>
              <Link
                href="/services"
                className="text-cta font-bold hover:text-orange-700 inline-flex items-center gap-1 font-body self-start uppercase tracking-wider text-xs"
              >
                View Beach Packages <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Theme 2 */}
            <div className="bg-white p-8 rounded-3xl border border-border card-hover flex flex-col shadow-sm hover:shadow-xl">
              <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading text-text mb-3 leading-snug">City Heritage Tours</h3>
              <p className="text-muted mb-6 font-body flex-grow text-sm leading-relaxed font-light">
                Explore the historic Flame Towers of Baku, the ancient bathhouses of Tbilisi, and beautiful UNESCO heritage sites across Eurasia.
              </p>
              <Link
                href="/services"
                className="text-cta font-bold hover:text-orange-700 inline-flex items-center gap-1 font-body self-start uppercase tracking-wider text-xs"
              >
                Explore City Tours <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Theme 3 */}
            <div className="bg-white p-8 rounded-3xl border border-border card-hover flex flex-col shadow-sm hover:shadow-xl">
              <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <Mountain className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading text-text mb-3 leading-snug">Scenic Highland Drives</h3>
              <p className="text-muted mb-6 font-body flex-grow text-sm leading-relaxed font-light">
                Venture into the Caucasus mountains, witness spectacular valleys, and stay in luxurious mountain chalets with private chauffeurs.
              </p>
              <Link
                href="/services"
                className="text-cta font-bold hover:text-orange-700 inline-flex items-center gap-1 font-body self-start uppercase tracking-wider text-xs"
              >
                Discover Highland Stays <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ready To Start Your Adventure */}
      <section
        id="ready_to_start_your_adventure"
        className="py-24 bg-primary relative overflow-hidden font-body"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 font-body">
          <h2 className="text-5xl md:text-6xl font-heading text-white mb-6 leading-tight">
            Ready for Your Next Vacation?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-body font-light leading-relaxed">
            Call +91 99251 25511 today to speak directly with an Elohim Tours specialist and secure special couple and group discounts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-cta hover:bg-white hover:text-cta text-white text-lg px-10 py-4 rounded-full font-bold transition-all shadow-xl inline-flex items-center gap-2 font-body uppercase tracking-wide text-sm"
            >
              Book Your Trip Now <Plane className="w-5 h-5" />
            </Link>
            <a
              href="tel:9925125511"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 text-lg px-10 py-4 rounded-full font-bold transition-all inline-flex items-center gap-2 font-body uppercase tracking-wide text-sm"
            >
              Call +91 99251 25511
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
