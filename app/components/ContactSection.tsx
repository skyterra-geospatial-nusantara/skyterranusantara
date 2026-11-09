"use client";

import React, { useState } from "react";
import { SkyterraLogo } from "./Header";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [scope, setScope] = useState("Airborne LiDAR & DEM");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Light-First Contact & Project Brief Section */}
      <section
        id="contact"
        className="bg-[#FCFBF8] py-20 sm:py-28 border-b border-[#E7E3DA]"
      >
        <div className="mx-auto px-6 sm:px-10 md:px-20 lg:px-30 xl:px-[220px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Contact Details & Office Coordinates */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#258B80]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#258B80]" />
                <span>06 · Initiate a Survey Brief</span>
              </div>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#102C46]">
                Discuss your area of interest.
              </h2>
              <p className="mt-4 text-base text-[#647482] leading-relaxed">
                Share your project coordinates, target terrain area, or shapefile bounds. Our geodetic engineers will prepare a flight acquisition plan, GSD specification, and mobilization schedule within 48 hours.
              </p>

              {/* Office Locations & Telemetry */}
              <div className="mt-10 space-y-6 border-t border-[#E7E3DA] pt-8">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-sm font-bold text-[#102C46]">
                      Jakarta Headquarters & Data Processing Center
                    </span>
                    <span className="text-[11px] font-medium text-[#1769A6] tabular-nums">
                      06°13&apos;26&quot;S · 106°48&apos;52&quot;E
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[#647482]">
                    Sudirman Central Business District (SCBD), Treasury Tower Lv. 18, South Jakarta 12190, Indonesia
                  </p>
                </div>

                <div className="border-t border-[#E7E3DA] pt-6">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-sm font-bold text-[#102C46]">
                      Kalimantan Field Operations & Flight Hangar
                    </span>
                    <span className="text-[11px] font-medium text-[#258B80] tabular-nums">
                      01°15&apos;55&quot;S · 116°53&apos;40&quot;E
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[#647482]">
                    Sepinggan Geospatial Sector, Balikpapan Selatan, East Kalimantan 76115, Indonesia
                  </p>
                </div>

                <div className="border-t border-[#E7E3DA] pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block text-[11px] font-medium uppercase tracking-[0.1em] text-[#647482]">
                      Direct Engineering Desk
                    </span>
                    <a
                      href="mailto:surveys@skyterra.co.id"
                      className="mt-1 inline-block font-medium text-[#1769A6] hover:underline"
                    >
                      surveys@skyterra.co.id
                    </a>
                  </div>
                  <div>
                    <span className="block text-[11px] font-medium uppercase tracking-[0.1em] text-[#647482]">
                      Operations Dispatch
                    </span>
                    <span className="mt-1 block font-medium text-[#102C46] tabular-nums">
                      +62 (21) 5088 9420
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Structured Spatial Brief Form */}
            <div className="lg:col-span-7 rounded-[4px] border border-[#E7E3DA] bg-[#F7F5EF] p-6 sm:p-10">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#A8CEC2]/40 text-[#258B80]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-bold text-[#102C46]">
                    Survey Brief Logged
                  </h3>
                  <p className="mt-2 max-w-md mx-auto text-sm text-[#647482] leading-relaxed">
                    Thank you. Our lead photogrammetrist and flight operations team have received your parameters for{" "}
                    <span className="font-semibold text-[#102C46]">{scope}</span> and will respond shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-[4px] border border-[#E7E3DA] bg-[#FCFBF8] px-4 py-2 text-xs font-medium text-[#102C46] hover:border-[#1769A6] cursor-pointer"
                  >
                    Submit Another Area of Interest
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#E7E3DA] pb-4">
                    <span className="font-heading text-lg font-bold text-[#102C46]">
                      Technical Scope & Mobilization Request
                    </span>
                    <span className="text-xs font-medium text-[#647482] tabular-nums">
                      DATUM: SRGI 2013 / WGS84
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-[#102C46] mb-1.5"
                      >
                        Full Name & Title
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Ir. Pratama Wijaya"
                        className="w-full rounded-[4px] border border-[#E7E3DA] bg-[#FCFBF8] px-3.5 py-2.5 text-sm text-[#102C46] placeholder:text-[#647482]/60 focus:border-[#1769A6] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-xs font-medium text-[#102C46] mb-1.5"
                      >
                        Organization / Project Entity
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        required
                        placeholder="PT Nusantara Infrastruktur"
                        className="w-full rounded-[4px] border border-[#E7E3DA] bg-[#FCFBF8] px-3.5 py-2.5 text-sm text-[#102C46] placeholder:text-[#647482]/60 focus:border-[#1769A6] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-[#102C46] mb-1.5"
                      >
                        Work Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="p.wijaya@organization.co.id"
                        className="w-full rounded-[4px] border border-[#E7E3DA] bg-[#FCFBF8] px-3.5 py-2.5 text-sm text-[#102C46] placeholder:text-[#647482]/60 focus:border-[#1769A6] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="location"
                        className="block text-xs font-medium text-[#102C46] mb-1.5"
                      >
                        Site Location / Est. Area (ha or km)
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        required
                        placeholder="e.g., East Kalimantan · 4,500 ha"
                        className="w-full rounded-[4px] border border-[#E7E3DA] bg-[#FCFBF8] px-3.5 py-2.5 text-sm text-[#102C46] placeholder:text-[#647482]/60 focus:border-[#1769A6] focus:outline-none tabular-nums"
                      />
                    </div>
                  </div>

                  {/* Primary Deliverable Selector */}
                  <div>
                    <span className="block text-xs font-medium text-[#102C46] mb-2">
                      Primary Deliverable Requirement
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {[
                        "Airborne LiDAR & DEM",
                        "True-Orthomosaic",
                        "3D Digital Twin / BIM",
                        "Coastal Bathymetry",
                        "Corridor Monitoring",
                        "Enterprise WebGIS",
                      ].map((option) => {
                        const active = scope === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setScope(option)}
                            className={`rounded-[4px] px-3 py-2 text-left text-xs font-medium transition-colors cursor-pointer ${
                              active
                                ? "bg-[#1769A6] text-[#FCFBF8]"
                                : "bg-[#FCFBF8] text-[#102C46] border border-[#E7E3DA] hover:border-[#1769A6]"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-xs font-medium text-[#102C46] mb-1.5"
                    >
                      Target Accuracy, Terrain Conditions & Timeline
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      placeholder="Specify required GSD / RMSEz tolerances, canopy conditions, or KML/Shapefile availability..."
                      className="w-full rounded-[4px] border border-[#E7E3DA] bg-[#FCFBF8] px-3.5 py-2.5 text-sm text-[#102C46] placeholder:text-[#647482]/60 focus:border-[#1769A6] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <span className="text-xs text-[#647482]">
                      NDA & KML upload link provided upon initial registration.
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-[4px] bg-[#102C46] px-6 py-3 text-xs font-medium tracking-[0.04em] text-[#F7F5EF] transition-colors hover:bg-[#1769A6] cursor-pointer"
                    >
                      Submit Survey Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Deep Navy Closing Footer (Section 2 & 10.4 Anchor Specification) */}
      <footer className="bg-[#102C46] text-[#F7F5EF]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#647482]/30">
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-3">
                <div className="rounded-[4px] bg-[#FCFBF8] px-3 py-2">
                  <SkyterraLogo variant="inline" />
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm text-[#A9C8E0]/90 leading-relaxed">
                Modern geospatial technology studio delivering survey-grade aerial mapping, full-waveform LiDAR, bathymetries, and 3D spatial intelligence across the Indonesian archipelago.
              </p>
              <div className="mt-6 flex items-center gap-3 text-xs text-[#A8CEC2] tabular-nums">
                <span>GEOSPATIAL · AERIAL · DIGITAL</span>
                <span>•</span>
                <span>SRGI 2013 / ISO 19115</span>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A9C8E0]">
                Navigation
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href="#about" className="text-[#F7F5EF]/85 hover:text-[#A9C8E0] transition-colors">
                    About Skyterra
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-[#F7F5EF]/85 hover:text-[#A9C8E0] transition-colors">
                    Capabilities
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-[#F7F5EF]/85 hover:text-[#A9C8E0] transition-colors">
                    Project Portfolio
                  </a>
                </li>
                <li>
                  <a href="#workflow" className="text-[#F7F5EF]/85 hover:text-[#A9C8E0] transition-colors">
                    Technical Workflow
                  </a>
                </li>
                <li>
                  <a href="#design-system" className="text-[#F7F5EF]/85 hover:text-[#A9C8E0] transition-colors">
                    Design System v0.2
                  </a>
                </li>
              </ul>
            </div>

            {/* Core Deliverables Column */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A8CEC2]">
                Spatial Deliverables
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-[#F7F5EF]/85">
                <li>Airborne & UAV LiDAR (LAS 1.4 / DEM)</li>
                <li>True-Orthomosaic & RTK Photogrammetry</li>
                <li>3D Reality Mesh & BIM Digital Twins</li>
                <li>Near-Shore Acoustic & Laser Bathymetry</li>
                <li>High-Voltage & Pipeline Corridor Audits</li>
              </ul>
            </div>

            {/* Operational Standards Column */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A9C8E0]">
                Compliance
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs text-[#F7F5EF]/80 tabular-nums">
                <li>BIG Geodetic Standard</li>
                <li>DGCA / CASR Part 107</li>
                <li>ASPRS Positional Class I</li>
                <li>IHO S-44 Hydrography</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A9C8E0]/70">
            <p>
              © 2026 PT Skyterra Nusantara Geospasial. All rights reserved.
            </p>
            <p className="tabular-nums">
              Designed on Warm Ivory (#F7F5EF) · Deep Navy (#102C46) · Sky Blue (#A9C8E0) · Sage Teal (#A8CEC2)
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
