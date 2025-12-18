'use client';

import React, { lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import Hero from '@/sections/Hero/Hero';
import About from '@/sections/About/About';

// Lazy load sections for better performance
const Services = dynamic(() => import('@/sections/Services/Services'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="loading-dots"><span></span><span></span><span></span></div></div>,
});

const Experience = dynamic(() => import('@/sections/Experience/Experience'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="loading-dots"><span></span><span></span><span></span></div></div>,
});

const Projects = dynamic(() => import('@/sections/Projects/Projects'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="loading-dots"><span></span><span></span><span></span></div></div>,
});

export default function Home() {
  return (
    <main className="relative">
      <Header />
      
      {/* Critical sections loaded immediately */}
      <Hero />
      <About />
      
      {/* Other sections lazy loaded */}
      <Suspense fallback={<div className="min-h-screen" />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-screen" />}>
        <Experience />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-screen" />}>
        <Projects />
      </Suspense>
      
      <Footer />
      <ScrollToTop />
    </main>
  );
}

