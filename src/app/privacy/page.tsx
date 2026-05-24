import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Elohim Tours",
  description: "Read the Privacy Policy of Elohim Tours. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Title Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary overflow-hidden font-body">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center font-body">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-bold tracking-wider mb-6 border border-white/30 uppercase">
            <Shield className="w-4 h-4 text-secondary" /> Trust & Security
          </span>
          <h1 className="text-5xl lg:text-7xl font-heading text-white mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto font-body leading-relaxed font-light">
            Last Updated: May 24, 2026. Your privacy and trust are our top priorities.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background font-body">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-border space-y-8 font-body">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-cta transition-colors text-sm mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <div className="space-y-6 text-muted font-body leading-relaxed">
              <h2 className="text-2xl font-heading text-primary border-b border-border pb-2">
                1. Information We Collect
              </h2>
              <p>
                At Elohim Tours, we collect information to provide better services to our clients. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Identification Information:</strong> Name, email address, phone number, and mailing address when you make an inquiry or book a package.
                </li>
                <li>
                  <strong>Travel Preferences & Documentation:</strong> Passport details, flight details, dietary requirements, and specific package configurations (e.g., Goa 3★/5★ packages).
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact with our website to help us improve user experience.
                </li>
              </ul>

              <h2 className="text-2xl font-heading text-primary border-b border-border pb-2 pt-4">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect in the following ways:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To arrange hotel bookings, private transfers, and excursions.</li>
                <li>To communicate with you regarding booking status, custom itineraries, and requests.</li>
                <li>To process payments securely through our approved merchants.</li>
                <li>To send occasional promotional updates or June Special deals (you can opt out at any time).</li>
              </ul>

              <h2 className="text-2xl font-heading text-primary border-b border-border pb-2 pt-4">
                3. Information Sharing and Disclosure
              </h2>
              <p>
                We do not sell, rent, or trade your personal data. We only share details with trusted third parties (DMCs, local hoteliers, and transport operators in Goa, Baku, Georgia, and the Philippines) solely to complete your holiday arrangements.
              </p>

              <h2 className="text-2xl font-heading text-primary border-b border-border pb-2 pt-4">
                4. Data Security & Retention
              </h2>
              <p>
                We implement strict security measures to protect your personal details from unauthorized access or alteration. We retain your information only as long as necessary to complete your travel contracts or comply with legal audits.
              </p>

              <h2 className="text-2xl font-heading text-primary border-b border-border pb-2 pt-4">
                5. Your Privacy Rights
              </h2>
              <p>
                You have the right to request access to the data we hold, ask for corrections, or request complete deletion of your records. For any such queries, please email us at <a href="mailto:elohimtours@mail.com" className="text-primary hover:text-cta font-bold underline">elohimtours@mail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
