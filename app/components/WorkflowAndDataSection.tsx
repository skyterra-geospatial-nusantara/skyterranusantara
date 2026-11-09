"use client";

import React, { useState } from "react";

const WORKFLOW_STEPS = [
  {
    step: "01",
    code: "ACQ-SYS",
    title: "Flight Planning & Multi-Sensor Acquisition",
    subtitle: "UAV · Manned Aircraft · USV Bathymetry",
    metrics: "80% Fwd / 70% Side Overlap · Dual-Frequency GNSS",
    description:
      "Terrain-following flight trajectories engineered around local topography, cloud ceiling, and solar angles. Simultaneous capture of full-waveform LiDAR and medium-format metric imagery.",
    accentColor: "#1769A6",
    softBg: "#A9C8E0",
  },
  {
    step: "02",
    code: "GEO-CAL",
    title: "Geodetic PPK/RTK & Ground Control Network",
    subtitle: "SRGI 2013 / BIG CORS Tie-In",
    metrics: "POS IMU Post-Processing · ≤ 1.5 cm Horizontal",
    description:
      "Tightly coupled inertial and GNSS trajectory refinement anchored to Indonesia's national geodetic reference network (SRGI 2013) and monumented ground control points.",
    accentColor: "#258B80",
    softBg: "#A8CEC2",
  },
  {
    step: "03",
    code: "PRC-CLD",
    title: "Point Cloud Classification & Radiometric Ortho",
    subtitle: "Bare-Earth Extraction · 3D TIN Mesh",
    metrics: "ASPRS Class 02–06 · Seamline True-Ortho",
    description:
      "Automated and manual QA/QC point cloud filtering to separate multi-tier vegetation from true ground, paired with radiometrically balanced orthorectification.",
    accentColor: "#1769A6",
    softBg: "#A9C8E0",
  },
  {
    step: "04",
    code: "DEL-GIS",
    title: "Spatial Analytics, BIM & Enterprise GIS Delivery",
    subtitle: "OGC WebGIS · CAD/BIM · Volumetric Reports",
    metrics: "ISO 19115 Metadata · Cloud-Optimized GeoTIFF",
    description:
      "Delivery of engineering-ready spatial datasets, hydrological flow models, cut/fill earthwork audits, and interactive 3D digital twins directly into client workflows.",
    accentColor: "#258B80",
    softBg: "#A8CEC2",
  },
];

const CANOPY_BENCHMARK_DATA = [
  {
    canopyLabel: "0% (Open Terrain)",
    lidarErrorCm: 1.6,
    photogrammetryErrorCm: 2.1,
    lidarGroundPts: 142,
    photoGroundPts: 95,
  },
  {
    canopyLabel: "30% (Shrub / Scrub)",
    lidarErrorCm: 1.8,
    photogrammetryErrorCm: 4.8,
    lidarGroundPts: 108,
    photoGroundPts: 54,
  },
  {
    canopyLabel: "60% (Plantation)",
    lidarErrorCm: 2.1,
    photogrammetryErrorCm: 11.4,
    lidarGroundPts: 76,
    photoGroundPts: 22,
  },
  {
    canopyLabel: "85% (Secondary Forest)",
    lidarErrorCm: 2.4,
    photogrammetryErrorCm: 24.0,
    lidarGroundPts: 48,
    photoGroundPts: 6,
  },
  {
    canopyLabel: "95% (Tropical Canopy)",
    lidarErrorCm: 2.9,
    photogrammetryErrorCm: 38.5,
    lidarGroundPts: 32,
    photoGroundPts: 1,
  },
];

export default function WorkflowAndDataSection() {
  const [selectedMetric, setSelectedMetric] = useState<"accuracy" | "penetration">("accuracy");

  return (
    <section
      id="workflow"
      className="border-b border-[#E7E3DA] bg-[#FCFBF8] py-20 sm:py-28"
    >
      <div className="mx-auto px-6 sm:px-10 md:px-20 lg:px-30 xl:px-[220px]">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#258B80]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#258B80]" />
            <span>04 · Technology & Spatial Workflow</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#102C46]">
            From raw aerial telemetry to decision-ready spatial intelligence.
          </h2>
          <p className="mt-4 text-base text-[#647482] leading-relaxed">
            Every survey follows a rigorous four-stage geodetic pipeline. By combining calibrated airborne sensors with strict ground-truth verification, we eliminate spatial drift before analysis begins.
          </p>
        </div>

        {/* 4-Stage Sequence Diagram */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKFLOW_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="rounded-[4px] border border-[#E7E3DA] bg-[#F7F5EF] p-6 flex flex-col justify-between relative"
            >
              <div>
                {/* Top Step Indicator & Code */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E7E3DA]">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="inline-flex h-7 w-7 items-center justify-center rounded-[3px] text-xs font-bold text-[#102C46] tabular-nums"
                      style={{ backgroundColor: item.softBg }}
                    >
                      {item.step}
                    </span>
                    <span className="text-[11px] font-medium tracking-[0.1em] text-[#647482] tabular-nums">
                      {item.code}
                    </span>
                  </div>
                  {idx < WORKFLOW_STEPS.length - 1 && (
                    <span className="hidden lg:inline-block text-xs font-semibold text-[#647482]">
                      →
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-heading text-lg font-bold text-[#102C46] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-[#1769A6]">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-sm text-[#647482] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Technical Tolerance Footer */}
              <div className="mt-6 pt-3.5 border-t border-[#E7E3DA]">
                <span className="block text-[10px] font-medium uppercase tracking-[0.08em] text-[#647482]">
                  Technical Standard
                </span>
                <span className="mt-0.5 block text-xs font-semibold text-[#102C46] tabular-nums">
                  {item.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Data Visualization & Empirical Accuracy Benchmark */}
        <div className="mt-16 rounded-[4px] border border-[#E7E3DA] bg-[#F7F5EF] p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#E7E3DA]">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#1769A6]">
                <span>Empirical Sensor Benchmark · Nusantara Equatorial Trials</span>
              </div>
              <h3 className="mt-1.5 font-heading text-2xl font-bold text-[#102C46]">
                {selectedMetric === "accuracy"
                  ? "Vertical DEM Accuracy (RMSEz) Across Canopy Density"
                  : "Bare-Earth Ground Return Density (pts/m²) Under Canopy"}
              </h3>
              <p className="mt-1 text-sm text-[#647482]">
                Comparison between Multi-Return Airborne LiDAR (Logo Teal{" "}
                <span className="font-mono text-xs text-[#258B80]">#258B80</span>) and Passive Photogrammetry (Logo Blue{" "}
                <span className="font-mono text-xs text-[#1769A6]">#1769A6</span>) across Indonesian vegetation regimes.
              </p>
            </div>

            {/* Metric Toggle */}
            <div className="flex items-center gap-2 self-start lg:self-auto">
              <button
                type="button"
                onClick={() => setSelectedMetric("accuracy")}
                className={`rounded-[4px] px-3.5 py-2 text-xs font-medium transition-colors cursor-pointer ${
                  selectedMetric === "accuracy"
                    ? "bg-[#102C46] text-[#F7F5EF]"
                    : "bg-[#FCFBF8] text-[#102C46] border border-[#E7E3DA] hover:border-[#1769A6]"
                }`}
              >
                Vertical Error (RMSEz cm)
              </button>
              <button
                type="button"
                onClick={() => setSelectedMetric("penetration")}
                className={`rounded-[4px] px-3.5 py-2 text-xs font-medium transition-colors cursor-pointer ${
                  selectedMetric === "penetration"
                    ? "bg-[#102C46] text-[#F7F5EF]"
                    : "bg-[#FCFBF8] text-[#102C46] border border-[#E7E3DA] hover:border-[#1769A6]"
                }`}
              >
                Ground Return Density (pts/m²)
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* SVG Accessible Data Chart */}
            <div className="lg:col-span-8 rounded-[4px] border border-[#E7E3DA] bg-[#FCFBF8] p-4 sm:p-6">
              {/* Legend with Distinct Shapes & Line Patterns (Accessible without color alone) */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-[#E7E3DA] text-xs">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-7" viewBox="0 0 28 16">
                      <line x1="0" y1="8" x2="28" y2="8" stroke="#258B80" strokeWidth="2.5" />
                      <circle cx="14" cy="8" r="4" fill="#258B80" stroke="#FCFBF8" strokeWidth="1.5" />
                    </svg>
                    <span className="font-semibold text-[#102C46]">
                      Series A: Airborne LiDAR (Solid Line · Circle Marker)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-7" viewBox="0 0 28 16">
                      <line
                        x1="0"
                        y1="8"
                        x2="28"
                        y2="8"
                        stroke="#1769A6"
                        strokeWidth="2.2"
                        strokeDasharray="5 3"
                      />
                      <rect
                        x="10"
                        y="4"
                        width="8"
                        height="8"
                        fill="#1769A6"
                        stroke="#FCFBF8"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span className="font-semibold text-[#102C46]">
                      Series B: Aerial Photogrammetry (Dashed Line · Square Marker)
                    </span>
                  </div>
                </div>
                <span className="text-[11px] text-[#647482] tabular-nums">
                  n = 48 Checkpoints / Regime
                </span>
              </div>

              {selectedMetric === "accuracy" ? (
                <div className="w-full overflow-x-auto">
                  <svg
                    viewBox="0 0 680 280"
                    className="w-full min-w-[500px] h-auto"
                    role="img"
                    aria-label="Line chart comparing Vertical RMSEz error in centimeters between Airborne LiDAR and Photogrammetry across canopy cover from 0% to 95%"
                  >
                    {/* Horizontal Grid Lines & Y-Axis Labels (Deep Navy #102C46) */}
                    {[
                      { y: 30, label: "40 cm" },
                      { y: 80, label: "30 cm" },
                      { y: 130, label: "20 cm" },
                      { y: 180, label: "10 cm" },
                      { y: 230, label: "0 cm" },
                    ].map((row) => (
                      <g key={row.label}>
                        <line
                          x1="60"
                          y1={row.y}
                          x2="640"
                          y2={row.y}
                          stroke="#E7E3DA"
                          strokeWidth="1"
                        />
                        <text
                          x="50"
                          y={row.y + 4}
                          textAnchor="end"
                          fill="#102C46"
                          fontSize="10.5"
                          fontFamily="sans-serif"
                        >
                          {row.label}
                        </text>
                      </g>
                    ))}

                    {/* Supporting Filled Area for Photogrammetry Drift (Sky Blue #A9C8E0) */}
                    <path
                      d="M 95 219.5 L 225 206 L 355 173 L 485 110 L 615 37.5 L 615 230 L 95 230 Z"
                      fill="#A9C8E0"
                      fillOpacity="0.28"
                    />

                    {/* Supporting Filled Area for LiDAR Stability Band (Sage Teal #A8CEC2) */}
                    <path
                      d="M 95 222 L 225 221 L 355 219.5 L 485 218 L 615 215.5 L 615 230 L 95 230 Z"
                      fill="#A8CEC2"
                      fillOpacity="0.45"
                    />

                    {/* Series B: Photogrammetry Dashed Line (Logo Blue #1769A6) */}
                    <polyline
                      fill="none"
                      stroke="#1769A6"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                      points="95,219.5 225,206 355,173 485,110 615,37.5"
                    />

                    {/* Series A: Airborne LiDAR Solid Line (Logo Teal #258B80) */}
                    <polyline
                      fill="none"
                      stroke="#258B80"
                      strokeWidth="3"
                      points="95,222 225,221 355,219.5 485,218 615,215.5"
                    />

                    {/* Data Points & Direct Value Annotations */}
                    {[
                      { x: 95, label: "0% Open", lidarY: 222, lidarVal: "±1.6cm", photoY: 219.5, photoVal: "±2.1cm" },
                      { x: 225, label: "30% Scrub", lidarY: 221, lidarVal: "±1.8cm", photoY: 206, photoVal: "±4.8cm" },
                      { x: 355, label: "60% Estate", lidarY: 219.5, lidarVal: "±2.1cm", photoY: 173, photoVal: "±11.4cm" },
                      { x: 485, label: "85% Forest", lidarY: 218, lidarVal: "±2.4cm", photoY: 110, photoVal: "±24.0cm" },
                      { x: 615, label: "95% Canopy", lidarY: 215.5, lidarVal: "±2.9cm", photoY: 37.5, photoVal: "±38.5cm" },
                    ].map((pt) => (
                      <g key={pt.label}>
                        {/* X-axis tick & label */}
                        <line x1={pt.x} y1="230" x2={pt.x} y2="236" stroke="#102C46" strokeWidth="1" />
                        <text
                          x={pt.x}
                          y="254"
                          textAnchor="middle"
                          fill="#102C46"
                          fontSize="10.5"
                          fontWeight="600"
                        >
                          {pt.label}
                        </text>

                        {/* Photogrammetry Square Marker + Value */}
                        <rect
                          x={pt.x - 4.5}
                          y={pt.photoY - 4.5}
                          width="9"
                          height="9"
                          fill="#1769A6"
                          stroke="#FCFBF8"
                          strokeWidth="1.5"
                        />
                        <text
                          x={pt.x}
                          y={pt.photoY - 10}
                          textAnchor="middle"
                          fill="#1769A6"
                          fontSize="10"
                          fontWeight="700"
                        >
                          {pt.photoVal}
                        </text>

                        {/* LiDAR Circle Marker + Value */}
                        <circle
                          cx={pt.x}
                          cy={pt.lidarY}
                          r="5"
                          fill="#258B80"
                          stroke="#FCFBF8"
                          strokeWidth="1.5"
                        />
                        <text
                          x={pt.x}
                          y={pt.lidarY + 16}
                          textAnchor="middle"
                          fill="#258B80"
                          fontSize="10"
                          fontWeight="700"
                        >
                          {pt.lidarVal}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>
              ) : (
                <div className="w-full overflow-x-auto">
                  <svg
                    viewBox="0 0 680 280"
                    className="w-full min-w-[500px] h-auto"
                    role="img"
                    aria-label="Bar and line chart comparing Bare-Earth Ground Return Density in points per square meter across canopy cover"
                  >
                    {[
                      { y: 30, label: "150 pts/m²" },
                      { y: 80, label: "110 pts/m²" },
                      { y: 130, label: "75 pts/m²" },
                      { y: 180, label: "35 pts/m²" },
                      { y: 230, label: "0 pts/m²" },
                    ].map((row) => (
                      <g key={row.label}>
                        <line x1="70" y1={row.y} x2="640" y2={row.y} stroke="#E7E3DA" strokeWidth="1" />
                        <text
                          x="62"
                          y={row.y + 4}
                          textAnchor="end"
                          fill="#102C46"
                          fontSize="10"
                          fontFamily="sans-serif"
                        >
                          {row.label}
                        </text>
                      </g>
                    ))}

                    {[
                      { x: 115, label: "0% Open", lidarH: 189, lidarVal: "142", photoH: 126, photoVal: "95" },
                      { x: 235, label: "30% Scrub", lidarH: 144, lidarVal: "108", photoH: 72, photoVal: "54" },
                      { x: 355, label: "60% Estate", lidarH: 101, lidarVal: "76", photoH: 29, photoVal: "22" },
                      { x: 475, label: "85% Forest", lidarH: 64, lidarVal: "48", photoH: 8, photoVal: "6" },
                      { x: 595, label: "95% Canopy", lidarH: 43, lidarVal: "32", photoH: 2, photoVal: "1" },
                    ].map((bar) => (
                      <g key={bar.label}>
                        {/* LiDAR Bar (Logo Teal #258B80 + Sage Teal top) */}
                        <rect
                          x={bar.x - 24}
                          y={230 - bar.lidarH}
                          width="22"
                          height={bar.lidarH}
                          fill="#258B80"
                          rx="2"
                        />
                        <text
                          x={bar.x - 13}
                          y={230 - bar.lidarH - 6}
                          textAnchor="middle"
                          fill="#258B80"
                          fontSize="10"
                          fontWeight="700"
                        >
                          {bar.lidarVal}
                        </text>

                        {/* Photogrammetry Bar (Sky Blue #A9C8E0 with Logo Blue #1769A6 stroke) */}
                        <rect
                          x={bar.x + 2}
                          y={230 - bar.photoH}
                          width="22"
                          height={bar.photoH}
                          fill="#A9C8E0"
                          stroke="#1769A6"
                          strokeWidth="1.2"
                          rx="2"
                        />
                        <text
                          x={bar.x + 13}
                          y={230 - bar.photoH - 6}
                          textAnchor="middle"
                          fill="#1769A6"
                          fontSize="10"
                          fontWeight="700"
                        >
                          {bar.photoVal}
                        </text>

                        <text
                          x={bar.x}
                          y="254"
                          textAnchor="middle"
                          fill="#102C46"
                          fontSize="10.5"
                          fontWeight="600"
                        >
                          {bar.label}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>
              )}
            </div>

            {/* Right Tabular Summary & Engineering Interpretation */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-5">
              <div className="rounded-[4px] border border-[#E7E3DA] bg-[#FCFBF8] p-5">
                <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#647482]">
                  Key Engineering Finding
                </span>
                <p className="mt-2 font-heading text-lg font-bold text-[#102C46]">
                  Multi-return LiDAR maintains sub-3cm vertical precision even beneath 95% equatorial forest cover.
                </p>
                <p className="mt-2 text-xs text-[#647482] leading-relaxed">
                  While optical photogrammetry excels on exposed mining benches and coastal corridors, active laser pulses penetrate multi-layer foliage to lock onto true terrain elevation.
                </p>
              </div>

              {/* Compact Tabular Readout */}
              <div className="rounded-[4px] border border-[#E7E3DA] bg-[#FCFBF8] overflow-hidden">
                <div className="border-b border-[#E7E3DA] bg-[#F7F5EF] px-4 py-2.5 text-[11px] font-semibold text-[#102C46] flex justify-between">
                  <span>Canopy Cover</span>
                  <span>LiDAR RMSEz</span>
                  <span>Ortho RMSEz</span>
                </div>
                <div className="divide-y divide-[#E7E3DA] text-xs tabular-nums">
                  {CANOPY_BENCHMARK_DATA.map((row) => (
                    <div key={row.canopyLabel} className="px-4 py-2 flex justify-between items-center">
                      <span className="text-[#102C46] font-medium">{row.canopyLabel}</span>
                      <span className="font-semibold text-[#258B80]">±{row.lidarErrorCm.toFixed(1)} cm</span>
                      <span className="text-[#647482]">±{row.photogrammetryErrorCm.toFixed(1)} cm</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

