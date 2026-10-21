"use client"

import NavigationMenu4 from "@/components/ui/navigation-menu-4"
import SculptureHero from "@/components/ui/liquid-sculpture-hero"
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer"

export default function Demo() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#FAF9F5] text-[#141413]">
      <NavigationMenu4 />
      <SculptureHero
        headlinePosition="left"
        layoutMode="split"
        className="skyc-hero"
        style={{ background: "transparent" }}
        height="calc(100svh - 64px)"
        showNav={false}
        themeToggle={false}
        showCredit={false}
        backdropText=""
        hint=""
        hintTouch=""
        loadFonts={false}
        theme="light"
        background="#FAF9F5"
        darkBackground="#141413"
        accentColor="#D97757"
        headingFont="var(--font-serif, 'Instrument Serif', Georgia, serif)"
        accentFont="var(--font-serif, 'Instrument Serif', Georgia, serif)"
        bodyFont="var(--font-sans, 'Plus Jakarta Sans', sans-serif)"
        src="./favicon.png"
        darkSrc="./favicon.png"
        mobileSrc="./favicon.png"
        mobileDarkSrc="./favicon.png"
        imageAlt="Skyc — universal media downloader"
        eyebrow="Zero-Cloud Architecture • 100% Free & Open Source"
        headline={"Save anything,\nfrom anywhere."}
        headlineAccent="from anywhere."
        body="Universal, zero-cloud media downloader for Android, Windows Desktop & CLI. Pristine multi-stream extraction from 16+ platforms with zero tracking."
        primaryCta={{ label: "Download Skyc", href: "#downloads" }}
        secondaryCta={{ label: "Try Simulator", href: "#simulator" }}
        sculptureScale={0.9}
        sculptureX={20}
        sculptureY={0}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/60 dark:bg-neutral-900/60 font-mono text-xs text-neutral-700 dark:text-neutral-300 shadow-sm w-fit">
          <span className="font-bold text-[#D97757]">$</span>
          <code>npx @elskyx/skyc</code>
        </div>
      </SculptureHero>

      {/* Stats row */}
      <div className="w-full max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-neutral-100/60 dark:bg-neutral-900/40 text-center">
          <span className="text-2xl sm:text-3xl font-bold font-mono text-[#D97757]">16+</span>
          <span className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Supported Platforms</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-neutral-100/60 dark:bg-neutral-900/40 text-center">
          <span className="text-2xl sm:text-3xl font-bold font-mono text-[#D97757]">100%</span>
          <span className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Client-Side Scrapers</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-neutral-100/60 dark:bg-neutral-900/40 text-center">
          <span className="text-2xl sm:text-3xl font-bold font-mono text-[#D97757]">0</span>
          <span className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Tracking / Cloud Logs</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-neutral-100/60 dark:bg-neutral-900/40 text-center">
          <span className="text-2xl sm:text-3xl font-bold font-mono text-[#D97757]">OTA</span>
          <span className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Hot-Patch Updates</span>
        </div>
      </div>

      <div className="w-full mt-auto">
        <HalftoneWordmarkFooter
          wordmark="skyc"
          label="Skyc Media Suite"
          meta="© 2026 Skyc · ELSKYX W/ ANTIGRAVITY · Free & Open Source (GPL-3.0)"
        />
      </div>
    </div>
  )
}
