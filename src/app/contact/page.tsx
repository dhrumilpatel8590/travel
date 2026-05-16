"use client";

import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/SocialIcons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "General Inquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Start Your Journey Hero */}
      <section
        id="start_your_journey"
        className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary overflow-hidden font-body"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center font-body">
          <h1 className="text-6xl lg:text-8xl font-heading text-white mb-6 leading-tight">
            Start Your Journey
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-body leading-relaxed font-light">
            Have questions or ready to book your dream trip? Our team at Elohim Tours is here to help you craft the perfect holiday.
          </p>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section id="get_in_touch" className="py-24 bg-background font-body">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 font-body">
          <div className="grid lg:grid-cols-2 gap-16 font-body">
            {/* Contact Info */}
            <div className="font-body">
              <h2 className="text-5xl font-heading text-primary mb-8 leading-tight">
                Get In Touch
              </h2>
              <p className="text-lg text-muted mb-12 leading-relaxed font-body">
                We&apos;d love to hear from you. Whether you&apos;re looking to book our exclusive Goa or Baku land packages, or want a custom international itinerary, drop us a line or call us directly.
              </p>
              <div className="space-y-8 font-body">
                <div className="flex items-start gap-6 font-body">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading text-text mb-1 font-body font-bold">Visit Us</h3>
                    <p className="text-muted leading-relaxed font-body">
                      Elohim Tours Corporate HQ
                      <br />
                      C.G. Road, Ahmedabad,
                      <br />
                      Gujarat 380009, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6 font-body">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading text-text mb-1 font-body font-bold">Email Us</h3>
                    <p className="text-muted leading-relaxed font-body">
                      <a href="mailto:elohimtours@mail.com" className="hover:text-primary transition-colors">
                        elohimtours@mail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6 font-body">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading text-text mb-1 font-body font-bold">Call Us 24/7</h3>
                    <p className="text-muted leading-relaxed font-body font-bold text-primary">
                      <a href="tel:9925125511" className="hover:text-cta transition-colors">
                        +91 99251 25511
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-12 font-body">
                <h3 className="text-xl font-heading text-text mb-4 font-body">
                  Follow Our Adventures
                </h3>
                <div className="flex gap-4 font-body">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-all"
                  >
                    <InstagramIcon className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-all"
                  >
                    <FacebookIcon className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-all"
                  >
                    <TwitterIcon className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-all"
                  >
                    <YoutubeIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-border font-body self-start">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 font-body">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-3xl font-heading text-primary">Message Sent Successfully!</h3>
                  <p className="text-muted leading-relaxed font-body">
                    Thank you, {formData.firstName}. We have received your booking inquiry for &quot;
                    {formData.interest}&quot;. One of our travel experts at Elohim Tours will get back to you shortly at {formData.phone || formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        interest: "General Inquiry",
                        message: "",
                      });
                    }}
                    className="mt-6 font-bold text-cta hover:text-orange-700 underline font-body cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 font-body">
                  <div className="grid md:grid-cols-2 gap-6 font-body">
                    <div className="space-y-2 font-body">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-bold text-text uppercase tracking-wider block font-body"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Rajesh"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:bg-white outline-none focus:border-cta font-body text-text"
                      />
                    </div>
                    <div className="space-y-2 font-body">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-bold text-text uppercase tracking-wider block font-body"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Sharma"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:bg-white outline-none focus:border-cta font-body text-text"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 font-body">
                    <div className="space-y-2 font-body">
                      <label
                        htmlFor="email"
                        className="text-sm font-bold text-text uppercase tracking-wider block font-body"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rajesh@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:bg-white outline-none focus:border-cta font-body text-text"
                      />
                    </div>
                    <div className="space-y-2 font-body">
                      <label
                        htmlFor="phone"
                        className="text-sm font-bold text-text uppercase tracking-wider block font-body"
                      >
                        Mobile Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:bg-white outline-none focus:border-cta font-body text-text"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 font-body">
                    <label
                      htmlFor="interest"
                      className="text-sm font-bold text-text uppercase tracking-wider block font-body"
                    >
                      Interested In Package
                    </label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:bg-white outline-none focus:border-cta font-body text-text font-medium"
                    >
                      <option>General Inquiry</option>
                      <option>Goa 3N/4D (Land Only Package) - ₹25,000</option>
                      <option>Baku Experience 3N/4D (Premium Package)</option>
                      <option>Georgia Scenic Getaway</option>
                      <option>Philippines Tropical Escape</option>
                      <option>Custom International Itinerary</option>
                    </select>
                  </div>
                  <div className="space-y-2 font-body">
                    <label
                      htmlFor="message"
                      className="text-sm font-bold text-text uppercase tracking-wider block font-body"
                    >
                      Message / Special Requirements
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please mention exact dates, number of guests (couples/kids), and flight preference if any..."
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:bg-white outline-none focus:border-cta font-body text-text"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-cta hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-orange-500/30 text-lg cursor-pointer font-body uppercase tracking-wide"
                  >
                    Send Booking Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
