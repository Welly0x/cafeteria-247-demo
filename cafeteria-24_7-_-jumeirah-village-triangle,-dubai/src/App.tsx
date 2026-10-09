/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Why247 } from './components/Why247.tsx';
import { ParathaFeature } from './components/ParathaFeature.tsx';
import { MenuSection } from './components/MenuSection.tsx';
import { StorefrontAbout } from './components/StorefrontAbout.tsx';
import { DeliveryCTA } from './components/DeliveryCTA.tsx';
import { LocationAndHours } from './components/LocationAndHours.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingMobileBar } from './components/FloatingMobileBar.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F3F4F6] flex flex-col font-sans selection:bg-[#FBBF24] selection:text-neutral-950 pb-16 lg:pb-0">
      {/* Top Header / Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with 3D product tilt */}
        <Hero />

        {/* Why 24/7 Cafeteria Pillars */}
        <Why247 />

        {/* Dedicated 24/7 Paratha Showcase */}
        <ParathaFeature />

        {/* Interactive Menu Experience with Real Dubai Cafeteria Items */}
        <MenuSection />

        {/* Real Cafeteria Storefront & JVT Culture */}
        <StorefrontAbout />

        {/* Delivery / WhatsApp CTA Banner */}
        <DeliveryCTA />

        {/* Location, Google Map & Opening Hours */}
        <LocationAndHours />
      </main>

      {/* Authentic Footer */}
      <Footer />

      {/* Mobile Sticky Quick-Action Bar */}
      <FloatingMobileBar />
    </div>
  );
}
