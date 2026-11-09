"use client";

import React, { useState } from "react";

type SensorMode = "RGB" | "LIDAR" | "THERMAL";

const MODE_DETAILS: Record<
  SensorMode,
  {
    index: string;
    eyebrow: string;
    headline: string;
    description: string;
  }
> = {
  RGB: {
    index: "01",
    eyebrow: "01 / TRUE COLOUR",
    headline: "See the whole picture.",
    description:
      "High-resolution aerial imagery, precisely captured and stitched into a clear view of your site.",
  },
  LIDAR: {
    index: "02",
    eyebrow: "02 / ELEVATION POINT CLOUD",
    headline: "Read the ground beneath the canopy.",
    description:
      "Multi-return laser scanning penetrates dense tropical vegetation to reveal true terrain contours and drainage.",
  },
  THERMAL: {
    index: "03",
    eyebrow: "03 / RADIOMETRIC THERMAL",
    headline: "Detect surface signatures.",
    description:
      "Calibrated thermal mapping highlights moisture seepage, waterway temperature gradients, and asset heat profiles.",
  },
};

export default function HeroVisual() {
  const [mode, setMode] = useState<SensorMode>("RGB");
  const current = MODE_DETAILS[mode];

  return (
    <div className="w-full rounded-[2px] border border-[#E7E3DA] bg-[#FCFBF8] shadow-[0_1px_2px_rgba(16,44,70,0.03)]">
      {/* Top Bar: FIELD VIEW | INDONESIA / 07° 47' S, 110° 22' E   [RGB] [LIDAR] [THERMAL] */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E7E3DA] bg-[#FCFBF8] px-4 sm:px-5 py-2.5">
        <div className="flex items-center gap-2.5 text-[10px] tracking-[0.12em] text-[#647482] uppercase">
          {/* Viewfinder Target Icon */}
          <svg
            className="h-3.5 w-3.5 text-[#647482]"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            aria-hidden="true"
          >
            <path d="M2 5.5V2.5H5" />
            <path d="M11 2.5H14V5.5" />
            <path d="M14 10.5V13.5H11" />
            <path d="M5 13.5H2V10.5" />
            <circle cx="8" cy="8" r="1.2" fill="currentColor" />
          </svg>
          <span className="font-semibold text-[#102C46]/75">FIELD VIEW</span>
          <span className="h-3 w-[1px] bg-[#E7E3DA]" aria-hidden="true" />
          <span className="font-medium text-[#647482] tabular-nums">
            INDONESIA / 07° 47&apos; S, 110° 22&apos; E
          </span>
        </div>

        {/* Mode Switcher Tabs */}
        <div
          className="flex items-center gap-1"
          role="tablist"
          aria-label="Sensor View Mode"
        >
          {(["RGB", "LIDAR", "THERMAL"] as const).map((tab) => {
            const isSelected = mode === tab;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setMode(tab)}
                className={`rounded-[2px] px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#0B4374] text-white"
                    : "text-[#647482] hover:text-[#102C46]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Aerial Capture Viewport */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[971/425] bg-[#16291D] overflow-hidden select-none">
        {/* Clean Underlying Aerial Photograph */}
        <img
          src="/hero-aerial-clean.jpg"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.endsWith("/hero-aerial.jpg")) {
              target.src = "/hero-aerial.jpg";
            }
          }}
          alt="High-resolution top-down drone aerial survey of river, terraced rice fields, and tropical vegetation in Yogyakarta, Indonesia"
          className={`h-full w-full object-cover transition-all duration-500 ${
            mode === "LIDAR"
              ? "brightness-90 contrast-125 saturate-50 hue-rotate-[110deg]"
              : mode === "THERMAL"
              ? " contrast-125 saturate-150 hue-rotate-[215deg]"
              : ""
          }`}
        />

        {/* SubtleLiDAR Contour Overlay when LIDAR is selected */}
        {mode === "LIDAR" && (
          <svg
            viewBox="0 0 971 425"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-55"
            aria-hidden="true"
          >
            <g fill="none" stroke="#5EEAD4" strokeWidth="1" strokeDasharray="4 3">
              <path d="M 0 90 Q 220 140, 410 155 T 820 110" />
              <path d="M 0 165 Q 250 210, 450 225 T 920 190" />
              <path d="M 0 250 Q 260 285, 480 310 T 971 275" />
            </g>
          </svg>
        )}

        {/* Top-to-Bottom & Bottom-Left Legibility Vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,22,18,0.38) 0%, rgba(10,22,18,0.02) 26%, rgba(10,22,18,0.08) 58%, rgba(10,22,18,0.72) 100%)",
          }}
        />

        {/* Top-Left Overlay: CAPTURE PREVIEW */}
        <div className="absolute top-3.5 left-4 sm:top-4 sm:left-5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" />
          <span className="text-[9.5px] font-semibold tracking-[0.16em] text-white/90 uppercase drop-shadow-sm">
            CAPTURE PREVIEW
          </span>
        </div>

        {/* Top-Right Overlay: DJI PLATFORM / MULTI-SENSOR */}
        <div className="absolute top-3.5 right-4 sm:top-4 sm:right-5 flex items-center gap-2 text-[9.5px] font-semibold tracking-[0.16em] text-white/90 uppercase drop-shadow-sm">
          <span>DJI PLATFORM</span>
          <span className="text-white/45">/</span>
          <span>MULTI-SENSOR</span>
        </div>

        {/* Scene Callout Reticle 01 (Terrace / Vegetation edge) */}
        <div
          className="absolute flex items-center gap-1.5"
          style={{ left: "40.2%", top: "34.8%" }}
        >
          <span className="relative flex h-4 w-4 items-center justify-center rounded-full border border-[#34D399] bg-[#102C46]/40">
            <span className="h-1 w-1 rounded-full bg-[#34D399]" />
          </span>
          <span className="text-[9.5px] font-semibold text-white drop-shadow tabular-nums">
            01
          </span>
        </div>

        {/* Scene Callout Reticle 02 (Riverbank / Waterway) */}
        <div
          className="absolute flex items-center gap-1.5"
          style={{ left: "63.7%", top: "59.5%" }}
        >
          <span className="relative flex h-4 w-4 items-center justify-center rounded-full border border-[#34D399] bg-[#102C46]/40">
            <span className="h-1 w-1 rounded-full bg-[#34D399]" />
          </span>
          <span className="text-[9.5px] font-semibold text-white drop-shadow tabular-nums">
            02
          </span>
        </div>

        {/* Bottom-Left Editorial Overlay inside Image */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-md pr-4">
          <span className="block text-[9.5px] sm:text-[10px] font-semibold tracking-[0.16em] text-[#5EEAD4] uppercase">
            {current.eyebrow}
          </span>
          <h2 className="mt-1 font-heading text-2xl sm:text-[33px] font-bold tracking-tight text-white leading-[1.12]">
            {current.headline}
          </h2>
          <p className="mt-2 text-[11.5px] sm:text-[12.5px] text-white/85 leading-relaxed max-w-[365px]">
            {current.description}
          </p>
        </div>

        {/* Bottom-Right Coordinate Block inside Image */}
        <div className="hidden sm:block absolute bottom-6 right-6 border-l border-white/35 pl-3 text-left">
          <span className="block text-[8.5px] font-medium tracking-[0.16em] text-white/65 uppercase">
            YOGYAKARTA, ID
          </span>
          <span className="mt-0.5 block text-[10.5px] font-semibold tracking-[0.06em] text-white tabular-nums">
            07° 47&apos; 12.4&quot; S
          </span>
          <span className="block text-[10.5px] font-semibold tracking-[0.06em] text-white tabular-nums">
            110° 22&apos; 08.6&quot; E
          </span>
        </div>
      </div>

      {/* Bottom Bar: READING THE SCENE  • Vegetation  • Waterways  • Access roads     01 —— 03 */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E7E3DA] bg-[#FCFBF8] px-4 sm:px-5 py-2.5 text-[10.5px]">
        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
          <span className="text-[9.5px] font-semibold tracking-[0.14em] text-[#647482] uppercase">
            READING THE SCENE
          </span>
          <span className="inline-flex items-center gap-1.5 text-[#102C46]/80 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-[#258B80]" />
            Vegetation
          </span>
          <span className="inline-flex items-center gap-1.5 text-[#102C46]/80 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2B7A9B]" />
            Waterways
          </span>
          <span className="inline-flex items-center gap-1.5 text-[#102C46]/80 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C89D3C]" />
            Access roads
          </span>
        </div>

        {/* Slide Index Indicator */}
        <div className="flex items-center gap-2 text-[10.5px] tabular-nums ml-auto">
          <span className="font-bold text-[#102C46]">{current.index}</span>
          <span className="inline-block h-[1px] w-6 bg-[#D5CFC2]" aria-hidden="true" />
          <span className="font-medium text-[#647482]">03</span>
        </div>
      </div>
    </div>
  );
}
