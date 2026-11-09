"use client";

import React, { useState } from "react";

const COLOR_TOKENS = [
  {
    role: "Primary",
    name: "Warm Ivory",
    hex: "#F7F5EF",
    cssVar: "--color-primary",
    usage: "Main page background, large sections",
    darkText: true,
  },
  {
    role: "Primary surface",
    name: "Soft Porcelain",
    hex: "#FCFBF8",
    cssVar: "--color-surface",
    usage: "Cards, content panels, elevated surfaces",
    darkText: true,
  },
  {
    role: "Secondary",
    name: "Sky Blue",
    hex: "#A9C8E0",
    cssVar: "--color-blue-soft",
    usage: "Secondary highlights, icons, diagrams, subtle section accents",
    darkText: true,
  },
  {
    role: "Secondary strong",
    name: "Logo Blue",
    hex: "#1769A6",
    cssVar: "--color-blue",
    usage: "Links, active states, selected buttons, restrained emphasis",
    darkText: false,
  },
  {
    role: "Tertiary",
    name: "Sage Teal",
    hex: "#A8CEC2",
    cssVar: "--color-green-soft",
    usage: "Supporting accents, data visuals, nature/terrain references",
    darkText: true,
  },
  {
    role: "Tertiary strong",
    name: "Logo Teal",
    hex: "#258B80",
    cssVar: "--color-green",
    usage: "Secondary emphasis, charts, small graphic elements",
    darkText: false,
  },
  {
    role: "Anchor",
    name: "Deep Navy",
    hex: "#102C46",
    cssVar: "--color-navy",
    usage: "Headings, body text, navigation, footer",
    darkText: false,
  },
  {
    role: "Neutral",
    name: "Muted Slate",
    hex: "#647482",
    cssVar: "--color-text-muted",
    usage: "Secondary text, captions, metadata",
    darkText: false,
  },
  {
    role: "Border",
    name: "Warm Stone",
    hex: "#E7E3DA",
    cssVar: "--color-border",
    usage: "Dividers, card borders, subtle outlines",
    darkText: true,
  },
];

export default function DesignSystemShowcase() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 1600);
    }
  };

  return (
    <section
      id="design-system"
      className="border-b border-[#E7E3DA] bg-[#F7F5EF] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#E7E3DA]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#1769A6]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1769A6]" />
              <span>05 · Brand & Visual Foundation (v0.2 Spec)</span>
            </div>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#102C46]">
              Modern Geospatial Editorial Design System.
            </h2>
            <p className="mt-3 text-base text-[#647482] leading-relaxed">
              Anchored by Warm Ivory, Soft Porcelain, and Deep Navy, with pastel-leaning Sky Blue and Sage Teal accents derived from the Skyterra Nusantara mark.
            </p>
          </div>
          <div className="text-xs text-[#647482] tabular-nums">
            <span className="inline-block rounded-[4px] border border-[#E7E3DA] bg-[#FCFBF8] px-3.5 py-2 font-medium text-[#102C46]">
              Theme: Light-First · 70 / 15 / 10 / 5 Ratio
            </span>
          </div>
        </div>

        {/* 1. Interface Color Balance Ratio Bar */}
        <div className="mt-12 rounded-[4px] border border-[#E7E3DA] bg-[#FCFBF8] p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#102C46]">
              Target Interface Color Balance
            </span>
            <span className="text-xs text-[#647482]">
              Click any swatch below to copy its HEX token
            </span>
          </div>
          <div className="flex h-10 w-full rounded-[4px] overflow-hidden border border-[#E7E3DA] text-xs font-semibold tabular-nums">
            <div
              style={{ width: "70%" }}
              className="bg-[#F7F5EF] text-[#102C46] flex items-center justify-between px-4 border-r border-[#E7E3DA]"
            >
              <span>Warm Ivory / Porcelain</span>
              <span>70%</span>
            </div>
            <div
              style={{ width: "15%" }}
              className="bg-[#102C46] text-[#F7F5EF] flex items-center justify-center px-2"
            >
              <span>Navy 15%</span>
            </div>
            <div
              style={{ width: "10%" }}
              className="bg-[#A9C8E0] text-[#102C46] flex items-center justify-center px-1 border-r border-[#E7E3DA]"
            >
              <span>10%</span>
            </div>
            <div
              style={{ width: "5%" }}
              className="bg-[#A8CEC2] text-[#102C46] flex items-center justify-center px-1"
            >
              <span>5%</span>
            </div>
          </div>
        </div>

        {/* 2. Color Tokens Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COLOR_TOKENS.map((token) => (
            <button
              key={token.hex}
              type="button"
              onClick={() => handleCopy(token.hex)}
              className="group text-left rounded-[4px] border border-[#E7E3DA] bg-[#FCFBF8] overflow-hidden transition-colors hover:border-[#1769A6] cursor-pointer"
            >
              <div
                className="h-20 w-full px-4 py-3 flex items-end justify-between border-b border-[#E7E3DA]"
                style={{ backgroundColor: token.hex }}
              >
                <span
                  className={`text-[11px] font-medium uppercase tracking-[0.1em] ${
                    token.darkText ? "text-[#102C46]" : "text-[#FCFBF8]"
                  }`}
                >
                  {token.role}
                </span>
                <span
                  className={`rounded-[3px] px-2 py-0.5 text-xs font-mono font-semibold ${
                    token.darkText
                      ? "bg-[#FCFBF8]/90 text-[#102C46]"
                      : "bg-[#102C46]/40 text-[#FCFBF8]"
                  }`}
                >
                  {copiedHex === token.hex ? "COPIED" : token.hex}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-base font-bold text-[#102C46]">
                    {token.name}
                  </span>
                  <code className="text-[11px] text-[#647482] font-mono">
                    {token.cssVar}
                  </code>
                </div>
                <p className="mt-1.5 text-xs text-[#647482] leading-relaxed">
                  {token.usage}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* 3. Typography & Component Specimen */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Typography Specimen */}
          <div className="lg:col-span-7 rounded-[4px] border border-[#E7E3DA] bg-[#FCFBF8] p-6 sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#258B80]">
              Typography Hierarchy · Manrope + Inter
            </span>
            <div className="mt-6 space-y-5 divide-y divide-[#E7E3DA]">
              <div className="pb-4">
                <span className="text-[11px] font-medium text-[#647482]">
                  Hero Headline · Manrope Bold/Extra-Bold · Tight Line-Height
                </span>
                <p className="mt-1 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-[#102C46]">
                  Mapping the future from above.
                </p>
              </div>
              <div className="pt-4 pb-4">
                <span className="text-[11px] font-medium text-[#647482]">
                  Section Heading · Manrope Bold · Clear & Compact
                </span>
                <p className="mt-1 font-heading text-xl font-bold text-[#102C46]">
                  Precision Aerial & Hydrographic Intelligence
                </p>
              </div>
              <div className="pt-4 pb-4">
                <span className="text-[11px] font-medium text-[#647482]">
                  Body Copy · Inter Regular · Comfortable Line-Height
                </span>
                <p className="mt-1 text-sm text-[#102C46] leading-relaxed">
                  Skyterra Nusantara pairs long-endurance sensor platforms with rigorous geodetic processing to deliver actionable terrain intelligence across Indonesia.
                </p>
              </div>
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="block text-[11px] font-medium text-[#647482]">
                    Labels & Metadata · Inter Medium
                  </span>
                  <span className="mt-1 inline-block text-xs font-medium uppercase tracking-[0.14em] text-[#102C46]">
                    GEOSPATIAL · AERIAL · DIGITAL
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] font-medium text-[#647482]">
                    Technical Figures · Tabular Numerals
                  </span>
                  <span className="mt-1 inline-block text-sm font-semibold text-[#1769A6] tabular-nums">
                    01° 14&apos; 38.2&quot; S · ±1.8 cm RMSEz
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* UI Components Specimen */}
          <div className="lg:col-span-5 rounded-[4px] border border-[#E7E3DA] bg-[#FCFBF8] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1769A6]">
                UI Component Rules · Buttons & Surfaces
              </span>
              <p className="mt-2 text-xs text-[#647482] leading-relaxed">
                Simple button geometry with modest corner radius (`4px`), subtle Warm Stone borders, and restrained emphasis.
              </p>

              {/* Button States */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between gap-4 p-3 rounded-[4px] bg-[#F7F5EF] border border-[#E7E3DA]">
                  <span className="text-xs font-medium text-[#647482]">Primary Button</span>
                  <button
                    type="button"
                    className="rounded-[4px] bg-[#102C46] px-4 py-2 text-xs font-medium text-[#F7F5EF] transition-colors hover:bg-[#1769A6]"
                  >
                    Explore our capabilities
                  </button>
                </div>

                <div className="flex items-center justify-between gap-4 p-3 rounded-[4px] bg-[#F7F5EF] border border-[#E7E3DA]">
                  <span className="text-xs font-medium text-[#647482]">Secondary Button</span>
                  <button
                    type="button"
                    className="rounded-[4px] border border-[#E7E3DA] bg-[#FCFBF8] px-4 py-2 text-xs font-medium text-[#102C46] transition-colors hover:border-[#1769A6] hover:text-[#1769A6]"
                  >
                    Download Spec Sheet
                  </button>
                </div>

                <div className="flex items-center justify-between gap-4 p-3 rounded-[4px] bg-[#F7F5EF] border border-[#E7E3DA]">
                  <span className="text-xs font-medium text-[#647482]">Accent Button</span>
                  <button
                    type="button"
                    className="rounded-[4px] bg-[#1769A6] px-4 py-2 text-xs font-medium text-[#FCFBF8] transition-colors hover:bg-[#102C46]"
                  >
                    Active Layer Selected
                  </button>
                </div>
              </div>
            </div>

            {/* Brand Expression Balance Note */}
            <div className="mt-6 pt-5 border-t border-[#E7E3DA] grid grid-cols-2 gap-4">
              <div className="rounded-[4px] bg-[#F7F5EF] p-3.5 border border-[#E7E3DA]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#A9C8E0] border border-[#1769A6]" />
                  <span className="font-heading text-xs font-bold text-[#102C46]">
                    1. SKY
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-[#647482] leading-snug">
                  Aerial perspective, sensor accuracy, and forward movement.
                </p>
              </div>
              <div className="rounded-[4px] bg-[#F7F5EF] p-3.5 border border-[#E7E3DA]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#A8CEC2] border border-[#258B80]" />
                  <span className="font-heading text-xs font-bold text-[#102C46]">
                    2. TERRA
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-[#647482] leading-snug">
                  Land, infrastructure, environment, and spatial understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

