"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Check, X, Phone, MapPin, Gift } from "lucide-react";

interface StayDetail {
  hotel: string;
  subtitle: string;
}

interface GoaPackage {
  duration: string;
  tagline: string;
  stays: StayDetail;
  price: string;
  priceSub: string;
  badge: string;
  inclusions: string[];
  exclusions?: string[];
  specialNotes?: string[];
}

const packages: Record<"3n4d" | "4n5d", GoaPackage> = {
  "3n4d": {
    duration: "3 Nights / 4 Days",
    tagline:
      "Perfect beachside retreat in North Goa with stays at Candolim Beach, transfers, and sightseeing tours included.",
    stays: {
      hotel: "3★ Hotel in Candolim",
      subtitle: "Standard Deluxe AC Room stay near the beach",
    },
    price: "25,000",
    priceSub: "per couple",
    badge: "Top Seller India",
    inclusions: [
      "Stay at 3*** hotel at Candolim beach",
      "Deluxe AC room for comfortable stay",
      "Daily breakfast and dinner at hotel",
      "1 Day North Goa tour by AC coach bus",
      "1 Day South Goa tour by AC coach bus",
      "Transfers from Airport / Railway station by private car",
    ],
    exclusions: [
      "Air / Railway ticketing (available extra upon request)",
      "Meals other than breakfast & dinner",
      "Personal expenses, room service & laundry",
    ],
  },
  "4n5d": {
    duration: "4 Nights / 5 Days",
    tagline:
      "Book 3 Nights & get the 4th Night FREE! Stay in a spacious ASTOR SUITE (Living room + Bedroom, 650 sq ft) with luxury inclusions.",
    stays: {
      hotel: "Astor Suites & Spa Candolim",
      subtitle: "5★ Boutique hotel - Astor Suite (650 sq ft)",
    },
    price: "32,500",
    priceSub: "per couple",
    badge: "Dhurandhar 5★ Offer",
    inclusions: [
      "Pay for 3 Nights & Get 4th Night FREE (Complimentary stay)",
      "Up to 2 Children under 12 Years complimentary sharing bed",
      "Complimentary Beer Bucket on arrival",
      "Complimentary 30-min Foot Spa for 2 (prior appointment)",
      "Complimentary Hi-Tea at designated area",
      "Complimentary hard & soft beverages, IMFL Daily from 5 to 7 PM",
      "Daily Buffet Breakfast served up to 12 PM (noon)",
      "Private Airport Transfers",
      "15% Discount on Spa, F&B, and Laundry services",
      "Free Beach Shuttle service daily from 7 AM to 7 PM",
    ],
    specialNotes: [
      "Extra Adult: ₹7,500/- per night",
      "Extra Child with bed: ₹6,000/- per night",
      "Breakfast served up to 12 PM | Shuttle from 7 to 7",
    ],
  },
};

export default function GoaPackages() {
  const [activeTab, setActiveTab] = useState<"3n4d" | "4n5d">("3n4d");
  const currentPkg = packages[activeTab];

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-12 shadow-xl border border-border grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch lg:items-center">
      <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
        {/* Header Badges & Selector */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-border">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-orange-100 text-cta font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full font-body flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-cta" /> {currentPkg.badge}
            </span>
            <span className="bg-green-100 text-primary font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full font-body">
              Candolim, North Goa
            </span>
          </div>

          {/* Toggle Buttons */}
          <div className="bg-background p-1.5 rounded-2xl border border-border flex w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("3n4d")}
              className={`flex-1 sm:flex-initial px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === "3n4d"
                  ? "bg-primary text-white shadow-md scale-105"
                  : "text-muted hover:text-text bg-transparent"
              }`}
            >
              3N / 4D (3★ Stay)
            </button>
            <button
              onClick={() => setActiveTab("4n5d")}
              className={`flex-1 sm:flex-initial px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === "4n5d"
                  ? "bg-primary text-white shadow-md scale-105"
                  : "text-muted hover:text-text bg-transparent"
              }`}
            >
              4N / 5D (5★ Boutique)
            </button>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-primary leading-tight">
          Goa Candolim Beach Getaway
        </h2>
        <p className="text-base sm:text-lg text-muted leading-relaxed font-body">
          {currentPkg.tagline}
        </p>

        {/* Accommodation Info Box */}
        <div className="bg-background rounded-2xl p-5 sm:p-6 border border-border space-y-2 font-body transition-all duration-300">
          <h4 className="font-bold text-sm text-text uppercase tracking-wider text-primary font-body flex items-center gap-1.5">
            🏨 Stay Details
          </h4>
          <p className="font-bold text-text text-lg">
            {currentPkg.stays.hotel}
          </p>
          <p className="text-sm text-muted">{currentPkg.stays.subtitle}</p>
        </div>

        {/* Inclusions & Highlights */}
        <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-border font-body">
          <div>
            <h4 className="font-bold text-text mb-3 flex items-center gap-2 text-primary font-body">
              <Check className="w-5 h-5 text-secondary" /> Package Inclusions
            </h4>
            <ul className="space-y-2 text-sm text-muted font-body">
              {currentPkg.inclusions.map((inclusion, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  ✔️ {inclusion}
                </li>
              ))}
            </ul>
          </div>

          <div>
            {currentPkg.exclusions && (
              <>
                <h4 className="font-bold text-text mb-3 flex items-center gap-2 text-red-600 font-body">
                  <X className="w-5 h-5 text-red-500" /> Exclusions
                </h4>
                <ul className="space-y-2 text-sm text-muted font-body">
                  {currentPkg.exclusions.map((exclusion, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      ❌ {exclusion}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {currentPkg.specialNotes && (
              <>
                <h4 className="font-bold text-text mb-3 flex items-center gap-2 text-cta font-body">
                  <Gift className="w-5 h-5 text-cta" /> Special Conditions
                </h4>
                <ul className="space-y-2 text-sm text-muted font-body list-disc pl-5">
                  {currentPkg.specialNotes.map((note, idx) => (
                    <li key={idx} className="text-text font-semibold">
                      {note}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Pricing and Action Row */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-border font-body">
          <div>
            <p className="text-xs uppercase tracking-wider font-bold text-muted font-body">
              Package Price
            </p>
            <span className="text-4xl font-heading text-cta font-bold">
              INR {currentPkg.price}/-
              <span className="text-base font-body text-muted font-normal ml-2">
                {currentPkg.priceSub}
              </span>
            </span>
            <p className="text-[10px] text-muted mt-0.5 font-bold">
              Offer Valid till seats last | Booking Inquiries
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
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
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Image block */}
      <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto w-full lg:min-h-[550px] lg:h-full order-1 lg:order-2">
        <Image
          src={
            activeTab === "3n4d"
              ? "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop"
              : "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=1000&auto=format&fit=crop"
          }
          alt="Goa Package Deal"
          fill
          sizes="(max-w-1024px) 100vw, 40vw"
          className="rounded-2xl shadow-2xl object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg font-body font-bold text-sm text-primary flex items-center gap-2">
          <MapPin className="w-4 h-4 text-cta" /> Candolim, Goa
        </div>
        {activeTab === "4n5d" && (
          <div className="absolute bottom-4 left-4 bg-cta/95 backdrop-blur-md text-white px-4 py-3 rounded-xl shadow-lg font-body text-xs flex flex-col gap-0.5">
            <span className="font-bold uppercase tracking-wider text-[10px]">
              Special Promo
            </span>
            <span className="font-bold text-sm">
              Pay 3 Nights, Get 4th Night Free!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
