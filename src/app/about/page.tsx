import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About Us | Elohim Tours",
  description:
    "Learn about Elohim Tours, our premier B2B and B2C operations across India, Azerbaijan, Georgia, and the Philippines.",
};

export default function AboutPage() {
  return (
    <>
      {/* Our Story */}
      <section
        id="our_story"
        className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary overflow-hidden font-body"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-6xl lg:text-8xl font-heading text-white mb-6 leading-tight">
            About Elohim Tours
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-body font-light leading-relaxed">
            Your trusted Indian travel partner for unforgettable domestic getaways and premium international getaways across Azerbaijan, Georgia, and the Philippines.
          </p>
        </div>
      </section>

      {/* Travel That Transforms */}
      <section id="travel_that_transforms" className="py-24 bg-background font-body">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center font-body">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500">
              <Image
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1000&auto=format&fit=crop"
                alt="Travelers in Mountains"
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block font-body">
                Our Excellence
              </span>
              <h2 className="text-5xl font-heading text-primary mb-6 leading-tight">
                Flawless Operations & Premium Comfort
              </h2>
              <p className="text-lg text-muted mb-6 font-body leading-relaxed">
                At Elohim Tours, we don&apos;t just sell tickets; we craft fully immersive holiday experiences. Whether it&apos;s a relaxing 3N/4D stay at Candolim Beach in Goa or a premium chauffeured tour of Baku&apos;s historic landmarks, our focus is absolute customer satisfaction.
              </p>
              <p className="text-lg text-muted mb-8 font-body leading-relaxed">
                We take pride in offering special B2B rates for travel agents and competitive B2C packages for families and couples, backed by 24/7 on-ground assistance.
              </p>
              <div className="grid grid-cols-2 gap-8 font-body">
                <div>
                  <h4 className="text-4xl font-heading text-secondary mb-1">15+</h4>
                  <p className="text-sm font-bold text-text font-body">Years in Travel Industry</p>
                </div>
                <div>
                  <h4 className="text-4xl font-heading text-secondary mb-1">10k+</h4>
                  <p className="text-sm font-bold text-text font-body">Delighted Guests</p>
                </div>
                <div>
                  <h4 className="text-4xl font-heading text-secondary mb-1">24/7</h4>
                  <p className="text-sm font-bold text-text font-body">Dedicated Assistance</p>
                </div>
                <div>
                  <h4 className="text-4xl font-heading text-secondary mb-1">100%</h4>
                  <p className="text-sm font-bold text-text font-body">Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Specialists */}
      <section id="destination_specialists" className="py-24 bg-white font-body">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 font-body">
          <div className="text-center mb-16 font-body">
            <h2 className="text-5xl font-heading text-primary mb-4 leading-tight">
              Our Core Destinations
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto font-body">
              We operate top-tier ground handling and premium tours across these prime locations.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 font-body">
            {/* Location 1 */}
            <div className="group bg-background p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-border">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop"
                  alt="Goa"
                  fill
                  sizes="(max-w-768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-heading text-text mb-1">Goa, India</h3>
              <p className="text-cta font-bold text-sm uppercase tracking-wider font-body">
                Domestic Escapes
              </p>
            </div>

            {/* Location 2 */}
            <div className="group bg-background p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-border">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1583467875263-d50dec37a88c?q=80&w=800&auto=format&fit=crop"
                  alt="Baku Azerbaijan"
                  fill
                  sizes="(max-w-768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-heading text-text mb-1">Baku, Azerbaijan</h3>
              <p className="text-primary font-bold text-sm uppercase tracking-wider font-body">
                Eurasia Tours
              </p>
            </div>

            {/* Location 3 */}
            <div className="group bg-background p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-border">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=800&auto=format&fit=crop"
                  alt="Tbilisi Georgia"
                  fill
                  sizes="(max-w-768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-heading text-text mb-1">Tbilisi, Georgia</h3>
              <p className="text-secondary font-bold text-sm uppercase tracking-wider font-body">
                Caucasus Highlands
              </p>
            </div>

            {/* Location 4 */}
            <div className="group bg-background p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-border">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=800&auto=format&fit=crop"
                  alt="Philippines"
                  fill
                  sizes="(max-w-768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-heading text-text mb-1">Philippines</h3>
              <p className="text-cta font-bold text-sm uppercase tracking-wider font-body">
                Island Hopping
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
