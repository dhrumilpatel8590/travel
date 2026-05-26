"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Check, MapPin, Phone, Sparkles } from "lucide-react";

export default function BaliPackages() {
  const [activeTab, setActiveTab] = useState<"6n7d" | "7n8d">("6n7d");

  const packages = {
    "6n7d": {
      id: "6n7d",
      duration: "6 Nights / 7 Days",
      price: "64,999",
      badge: "June Special Deal",
      dates: ["4 June", "13 June", "26 June"],
      stays: [
        {
          area: "4N in Kuta",
          hotel: "Anathera Resort Kuta (Deluxe Room Non Balcony) or similar",
        },
        {
          area: "2N in Jimbaran",
          hotel: "Bali Paragon Resort Hotel (Deluxe Room) or similar",
        },
      ],
      itinerary: [
        { day: 1, desc: "Arrival At Bali + Garland Transfer on PVT Basis" },
        {
          day: 2,
          desc: "Full Day Water Sports Activity (Jet Ski, Parasailing and Banana Boat) followed by Uluwatu temple tour",
        },
        { day: 3, desc: "Day free for leisure" },
        {
          day: 4,
          desc: "Full Day Bedugul (Ulundanu temple) followed by Tanah Lot Temple (Sunset temple tour)",
        },
        {
          day: 5,
          desc: "Full Day Ubud Tour along with My Swing Coffee Plantation, ubud palace and ubud art market followed by Inter Hotel Transfer on PVT Basis",
        },
        { day: 6, desc: "Day free for leisure" },
        { day: 7, desc: "Departure from Bali Transfer on PVT Basis" },
      ],
      inclusions: [
        "6-night accommodation",
        "All transfers and tours on a private basis",
        "Entrance fees as per itinerary",
        "Garland welcome upon arrival",
        "Return Airfare (Non refundable)",
        "Daily Mineral Water During tour",
      ],
    },
    "7n8d": {
      id: "7n8d",
      duration: "7 Nights / 8 Days",
      price: "67,500",
      badge: "June Special Deal",
      dates: [
        "9 June",
        "12 June",
        "17 June",
        "18 June",
        "21 June",
        "25 June",
        "29 June",
        "30 June",
      ],
      stays: [
        {
          area: "4N in Kuta",
          hotel: "Anathera Resort Kuta (Deluxe Room Non Balcony) or similar",
        },
        {
          area: "3N in Jimbaran",
          hotel: "Bali Paragon Resort Hotel (Deluxe Room) or similar",
        },
      ],
      itinerary: [
        { day: 1, desc: "Arrival At Bali + Garland Transfer on PVT Basis" },
        {
          day: 2,
          desc: "Full Day Water Sports Activity (Jet Ski, Parasailing and Banana Boat) followed by Uluwatu temple tour",
        },
        { day: 3, desc: "Day free for leisure" },
        {
          day: 4,
          desc: "Full Day Bedugul (Ulundanu temple) followed by Tanah Lot Temple (Sunset temple tour)",
        },
        { day: 5, desc: "Day free for leisure" },
        {
          day: 6,
          desc: "Full Day Ubud Tour along with My Swing Coffee Plantation, ubud palace and ubud art market followed by Inter Hotel Transfer on PVT Basis",
        },
        { day: 7, desc: "Day free for leisure" },
        { day: 8, desc: "Departure from Bali Transfer on PVT Basis" },
      ],
      inclusions: [
        "7-night accommodation",
        "All transfers and tours on a private basis",
        "Entrance fees as per itinerary",
        "Garland welcome upon arrival",
        "Return Airfare (Non refundable)",
        "Daily Mineral Water During tour",
      ],
    },
  };

  const currentPkg = packages[activeTab];

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-12 shadow-xl border border-border grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch lg:items-center">
      <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
        {/* Toggle Switches */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-border">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-orange-100 text-cta font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full font-body flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-cta" /> June Special
              Departure
            </span>
            <span className="bg-blue-100 text-blue-800 font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full font-body">
              Vietjet Air ex AMD
            </span>
          </div>

          {/* Tab Selector Buttons */}
          <div className="bg-background p-1.5 rounded-2xl border border-border flex w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("6n7d")}
              className={`flex-1 sm:flex-initial px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === "6n7d"
                  ? "bg-cta text-white shadow-md scale-105"
                  : "text-muted hover:text-text bg-transparent"
              }`}
            >
              6N / 7D (₹64,999)
            </button>
            <button
              onClick={() => setActiveTab("7n8d")}
              className={`flex-1 sm:flex-initial px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === "7n8d"
                  ? "bg-cta text-white shadow-md scale-105"
                  : "text-muted hover:text-text bg-transparent"
              }`}
            >
              7N / 8D (₹67,500)
            </button>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-primary leading-tight">
          Bali Comfort Package - {currentPkg.duration}
        </h2>
        <p className="text-base sm:text-lg text-muted leading-relaxed font-body">
          Our price magic is back without compromise on quality! Experience the
          ultimate tropical retreat in Bali. Enjoy premium stays in Kuta &
          Jimbaran, return airfare from Ahmedabad, private transfers, and a
          complete itinerary.
        </p>

        {/* Stays & Departures Info Box */}
        <div className="bg-background rounded-2xl p-5 sm:p-6 border border-border space-y-4 font-body transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-sm text-text uppercase tracking-wider mb-2 text-primary font-body flex items-center gap-1.5">
                🏨 Hotel Stays (or similar)
              </h4>
              <ul className="space-y-2 text-sm text-muted">
                {currentPkg.stays.map((stay, idx) => (
                  <li key={idx}>
                    <strong className="text-text">• {stay.area}:</strong> <br />
                    {stay.hotel}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm text-text uppercase tracking-wider mb-2 text-primary font-body flex items-center gap-1.5">
                📅 Departure Dates ({currentPkg.dates.length} Options)
              </h4>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {currentPkg.dates.map((date) => (
                  <span
                    key={date}
                    className="bg-white border border-border px-2.5 py-1.5 rounded-xl text-xs font-bold shadow-sm text-primary font-body"
                  >
                    {date}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted mt-4">
                ✈️ Return airfare via{" "}
                <strong className="text-text">Vietjet Airline</strong> included
                (Non-refundable).
              </p>
            </div>
          </div>
        </div>

        {/* Inclusions & Itinerary */}
        <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-border font-body">
          <div>
            <h4 className="font-bold text-text mb-3 flex items-center gap-2 text-primary font-body">
              <Check className="w-5 h-5 text-secondary" /> Inclusions
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
            <h4 className="font-bold text-text mb-3 flex items-center gap-2 text-primary font-body">
              <Calendar className="w-5 h-5 text-secondary" /> Day-Wise Itinerary
            </h4>
            <ul className="space-y-2 text-xs text-muted font-body list-none pl-0 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
              {currentPkg.itinerary.map((step) => (
                <li key={step.day}>
                  <strong className="text-text font-bold">
                    Day {step.day}:
                  </strong>{" "}
                  {step.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-border font-body">
          <div>
            <p className="text-xs uppercase tracking-wider font-bold text-muted font-body">
              Package Price
            </p>
            <span className="text-4xl font-heading text-cta font-bold">
              INR {currentPkg.price}/-
              <span className="text-base font-body text-muted font-normal ml-2">
                per person
              </span>
            </span>
            <p className="text-[10px] text-muted mt-0.5 font-bold">
              Powered by DMC Hub | BALItrip
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
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop"
          alt="Bali Comfort Package"
          fill
          sizes="(max-w-1024px) 100vw, 40vw"
          className="rounded-2xl shadow-2xl object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg font-body font-bold text-sm text-primary flex items-center gap-2">
          <MapPin className="w-4 h-4 text-cta" /> Bali, Indonesia
        </div>
        <div className="absolute bottom-4 left-4 bg-cta/95 backdrop-blur-md text-white px-4 py-3 rounded-xl shadow-lg font-body text-xs flex flex-col gap-0.5">
          <span className="font-bold uppercase tracking-wider text-[10px]">
            Flight Included
          </span>
          <span className="font-bold text-sm">Vietjet Air ex AMD</span>
        </div>
      </div>
    </div>
  );
}
