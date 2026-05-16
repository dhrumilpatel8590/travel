"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "10 Essentials for High Altitude Trekking",
    category: "Guides",
    badgeColor: "bg-primary",
    date: "Oct 24, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "Preparing for the Andes or Himalayas? Don't leave home without these critical pieces of gear that could save your life.",
  },
  {
    id: 2,
    title: "Leave No Trace: A Traveler's Responsibility",
    category: "Sustainability",
    badgeColor: "bg-secondary",
    date: "Oct 18, 2025",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "How to explore the world's most beautiful places without leaving a mark. Practical tips for eco-conscious adventurers.",
  },
  {
    id: 3,
    title: "Why Getting Lost is the Best Way to Find Yourself",
    category: "Inspiration",
    badgeColor: "bg-cta",
    date: "Oct 12, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "Sometimes the best plan is no plan at all. Stories from travelers who threw away the map and discovered something unexpected.",
  },
  {
    id: 4,
    title: "Hidden Gems of the Italian Coast",
    category: "Guides",
    badgeColor: "bg-primary",
    date: "Sep 28, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "Beyond Cinque Terre and Amalfi. Discover the quiet fishing villages and secret coves that tourists often miss.",
  },
  {
    id: 5,
    title: "The Best Lightweight Tents of 2026",
    category: "Gear",
    badgeColor: "bg-cta",
    date: "Sep 15, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "We tested the top ultralight shelters on the market. Here are our winners for durability, weight, and ease of setup.",
  },
  {
    id: 6,
    title: "Solo Travel: Why Everyone Should Try It Once",
    category: "Inspiration",
    badgeColor: "bg-secondary",
    date: "Sep 02, 2025",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800&auto=format&fit=crop",
    excerpt:
      "Building confidence, meeting new people, and the freedom to do exactly what you want. The case for traveling alone.",
  },
];

const categories = ["All Stories", "Guides", "Inspiration", "Gear", "Sustainability"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const filteredArticles =
    selectedCategory === "All Stories"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      {/* The Journal Hero */}
      <section
        id="the_journal"
        className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 bg-primary overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-6xl lg:text-8xl font-heading text-white mb-6 leading-tight">
            The Journal
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-body">
            Tales from the trail, gear guides, and inspiration for your next great escape.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 font-body font-bold">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full transition-all cursor-pointer ${
                    isActive
                      ? "bg-white text-primary shadow-lg scale-105 font-bold"
                      : "bg-white/10 text-white border border-white/30 hover:bg-white/20"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section id="articles" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted font-body">
                No articles currently found in this category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 font-body">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="blog-card bg-white rounded-2xl overflow-hidden border border-border transition-all duration-300 group cursor-pointer flex flex-col card-hover shadow-sm hover:shadow-xl"
                >
                  <div className="h-64 overflow-hidden relative w-full">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute top-4 left-4 ${article.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10`}
                    >
                      {article.category}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-sm text-muted mb-3 font-body">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-heading text-text mb-3 group-hover:text-cta transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-muted mb-6 line-clamp-3 leading-relaxed flex-grow">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center text-cta font-bold group-hover:gap-2 transition-all self-start">
                      Read Story <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-16 gap-2 font-body font-bold">
            <button
              aria-label="Previous page"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-lg bg-primary text-white font-bold flex items-center justify-center shadow-md">
              1
            </button>
            <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer">
              2
            </button>
            <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer">
              3
            </button>
            <button
              aria-label="Next page"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Join The Adventure */}
      <section id="join_the_adventure" className="py-20 border-t border-border bg-white font-body">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading text-primary mb-4 leading-tight">
            Join The Adventure
          </h2>
          <p className="text-muted mb-8 leading-relaxed max-w-xl mx-auto font-body">
            Get travel tips, destination guides, and exclusive offers delivered to your inbox.
          </p>
          {isSubscribed ? (
            <div className="bg-primary/10 border border-primary text-primary font-bold p-4 rounded-xl max-w-md mx-auto shadow-sm">
              Thank you for subscribing to our newsletter!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto font-body">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-background border border-border focus:border-cta focus:ring-1 focus:ring-cta outline-none transition-all text-text font-body"
              />
              <button
                type="submit"
                className="bg-cta hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-orange-500/30 cursor-pointer font-body"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
