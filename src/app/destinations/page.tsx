"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const destinations = [
  {
    id: "goa",
    title: "Candolim, Goa",
    region: "India",
    priceTag: "₹25,000 / couple",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop",
    description:
      "Stunning beaches, watersports, and lively coastal culture in North and South Goa.",
  },
  {
    id: "baku",
    title: "Baku",
    region: "Eurasia",
    priceTag: "Premium Land Package",
    image:
      "https://images.unsplash.com/photo-1583467875263-d50dec37a88c?q=80&w=800&auto=format&fit=crop",
    description:
      "Discover the iconic Flame Towers, Mud Volcanoes, Gobustan, and modern architectural marvels.",
  },
  {
    id: "tbilisi",
    title: "Tbilisi & Kazbegi",
    region: "Caucasus",
    priceTag: "Highland Escapes",
    image:
      "https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=800&auto=format&fit=crop",
    description:
      "Breathtaking snow-capped peaks, historic monasteries, and world-famous Georgian hospitality.",
  },
  {
    id: "palawan",
    title: "Palawan, Philippines",
    region: "Southeast Asia",
    priceTag: "Tropical Luxury",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=800&auto=format&fit=crop",
    description:
      "Limestone cliffs, emerald lagoons, and spectacular island-hopping in El Nido.",
  },
  {
    id: "bali",
    title: "Bali Comfort Package",
    region: "Southeast Asia",
    priceTag: "₹59,999 / person",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    description:
      "6N/7D Comfort Package with Vietjet Return Flight ex Ahmedabad. Stays at premium resorts in Kuta & Jimbaran, private tours, and complete itinerary included.",
  },
  {
    id: "swiss-alps",
    title: "Swiss Alps",
    region: "Europe",
    priceTag: "Alpine Adventure",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    description:
      "Classic mountaineering and scenic train rides through the heart of Europe.",
  },
];

const categories = ["All", "India", "Eurasia", "Caucasus", "Southeast Asia", "Europe"];

export default function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDestinations =
    selectedCategory === "All"
      ? destinations
      : destinations.filter((d) => d.region === selectedCategory);

  return (
    <>
      {/* Featured Gateways */}
      <section
        id="the_world_awaits"
        className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary overflow-hidden font-body"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center font-body">
          <h1 className="text-6xl lg:text-8xl font-heading text-white mb-6 leading-tight">
            Our Featured Destinations
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-body font-light">
            Explore our expertly curated domestic and international getaways. Special B2B and B2C operations tailored for Indian travelers.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 font-body font-bold">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full transition-all cursor-pointer text-sm uppercase tracking-wider ${
                    isActive
                      ? "bg-white text-primary shadow-lg scale-105 font-bold"
                      : "bg-white/10 text-white border border-white/30 hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destination Grid */}
      <section id="destinations" className="py-24 bg-background font-body">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 font-body">
          {filteredDestinations.length === 0 ? (
            <div className="text-center py-12 font-body">
              <p className="text-xl text-muted font-body">
                No expeditions currently scheduled for this region. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 font-body">
              {filteredDestinations.map((dest) => (
                <Link
                  key={dest.id}
                  href="/services"
                  className="destination-card group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer block card-hover shadow-lg border border-border"
                >
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full z-10 font-body">
                    <span className="bg-cta text-white font-bold text-xs uppercase tracking-wider px-2.5 py-1 rounded-md mb-3 inline-block font-body">
                      {dest.priceTag}
                    </span>
                    <span className="text-white/80 tracking-wider text-xs uppercase mb-1 block font-body font-bold">
                      {dest.region}
                    </span>
                    <h3 className="text-4xl font-heading text-white mb-2 leading-tight">
                      {dest.title}
                    </h3>
                    <p className="text-gray-200 line-clamp-2 mb-4 font-body leading-relaxed text-sm font-light">
                      {dest.description}
                    </p>
                    <span className="text-white font-bold border-b border-cta inline-block pb-1 group-hover:text-cta transition-colors font-body text-sm uppercase tracking-wide">
                      View Package Details
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
