"use client";

import React, { useState } from "react";

export function SkyterraLogo({
  variant = "stacked",
  className = "",
}: {
  variant?: "stacked" | "inline";
  className?: string;
}) {
  if (variant === "inline") {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        <svg
          width="36"
          height="26"
          viewBox="0 0 64 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="skyGradInline" x1="12" y1="24" x2="48" y2="2" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0B3B6E" />
              <stop offset="100%" stopColor="#1B75BC" />
            </linearGradient>
            <linearGradient id="terraGradInline" x1="12" y1="42" x2="52" y2="16" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0F4452" />
              <stop offset="100%" stopColor="#2B8E7E" />
            </linearGradient>
          </defs>
          {/* Upper Sky Ribbon */}
          <path
            d="M34 2L50 2L26 22C23.5 24 20 24.2 17 22.5L12 19.5L34 2Z"
            fill="url(#skyGradInline)"
          />
          {/* Lower Terra Ribbon */}
          <path
            d="M36 15.5C38.5 13.5 42 13.3 45 15L52 19.2C53.5 20.1 53.5 21.8 52 22.8L26 42L12 42L34 24.5L28 24.5L36 15.5Z"
            fill="url(#terraGradInline)"
          />
        </svg>
        <div className="flex flex-col">
          <span className="font-heading text-[15px] font-bold tracking-[0.16em] text-[#102C46] leading-none">
            SKYTERRA
          </span>
          <span className="text-[8.5px] font-medium tracking-[0.38em] text-[#647482] leading-none mt-1">
            NUSANTARA
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {/* Exact Sky + Terra S-Chevron Mark */}
      <svg
        width="54"
        height="34"
        viewBox="0 0 64 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="skyGrad" x1="12" y1="22" x2="48" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0A396B" />
            <stop offset="100%" stopColor="#1B75BC" />
          </linearGradient>
          <linearGradient id="terraGrad" x1="12" y1="40" x2="52" y2="14" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0E4250" />
            <stop offset="100%" stopColor="#2B8E7E" />
          </linearGradient>
        </defs>
        {/* Top Blue Chevron */}
        <path
          d="M33 0H49L25.5 19.5C23 21.5 19.5 21.8 16.5 20L11.5 17L33 0Z"
          fill="url(#skyGrad)"
        />
        {/* Bottom Teal Chevron */}
        <path
          d="M35.5 13.5C38 11.5 41.5 11.2 44.5 13L51.5 17.2C53 18.1 53 19.8 51.5 20.8L25.5 40H11.5L33.5 22.5H27.5L35.5 13.5Z"
          fill="url(#terraGrad)"
        />
      </svg>

      {/* Wordmark */}
      <span className="mt-1.5 font-heading text-[16px] font-bold tracking-[0.16em] text-[#102C46] leading-none">
        SKYTERR&#923;
      </span>
      <span className="mt-1 text-[8px] font-semibold tracking-[0.42em] text-[#647482] leading-none pl-[0.42em]">
        NUSANTARA
      </span>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#F7F5EF] pt-3 pb-2">
      <div className="mx-auto px-6 sm:px-10 md:px-20 lg:px-30 xl:px-[220px]">
        <div className="flex items-end justify-between">
          {/* Left Stacked Logo */}
          <a
            href="#"
            className="shrink-0 pb-1 focus:outline-none"
            aria-label="Skyterra Nusantara Home"
          >
            <SkyterraLogo variant="stacked" />
          </a>

          {/* Right Navigation + Horizontal Rule Below */}
          <div className="flex-1 ml-6 sm:ml-10 border-b border-[#E7E3DA] pb-3.5 flex items-center justify-end gap-7 sm:gap-9">
            <nav
              aria-label="Primary Navigation"
              className="hidden sm:flex items-center gap-8"
            >
              <a
                href="#services"
                className="text-[12.5px] font-medium text-[#102C46]/80 hover:text-[#1769A6] transition-colors"
              >
                Capabilities
              </a>
              <a
                href="#workflow"
                className="text-[12.5px] font-medium text-[#102C46]/80 hover:text-[#1769A6] transition-colors"
              >
                Our approach
              </a>
            </nav>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-3 rounded-[2px] bg-[#0B3B66] px-4 py-2 text-[12px] font-medium text-[#F7F5EF] transition-colors hover:bg-[#1769A6]"
            >
              <span>Start a conversation</span>
              <span className="text-[11px] leading-none opacity-85">↗</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex sm:hidden items-center justify-center rounded-[2px] border border-[#E7E3DA] bg-[#FCFBF8] p-2 text-[#102C46]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h11" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 rounded-[3px] border border-[#E7E3DA] bg-[#FCFBF8] p-4 space-y-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-xs font-medium text-[#102C46]"
            >
              Capabilities
            </a>
            <a
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-xs font-medium text-[#102C46]"
            >
              Our approach
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-[2px] bg-[#0B3B66] px-4 py-2 text-xs font-medium text-[#F7F5EF]"
            >
              <span>Start a conversation</span>
              <span>↗</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
