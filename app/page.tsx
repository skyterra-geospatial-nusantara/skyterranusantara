import Header from "./components/Header";
import HeroVisual from "./components/HeroVisual";
import ProjectsSection from "./components/ProjectsSection";
import WorkflowAndDataSection from "./components/WorkflowAndDataSection";
import DesignSystemShowcase from "./components/DesignSystemShowcase";
import ContactSection from "./components/ContactSection";

const CAPABILITIES = [
  {
    index: "01",
    domain: "SKY · AERIAL ACQUISITION",
    accentBg: "#A9C8E0",
    accentStroke: "#1769A6",
    title: "Airborne & UAV LiDAR Mapping",
    summary:
      "High-density, multi-return laser scanning engineered to penetrate dense equatorial vegetation and model complex bare-earth terrain.",
    specs: "Up to 180 pts/m² · Vertical RMSEz ≤ 2.0 cm · LAS 1.4 & Bare-Earth DEM",
    iconType: "lidar" as const,
  },
  {
    index: "02",
    domain: "SKY · METRIC IMAGERY",
    accentBg: "#A9C8E0",
    accentStroke: "#1769A6",
    title: "True-Orthomosaic & Photogrammetry",
    summary:
      "Radiometrically calibrated medium-format aerial photography with PPK/RTK georeferencing for zero-lean urban and industrial mapping.",
    specs: "1.5–3.0 cm/px GSD · Seamline True-Ortho · GeoTIFF & Tile Packages",
    iconType: "ortho" as const,
  },
  {
    index: "03",
    domain: "TERRA · DIGITAL REALITY",
    accentBg: "#A8CEC2",
    accentStroke: "#258B80",
    title: "3D Reality Capture & Digital Twins",
    summary:
      "Photorealistic textured 3D meshes and BIM-ready point clouds for ports, bridges, energy facilities, and urban infrastructure corridors.",
    specs: "LOD 300–350 · IFC / Revit / Cesium 3D Tiles · Millimeter Asset Inspection",
    iconType: "twin" as const,
  },
  {
    index: "04",
    domain: "TERRA · COASTAL & MARINE",
    accentBg: "#A8CEC2",
    accentStroke: "#258B80",
    title: "Bathymetric & Hydrographic Survey",
    summary:
      "Seamless land-to-sea terrain modeling combining airborne green-laser bathymetry with multibeam acoustic sounding for coastal engineering.",
    specs: "IHO S-44 Special Order · Sub-Bottom Profiling · Dredging & Shoreline Volumetrics",
    iconType: "bathy" as const,
  },
  {
    index: "05",
    domain: "TERRA · EARTHWORK & HYDROLOGY",
    accentBg: "#A8CEC2",
    accentStroke: "#258B80",
    title: "Spatial Analytics & Watershed Modeling",
    summary:
      "Surface flow simulation, flood inundation mapping, slope stability analysis, and automated cut/fill volumetric audits.",
    specs: "Sub-Basin Flow Vectors · Stockpile Cut/Fill ±0.5% · Enterprise WebGIS",
    iconType: "gis" as const,
  },
  {
    index: "06",
    domain: "SKY · LINEAR ASSETS",
    accentBg: "#A9C8E0",
    accentStroke: "#1769A6",
    title: "Infrastructure & Corridor Monitoring",
    summary:
      "Long-range BVLOS corridor surveys for high-voltage transmission lines, pipelines, railways, and forestry haul networks.",
    specs: "PLS-CADD Thermal Sag · Right-of-Way Encroachment · Multi-Epoch Change Detection",
    iconType: "corridor" as const,
  },
];

function CapabilityIcon({
  type,
  stroke,
}: {
  type: (typeof CAPABILITIES)[number]["iconType"];
  stroke: string;
}) {
  switch (type) {
    case "lidar":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.75">
          <path d="M12 3L4 9l8 6 8-6-8-6z" />
          <path d="M4 14l8 6 8-6" strokeDasharray="2 2" />
          <path d="M12 9v11" />
        </svg>
      );
    case "ortho":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.75">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
        </svg>
      );
    case "twin":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.75">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
          <path d="M3 7l9 5 9-5M12 22V12" />
        </svg>
      );
    case "bathy":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.75">
          <path d="M2 7c3-2 6 2 9 0s6-2 9 0" />
          <path d="M2 13c3-2 6 2 9 0s6-2 9 0" strokeDasharray="3 2" />
          <path d="M3 19l5-3 5 2 8-4" />
        </svg>
      );
    case "gis":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.75">
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
        </svg>
      );
    case "corridor":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.75">
          <path d="M4 19L10 5l4 8 6-9" />
          <circle cx="10" cy="5" r="2" />
          <circle cx="14" cy="13" r="2" />
          <circle cx="20" cy="4" r="2" />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#102C46]">
      {/* Sticky Light Editorial Header */}
      <Header />

      <main className="flex-1">
        {/* ================================================================
            1. HOMEPAGE HERO (Exact Match to Reference Design)
            ================================================================ */}
        <section className="relative border-b border-[#E7E3DA] bg-[#F7F5EF] pt-9 pb-14 sm:pt-11 sm:pb-20">
          <div className="mx-auto px-6 sm:px-10 md:px-20 lg:px-30 xl:px-[220px]">
            {/* Top Editorial Heading Block */}
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-[#A8CEC2]/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#258B80]" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#647482]">
                  INDEPENDENT AERIAL SURVEYING · INDONESIA
                </span>
              </div>

              {/* Two-Line Headline */}
              <h1 className="mt-4 font-heading text-[40px] sm:text-[54px] md:text-[80px] font-bold tracking-[-0.025em] leading-[1.06]">
                <span className="block text-[#102C46]">Ground truth,</span>
                <span className="block text-[#0B4374]">from above.</span>
              </h1>

              {/* Supporting Subtitle */}
              <p className="mt-4 max-w-[335px] text-[13.5px] sm:text-[14px] text-[#647482] leading-[1.55]">
                We turn the view from a drone into a better understanding of the ground beneath your feet.
              </p>
            </div>

            {/* Full-Width Interactive Field View Frame */}
            <div className="mt-8 sm:mt-9">
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* ================================================================
            2. COMPANY INTRODUCTION (Section 7 & 10.4 — Sky + Terra Balance)
            ================================================================ */}
        <section
          id="about"
          className="border-b border-[#E7E3DA] bg-[#FCFBF8] py-20 sm:py-28"
        >
          <div className="mx-auto px-6 sm:px-10 md:px-20 lg:px-30 xl:px-[220px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Editorial Statement (6 Cols) */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#1769A6]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1769A6]" />
                  <span>01 · Studio Identity & Mandate</span>
                </div>

                <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#102C46] leading-[1.15]">
                  Where aerial perspective meets grounded spatial understanding.
                </h2>

                <p className="mt-6 text-base sm:text-lg text-[#102C46] leading-relaxed font-normal">
                  Across an archipelago of volcanic ridges, dense equatorial rainforests, and dynamic coastlines, infrastructure and environmental decisions demand more than approximate maps.
                </p>

                <p className="mt-4 text-base text-[#647482] leading-relaxed">
                  Skyterra Nusantara bridges two complementary disciplines: the airborne precision of modern remote sensing and the grounded rigor of geodetic land survey. Our outputs integrate directly into civil engineering, hydrography, asset management, and national spatial data infrastructure.
                </p>

                {/* Two Pillars: Sky & Terra */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="rounded-[4px] border border-[#E7E3DA] bg-[#F7F5EF] p-5">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 font-heading text-sm font-bold text-[#102C46]">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#A9C8E0] border border-[#1769A6]" />
                        SKY · AERIAL PERSPECTIVE
                      </span>
                      <span className="text-[11px] font-mono text-[#1769A6]">01</span>
                    </div>
                    <p className="mt-2.5 text-xs text-[#647482] leading-relaxed">
                      Long-endurance UAVs, manned survey aircraft, full-waveform LiDAR, and medium-format metric cameras operating with PPK/RTK trajectory control.
                    </p>
                  </div>

                  <div className="rounded-[4px] border border-[#E7E3DA] bg-[#F7F5EF] p-5">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 font-heading text-sm font-bold text-[#102C46]">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#A8CEC2] border border-[#258B80]" />
                        TERRA · SPATIAL GROUNDING
                      </span>
                      <span className="text-[11px] font-mono text-[#258B80]">02</span>
                    </div>
                    <p className="mt-2.5 text-xs text-[#647482] leading-relaxed">
                      SRGI 2013 geodetic monumentation, bare-earth terrain modeling, bathymetric charting, and engineering-ready BIM/GIS deliverables.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Archipelago Operational Coverage Visual (6 Cols) */}
              <div className="lg:col-span-6">
                <div className="rounded-[4px] border border-[#E7E3DA] bg-[#F7F5EF] overflow-hidden">
                  <div className="flex items-center justify-between border-b border-[#E7E3DA] px-5 py-3 text-xs font-medium text-[#647482] tabular-nums">
                    <span className="font-semibold text-[#102C46]">
                      NUSANTARA GEODETIC COVERAGE · SRGI 2013
                    </span>
                    <span>UTM ZONES 46N – 54S</span>
                  </div>

                  {/* Stylized Spatial Sector Map & Cross-Section */}
                  <div className="p-5 sm:p-6 bg-[#FCFBF8]">
                    <svg
                      viewBox="0 0 560 300"
                      className="w-full h-auto rounded-[3px] border border-[#E7E3DA] bg-[#F7F5EF]"
                      role="img"
                      aria-label="Diagram of Skyterra Nusantara operational sectors across Sumatra, Java, Kalimantan, Sulawesi, and Papua"
                    >
                      {/* UTM Zone Vertical Grid Lines */}
                      {[70, 140, 210, 280, 350, 420, 490].map((x, i) => (
                        <g key={x}>
                          <line
                            x1={x}
                            y1="0"
                            x2={x}
                            y2="300"
                            stroke="#E7E3DA"
                            strokeWidth="1"
                          />
                          <text
                            x={x + 6}
                            y="18"
                            fill="#647482"
                            fontSize="8.5"
                            fontFamily="monospace"
                          >
                            UTM {47 + i}
                          </text>
                        </g>
                      ))}
                      {/* Equator Datum Line */}
                      <line
                        x1="0"
                        y1="125"
                        x2="560"
                        y2="125"
                        stroke="#1769A6"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                      <text x="12" y="118" fill="#1769A6" fontSize="8.5" fontFamily="monospace">
                        00° 00&apos; 00&quot; EQUATORIAL DATUM
                      </text>

                      {/* Stylized Archipelago Terrain Polygons */}
                      {/* Sumatra */}
                      <path
                        d="M 35 75 L 95 125 L 145 185 L 125 198 L 75 142 L 22 88 Z"
                        fill="#A8CEC2"
                        stroke="#258B80"
                        strokeWidth="1.2"
                      />
                      {/* Java */}
                      <path
                        d="M 155 212 L 268 222 L 265 236 L 150 226 Z"
                        fill="#A8CEC2"
                        stroke="#258B80"
                        strokeWidth="1.2"
                      />
                      {/* Kalimantan */}
                      <path
                        d="M 185 95 L 265 78 L 285 135 L 250 172 L 185 162 Z"
                        fill="#A9C8E0"
                        stroke="#1769A6"
                        strokeWidth="1.4"
                      />
                      {/* Sulawesi */}
                      <path
                        d="M 315 105 L 365 100 L 340 140 L 368 165 L 335 182 L 315 145 Z"
                        fill="#A8CEC2"
                        stroke="#258B80"
                        strokeWidth="1.2"
                      />
                      {/* Maluku & Papua */}
                      <path
                        d="M 435 135 L 535 145 L 545 205 L 475 195 L 430 162 Z"
                        fill="#A9C8E0"
                        stroke="#1769A6"
                        strokeWidth="1.2"
                      />

                      {/* Active Survey Sector Nodes */}
                      {[
                        { x: 105, y: 155, label: "SUM-02 (500kV Grid)" },
                        { x: 192, y: 218, label: "JKT-HQ (Priok Bathy)" },
                        { x: 258, y: 128, label: "KAL-04 (IKN LiDAR)" },
                        { x: 342, y: 152, label: "SUL-09 (Morowali)" },
                        { x: 488, y: 168, label: "PAP-01 (Highland DEM)" },
                      ].map((sector) => (
                        <g key={sector.label} transform={`translate(${sector.x}, ${sector.y})`}>
                          <circle r="8" fill="#1769A6" fillOpacity="0.2" />
                          <circle r="3.5" fill="#102C46" stroke="#FCFBF8" strokeWidth="1.2" />
                          <rect
                            x="7"
                            y="-9"
                            width="98"
                            height="15"
                            rx="2"
                            fill="#102C46"
                          />
                          <text
                            x="11"
                            y="1"
                            fill="#FCFBF8"
                            fontSize="7.5"
                            fontFamily="monospace"
                          >
                            {sector.label}
                          </text>
                        </g>
                      ))}
                    </svg>

                    {/* Bottom Telemetry Summary Row */}
                    <div className="mt-5 grid grid-cols-3 gap-4 pt-4 border-t border-[#E7E3DA] text-xs">
                      <div>
                        <span className="block text-[10px] font-medium uppercase tracking-[0.08em] text-[#647482]">
                          Active Fleet
                        </span>
                        <span className="mt-0.5 block font-semibold text-[#102C46] tabular-nums">
                          14 UAVs · 2 Manned Twins
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-medium uppercase tracking-[0.08em] text-[#647482]">
                          CORS Reference
                        </span>
                        <span className="mt-0.5 block font-semibold text-[#102C46] tabular-nums">
                          BIG INACORS Linked
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-medium uppercase tracking-[0.08em] text-[#647482]">
                          Data Turnaround
                        </span>
                        <span className="mt-0.5 block font-semibold text-[#258B80] tabular-nums">
                          72h Rapid Field QC
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            3. SERVICES & CAPABILITIES (Section 10.4 — Editorial Grid)
            ================================================================ */}
        <section
          id="services"
          className="border-b border-[#E7E3DA] bg-[#F7F5EF] py-20 sm:py-28"
        >
          <div className="mx-auto px-6 sm:px-10 md:px-20 lg:px-30 xl:px-[220px]">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#E7E3DA]">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#1769A6]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1769A6]" />
                  <span>02 · Core Services & Capabilities</span>
                </div>
                <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#102C46]">
                  Full-spectrum geospatial acquisition and modeling.
                </h2>
              </div>
              <p className="max-w-md text-sm text-[#647482] leading-relaxed">
                Structured across aerial capture (<strong className="font-semibold text-[#102C46]">Sky</strong>) and surface intelligence (<strong className="font-semibold text-[#102C46]">Terra</strong>), every capability is delivered to verifiable geodetic tolerances.
              </p>
            </div>

            {/* Structured Editorial Matrix (Clean rectangular cards on Soft Porcelain) */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap.index}
                  className="rounded-[4px] border border-[#E7E3DA] bg-[#FCFBF8] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-150 hover:border-[#1769A6]"
                >
                  <div>
                    {/* Top Row: Icon with Pastel Accent + Index */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className="inline-flex h-10 w-10 items-center justify-center rounded-[4px]"
                          style={{ backgroundColor: `${cap.accentBg}55` }}
                        >
                          <CapabilityIcon type={cap.iconType} stroke={cap.accentStroke} />
                        </span>
                        <span
                          className="text-[11px] font-semibold uppercase tracking-[0.1em]"
                          style={{ color: cap.accentStroke }}
                        >
                          {cap.domain}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-semibold text-[#647482] tabular-nums">
                        /{cap.index}
                      </span>
                    </div>

                    <h3 className="mt-6 font-heading text-xl font-bold text-[#102C46]">
                      {cap.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#647482] leading-relaxed">
                      {cap.summary}
                    </p>
                  </div>

                  {/* Deliverable Spec Footer */}
                  <div className="mt-7 pt-4 border-t border-[#E7E3DA]">
                    <span className="block text-[10px] font-medium uppercase tracking-[0.08em] text-[#647482]">
                      Deliverable Specification
                    </span>
                    <span className="mt-1 block text-xs font-semibold text-[#102C46] tabular-nums">
                      {cap.specs}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            4. PROJECTS & PORTFOLIO (Section 10.4)
            ================================================================ */}
        <ProjectsSection />

        {/* ================================================================
            5. TECHNOLOGY, WORKFLOW & DATA VISUALIZATION (Section 5 & 10.4)
            ================================================================ */}
        <WorkflowAndDataSection />

        {/* ================================================================
            6. DESIGN SYSTEM LIVING SPECIFICATION (Sections 1–9)
            ================================================================ */}
        {/* <DesignSystemShowcase /> */}

        {/* ================================================================
            7. CONTACT & DEEP NAVY CLOSING FOOTER (Section 10.4)
            ================================================================ */}
        <ContactSection />
      </main>
    </div>
  );
}
