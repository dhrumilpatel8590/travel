import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Elohim Tours",
  description: "Read the Terms of Service of Elohim Tours. Learn about our booking terms, cancellation policies, and liability clauses.",
};

export default function TermsPage() {
  return (
    <>
      {/* Title Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary overflow-hidden font-body">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center font-body">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-bold tracking-wider mb-6 border border-white/30 uppercase">
            <FileText className="w-4 h-4 text-secondary" /> Client Agreement
          </span>
          <h1 className="text-5xl lg:text-7xl font-heading text-white mb-6 leading-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto font-body leading-relaxed font-light">
            Last Updated: May 24, 2026. Please read our travel booking policies and conditions.
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
                1. Booking & Payments
              </h2>
              <p>
                By booking a holiday package with Elohim Tours, you agree to these Terms of Service. 
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All bookings require a deposit as specified at the time of reservation.</li>
                <li>Full payment must be cleared prior to delivery of travel vouchers, hotel confirmations, or flights.</li>
                <li>Rates quoted on the Web are domestic land-only rates (excluding flights) unless explicitly marked (e.g. Bali Comfort includes flights).</li>
              </ul>

              <h2 className="text-2xl font-heading text-primary border-b border-border pb-2 pt-4">
                2. Changes & Cancellations
              </h2>
              <p>
                Cancellation fees vary by destination and supplier (airlines, DMCs, hotels):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Flight tickets:</strong> Flights included in packages (e.g., Vietjet Air for Bali packages) are strictly non-refundable once booked.</li>
                <li><strong>Land Packages:</strong> Cancellations made within 30 days of travel may incur charges up to 100% of the land cost.</li>
                <li><strong>Modifications:</strong> Date changes or hotel upgrades depend entirely on current availability and local tariff differences.</li>
              </ul>

              <h2 className="text-2xl font-heading text-primary border-b border-border pb-2 pt-4">
                3. Travel Documentation & Visas
              </h2>
              <p>
                It is the sole responsibility of the traveler to ensure they hold a valid passport (minimum 6 months validity from date of entry) and appropriate tourist visas (such as Azerbaijan E-visa or visa-on-arrival permits for Georgia and the Philippines). Elohim Tours is not responsible for border denials or deportations.
              </p>

              <h2 className="text-2xl font-heading text-primary border-b border-border pb-2 pt-4">
                4. Liability Disclaimer
              </h2>
              <p>
                Elohim Tours acts as an agent between hoteliers, transport operators, and airlines. We are not liable for travel delays, natural catastrophes, strikes, accidents, or third-party negligence during the execution of your tour. We highly recommend purchase of comprehensive travel insurance.
              </p>

              <h2 className="text-2xl font-heading text-primary border-b border-border pb-2 pt-4">
                5. Governing Law
              </h2>
              <p>
                Any legal claims or disputes arising out of bookings with Elohim Tours will be governed by the laws of India and subject to the exclusive jurisdiction of courts in Surat, Gujarat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
