"use client";

import React, { useState } from "react";

type ProjectCategory = "All" | "Airborne LiDAR" | "Coastal & Bathymetry" | "3D Digital Twin" | "Orthomosaic Survey";

interface ProjectItem {
  id: string;
  code: string;
  title: string;
  location: string;
  coordinates: string;
  category: Exclude<ProjectCategory, "All">;
  area: string;
  accuracy: string;
  deliverables: string;
  description: string;
  spanClass: string;
  aspectClass: string;
  visualType: "ikn-lidar" | "port-bathy" | "grid-corridor" | "morowali-ortho";
}

const PROJECTS: ProjectItem[] = [
  {
    id: "ikn-watershed",
    code: "PRJ-2026-01",
    title: "East Kalimantan Watershed & Corridor Bare-Earth LiDAR",
    location: "Penajam Paser Utara, East Kalimantan",
    coordinates: "00° 58' 22\" S · 116° 42' 31\" E",
    category: "Airborne LiDAR",
    area: "28,500 ha",
    accuracy: "RMSEz ±1.8 cm",
    deliverables: "Classified LAS 1.4 · 0.5m DEM/DSM · 1m Hydrological Contours",
    description:
      "Full-waveform airborne LiDAR acquisition penetrating multi-tier tropical canopy to model micro-drainage basins, flood plains, and civil earthwork corridors for arterial infrastructure.",
    spanClass: "lg:col-span-7",
    aspectClass: "aspect-[16/10]",
    visualType: "ikn-lidar",
  },
  {
    id: "priok-port",
    code: "PRJ-2026-02",
    title: "Tanjung Priok Terminal & Breakwater Bathymetric Twin",
    location: "North Jakarta & Java Sea Coastline",
    coordinates: "06° 05' 48\" S · 106° 53' 04\" E",
    category: "Coastal & Bathymetry",
    area: "142 km² Marine & Quay",
    accuracy: "IHO Special Order",
    deliverables: " Bathymetric Surface · Quay Wall 3D Mesh · Sediment Iso-Charts",
    description:
      "Integrated UAV green-laser LiDAR and multibeam echo sounder (MBES) survey linking sub-surface seabed morphology with above-water container crane and breakwater assets.",
    spanClass: "lg:col-span-5",
    aspectClass: "aspect-[4/3]",
    visualType: "port-bathy",
  },
  {
    id: "sumatra-transmission",
    code: "PRJ-2025-11",
    title: "500 kV High-Voltage Transmission Corridor & Catenary Audit",
    location: "Lahat – Muara Enim, South Sumatra",
    coordinates: "03° 19' 12\" S · 104° 28' 19\" E",
    category: "3D Digital Twin",
    area: "310 km Linear Corridor",
    accuracy: "±2.2 cm Absolute",
    deliverables: "PLS-CADD Point Cloud · Conductor Sag Model · Encroachment Vectors",
    description:
      "Long-range VTOL LiDAR and oblique photogrammetry capturing tower geometry, insulator strings, thermal conductor sag, and automated tree-fall hazard zones.",
    spanClass: "lg:col-span-5",
    aspectClass: "aspect-[4/3]",
    visualType: "grid-corridor",
  },
  {
    id: "morowali-ortho",
    code: "PRJ-2025-08",
    title: "Coastal Industrial Park True-Orthomosaic & Volumetric Audit",
    location: "Bahodopi, Central Sulawesi",
    coordinates: "02° 49' 55\" S · 122° 09' 41\" E",
    category: "Orthomosaic Survey",
    area: "11,200 ha",
    accuracy: "1.5 cm/px GSD",
    deliverables: "True-Ortho GeoTIFF · Monthly Cut/Fill Delta · Slope Stability Map",
    description:
      "High-cadence medium-format aerial photogrammetry delivering survey-grade stockpile volumetrics, haul-road gradient verification, and coastal sediment monitoring.",
    spanClass: "lg:col-span-7",
    aspectClass: "aspect-[16/10]",
    visualType: "morowali-ortho",
  },
];

function ProjectDeliverableVisual({ type }: { type: ProjectItem["visualType"] }) {
  if (type === "ikn-lidar") {
    return (
      <svg viewBox="0 0 700 438" className="h-full w-full object-cover" aria-hidden="true">
        <rect width="700" height="438" fill="#102C46" />
        {/* Subtle Coordinate Grid */}
        <g stroke="#A9C8E0" strokeOpacity="0.15" strokeWidth="0.6">
          {[70, 140, 210, 280, 350, 420, 490, 560, 630].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="438" />
          ))}
          {[73, 146, 219, 292, 365].map((y) => (
            <line key={y} x1="0" y1={y} x2="700" y2={y} />
          ))}
        </g>

        {/* Topographic Elevation Bands */}
        <path
          d="M 0 110 Q 170 65, 340 130 T 700 95 L 700 438 L 0 438 Z"
          fill="#1769A6"
          fillOpacity="0.22"
        />
        <path
          d="M 0 185 Q 190 135, 370 195 T 700 165 L 700 438 L 0 438 Z"
          fill="#258B80"
          fillOpacity="0.25"
        />
        <path
          d="M 0 265 Q 210 215, 410 275 T 700 245 L 700 438 L 0 438 Z"
          fill="#A8CEC2"
          fillOpacity="0.18"
        />

        {/* Branching Dendritic River & Watershed Network */}
        <g fill="none" strokeLinecap="round">
          <path
            d="M 40 390 C 165 345, 255 260, 390 235 C 510 212, 580 140, 675 75"
            stroke="#102C46"
            strokeWidth="22"
          />
          <path
            d="M 40 390 C 165 345, 255 260, 390 235 C 510 212, 580 140, 675 75"
            stroke="#A9C8E0"
            strokeWidth="3.5"
          />
          {/* Tributaries */}
          <path d="M 185 110 C 215 175, 240 225, 285 270" stroke="#A9C8E0" strokeWidth="1.8" strokeOpacity="0.8" />
          <path d="M 355 85 C 370 145, 380 190, 405 232" stroke="#A9C8E0" strokeWidth="1.6" strokeOpacity="0.8" />
          <path d="M 495 365 C 455 310, 430 275, 390 235" stroke="#A8CEC2" strokeWidth="1.8" strokeOpacity="0.8" />
          <path d="M 610 315 C 565 265, 540 225, 515 196" stroke="#A8CEC2" strokeWidth="1.5" strokeOpacity="0.75" />
        </g>

        {/* Fine Index Contours */}
        <g fill="none" stroke="#A8CEC2" strokeWidth="1" strokeOpacity="0.65">
          <path d="M 55 85 C 155 45, 280 95, 340 165 C 400 235, 520 155, 650 130" />
          <path d="M 35 135 C 145 95, 265 145, 330 210 C 395 275, 525 195, 665 170" />
          <path d="M 80 310 C 205 280, 315 335, 445 305 C 545 280, 610 230, 680 225" />
        </g>

        {/* LiDAR Swath Box & Metadata Callout */}
        <rect
          x="215"
          y="115"
          width="260"
          height="155"
          fill="#FCFBF8"
          fillOpacity="0.06"
          stroke="#FCFBF8"
          strokeWidth="1.2"
          strokeDasharray="6 4"
        />
        <text x="225" y="133" fill="#FCFBF8" fontSize="9.5" fontFamily="monospace">
          SUB-BASIN B4 · BARE-EARTH DTM
        </text>
        <text x="225" y="258" fill="#A8CEC2" fontSize="9" fontFamily="monospace">
          GROUND RETURNS: 38.4 pts/m² (CLASS 02)
        </text>

        {/* Elevation Color Ramp Legend */}
        <g transform="translate(24, 378)">
          <rect width="235" height="40" rx="3" fill="#102C46" fillOpacity="0.92" stroke="#A9C8E0" strokeOpacity="0.4" />
          <text x="12" y="15" fill="#FCFBF8" fontSize="8.5" fontFamily="monospace">
            ELEVATION RAMP (MSL)
          </text>
          <rect x="12" y="22" width="48" height="7" fill="#1769A6" />
          <rect x="60" y="22" width="48" height="7" fill="#258B80" />
          <rect x="108" y="22" width="48" height="7" fill="#A8CEC2" />
          <rect x="156" y="22" width="48" height="7" fill="#FCFBF8" />
          <text x="12" y="37" fill="#A9C8E0" fontSize="7.5" fontFamily="monospace">
            +12m                  +95m                 +215m
          </text>
        </g>
      </svg>
    );
  }

  if (type === "port-bathy") {
    return (
      <svg viewBox="0 0 600 450" className="h-full w-full object-cover" aria-hidden="true">
        <rect width="600" height="450" fill="#0E263D" />
        {/* Bathymetric Iso-Depth Contours */}
        <path d="M 0 0 L 600 0 L 600 280 Q 340 245, 0 320 Z" fill="#1769A6" fillOpacity="0.22" />
        <path d="M 0 0 L 600 0 L 600 210 Q 330 185, 0 250 Z" fill="#1769A6" fillOpacity="0.3" />
        <path d="M 0 0 L 600 0 L 600 135 Q 320 115, 0 175 Z" fill="#102C46" fillOpacity="0.65" />

        {/* Depth Contour Lines */}
        <path d="M 0 175 Q 320 115, 600 135" fill="none" stroke="#A9C8E0" strokeWidth="1.2" strokeDasharray="5 3" />
        <path d="M 0 250 Q 330 185, 600 210" fill="none" stroke="#A9C8E0" strokeWidth="1.2" />
        <path d="M 0 320 Q 340 245, 600 280" fill="none" stroke="#A8CEC2" strokeWidth="1.5" />

        <text x="485" y="125" fill="#A9C8E0" fontSize="9.5" fontFamily="monospace">
          DEPTH -18.5m LAT
        </text>
        <text x="485" y="198" fill="#A9C8E0" fontSize="9.5" fontFamily="monospace">
          DEPTH -14.0m LAT
        </text>
        <text x="485" y="268" fill="#A8CEC2" fontSize="9.5" fontFamily="monospace">
          DEPTH -8.5m LAT
        </text>

        {/* Engineered Port Pier & Container Terminal Geometry */}
        <g transform="translate(0, 20)">
          <polygon
            points="60,430 60,295 275,265 275,325 460,300 460,430"
            fill="#FCFBF8"
            fillOpacity="0.14"
            stroke="#FCFBF8"
            strokeWidth="1.6"
          />
          {/* Breakwater Structure */}
          <path
            d="M 45 225 L 285 190 L 410 205"
            fill="none"
            stroke="#A8CEC2"
            strokeWidth="8"
            strokeLinecap="square"
          />
          <path
            d="M 45 225 L 285 190 L 410 205"
            fill="none"
            stroke="#102C46"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          {/* Quay Crane Footprint Nodes */}
          {[100, 155, 210, 325, 385].map((x, idx) => (
            <rect
              key={x}
              x={x}
              y={idx < 3 ? 282 - idx * 5 : 318 - (idx - 3) * 5}
              width="28"
              height="22"
              fill="#258B80"
              fillOpacity="0.45"
              stroke="#FCFBF8"
              strokeWidth="1"
            />
          ))}
        </g>

        {/* Acoustic Multibeam Swath Fan */}
        <polygon
          points="335,195 255,95 435,85"
          fill="#A8CEC2"
          fillOpacity="0.18"
          stroke="#A8CEC2"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <circle cx="335" cy="195" r="4.5" fill="#FCFBF8" />
        <text x="255" y="76" fill="#FCFBF8" fontSize="9.5" fontFamily="monospace">
          MBES + GREEN LiDAR FUSION ZONE
        </text>
      </svg>
    );
  }

  if (type === "grid-corridor") {
    return (
      <svg viewBox="0 0 600 450" className="h-full w-full object-cover" aria-hidden="true">
        <rect width="600" height="450" fill="#102C46" />
        {/* Perspective Ground Grid */}
        <g stroke="#A9C8E0" strokeOpacity="0.2" strokeWidth="0.8">
          <line x1="0" y1="360" x2="600" y2="360" />
          <line x1="0" y1="310" x2="600" y2="310" />
          <line x1="0" y1="265" x2="600" y2="265" />
          <line x1="80" y1="450" x2="260" y2="230" />
          <line x1="280" y1="450" x2="310" y2="230" />
          <line x1="500" y1="450" x2="365" y2="230" />
        </g>

        {/* Vegetation Canopy Point Cloud Silhouette */}
        <path
          d="M 0 365 Q 70 315, 130 345 T 250 330 T 410 340 T 600 315 L 600 420 L 0 420 Z"
          fill="#258B80"
          fillOpacity="0.28"
          stroke="#A8CEC2"
          strokeWidth="1.2"
          strokeDasharray="2 3"
        />

        {/* Transmission Pylon 1 (Foreground Left) */}
        <g stroke="#FCFBF8" strokeWidth="1.6" fill="none">
          <polygon points="145,115 120,360 170,360" />
          <line x1="95" y1="155" x2="195" y2="155" />
          <line x1="105" y1="195" x2="185" y2="195" />
          <line x1="128" y1="260" x2="162" y2="260" />
        </g>

        {/* Transmission Pylon 2 (Midground Right) */}
        <g stroke="#FCFBF8" strokeWidth="1.4" fill="none" opacity="0.9">
          <polygon points="455,95 435,320 475,320" />
          <line x1="415" y1="130" x2="495" y2="130" />
          <line x1="422" y1="165" x2="488" y2="165" />
        </g>

        {/* Catenary Conductor Sag Curves & Clearance Buffer */}
        <path
          d="M 145 155 Q 300 255, 455 130"
          fill="none"
          stroke="#FCFBF8"
          strokeWidth="2"
        />
        <path
          d="M 145 195 Q 300 295, 455 165"
          fill="none"
          stroke="#A9C8E0"
          strokeWidth="1.5"
        />
        {/* Minimum Vertical Clearance Vector */}
        <line
          x1="292"
          y1="238"
          x2="292"
          y2="332"
          stroke="#A8CEC2"
          strokeWidth="1.8"
          strokeDasharray="4 3"
        />
        <circle cx="292" cy="238" r="4" fill="#FCFBF8" />
        <circle cx="292" cy="332" r="4" fill="#258B80" />
        <rect x="304" y="268" width="165" height="34" rx="3" fill="#FCFBF8" />
        <text x="312" y="282" fill="#102C46" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">
          CLEARANCE: 14.8m (SAFE)
        </text>
        <text x="312" y="295" fill="#647482" fontSize="8.5" fontFamily="monospace">
          MAX SAG TEMP: 75°C · PLS-CADD
        </text>
      </svg>
    );
  }

  // morowali-ortho
  return (
    <svg viewBox="0 0 700 438" className="h-full w-full object-cover" aria-hidden="true">
      <rect width="700" height="438" fill="#123047" />
      {/* Terraced Bench Contours & Cut/Fill Polygons */}
      <g stroke="#A9C8E0" strokeWidth="1" strokeOpacity="0.55" fill="none">
        <polygon points="75,85 320,65 390,175 310,295 110,275" fill="#1769A6" fillOpacity="0.2" />
        <polygon points="115,115 290,98 345,175 285,260 140,245" fill="#258B80" fillOpacity="0.24" />
        <polygon points="155,142 260,130 300,178 260,225 170,215" fill="#A8CEC2" fillOpacity="0.28" />
      </g>

      {/* Volumetric Stockpile Cells (Right Sector) */}
      <g>
        <polygon
          points="440,110 615,125 635,255 465,265"
          fill="#258B80"
          fillOpacity="0.28"
          stroke="#A8CEC2"
          strokeWidth="1.5"
        />
        <polygon
          points="475,140 585,150 598,228 490,235"
          fill="#FCFBF8"
          fillOpacity="0.16"
          stroke="#FCFBF8"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />
        <text x="452" y="98" fill="#FCFBF8" fontSize="9.5" fontFamily="monospace">
          CELL S-09 · NET FILL +68,420 m³
        </text>
      </g>

      {/* Haul Road Alignment Vector */}
      <path
        d="M 0 375 L 235 340 L 420 295 L 700 295"
        fill="none"
        stroke="#FCFBF8"
        strokeWidth="3"
      />
      <path
        d="M 0 375 L 235 340 L 420 295 L 700 295"
        fill="none"
        stroke="#1769A6"
        strokeWidth="1.5"
        strokeDasharray="8 6"
      />
      <text x="240" y="362" fill="#A9C8E0" fontSize="9.5" fontFamily="monospace">
        HAUL CORRIDOR GRADE: 6.4% · TRUE-ORTHO GSD 1.5 CM
      </text>
    </svg>
  );
}

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Airborne LiDAR",
  "Coastal & Bathymetry",
  "3D Digital Twin",
  "Orthomosaic Survey",
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="border-b border-[#E7E3DA] bg-[#F7F5EF] py-20 sm:py-28"
    >
      <div className="mx-auto px-6 sm:px-10 md:px-20 lg:px-30 xl:px-[220px]">
        {/* Section Header + Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#E7E3DA]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#1769A6]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1769A6]" />
              <span>03 · Selected Portfolio & Field Deliverables</span>
            </div>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#102C46]">
              Proven across complex Indonesian terrain.
            </h2>
            <p className="mt-3 text-base text-[#647482] leading-relaxed">
              From equatorial rainforest watersheds to high-density port terminals, our deliverables provide engineering-grade spatial certainty.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by service category">
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-[4px] px-3.5 py-2 text-xs font-medium transition-colors cursor-pointer ${
                    active
                      ? "bg-[#102C46] text-[#F7F5EF]"
                      : "bg-[#FCFBF8] text-[#102C46] border border-[#E7E3DA] hover:border-[#1769A6] hover:text-[#1769A6]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Editorial Portfolio Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`${
                selectedCategory === "All" ? project.spanClass : "lg:col-span-6"
              } group rounded-[4px] border border-[#E7E3DA] bg-[#FCFBF8] overflow-hidden flex flex-col transition-colors duration-200 hover:border-[#A9C8E0]`}
            >
              {/* Top Metadata Bar */}
              <div className="flex items-center justify-between border-b border-[#E7E3DA] px-5 py-3 text-[11px] font-medium text-[#647482] tabular-nums">
                <span className="font-semibold text-[#102C46]">{project.code}</span>
                <span>{project.coordinates}</span>
              </div>

              {/* Deliverable Visual Canvas */}
              <div className={`relative w-full ${project.aspectClass} bg-[#102C46] overflow-hidden`}>
                <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                  <ProjectDeliverableVisual type={project.visualType} />
                </div>
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="rounded-[3px] bg-[#FCFBF8]/95 px-2.5 py-1 text-[11px] font-medium text-[#102C46] border border-[#E7E3DA]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Editorial Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#258B80]">
                    <span>{project.location}</span>
                  </div>
                  <h3 className="mt-1.5 font-heading text-xl font-bold text-[#102C46] group-hover:text-[#1769A6] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#647482]">
                    {project.description}
                  </p>
                </div>

                {/* Deliverable Metrics Strip */}
                <div className="mt-6 pt-4 border-t border-[#E7E3DA] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="block text-[10px] font-medium uppercase tracking-[0.08em] text-[#647482]">
                      Coverage Scale
                    </span>
                    <span className="mt-0.5 block font-semibold text-[#102C46] tabular-nums">
                      {project.area}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-medium uppercase tracking-[0.08em] text-[#647482]">
                      Verified Accuracy
                    </span>
                    <span className="mt-0.5 block font-semibold text-[#1769A6] tabular-nums">
                      {project.accuracy}
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="block text-[10px] font-medium uppercase tracking-[0.08em] text-[#647482]">
                      Primary Output
                    </span>
                    <span className="mt-0.5 block font-medium text-[#102C46] truncate" title={project.deliverables}>
                      {project.deliverables}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

