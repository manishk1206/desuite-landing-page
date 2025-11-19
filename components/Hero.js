'use client';

import { useState } from 'react';
import Header from './Header'; 

export default function Hero() {
  return (
    // Changed bg-white to bg-slate-50 for a softer, premium feel
    <div className="bg-slate-50 relative overflow-hidden">
      <Header />
      
      <main className="relative isolate pt-14">
        
        {/* --- DYNAMIC BACKGROUND START --- */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Blob 1: Purple/Indigo */}
            <div className="absolute top-0 left-[-10%] w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            {/* Blob 2: Cyan/Blue (Delayed) */}
            <div className="absolute top-0 right-[-10%] w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            {/* Blob 3: Pink/Purple (Delayed more) */}
            <div className="absolute -bottom-32 left-[20%] w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        {/* --- DYNAMIC BACKGROUND END --- */}

        <div className="py-24 sm:py-32 lg:py-40 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">
              
              {/* THE NEW HEADLINE */}
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
              Stablecoin & Tokenization
              </span>
             {/* The <br> now forces a clean break exactly here */}
            <br /> Layer for Oracle ERP
            </h1>
              
              {/* Description with softer text color */}
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Seamlessly integrate stablecoins, tokenized assets and blockchain rails directly into your Oracle Financials and SCM.
                No complexity. Just compliance, speed, and liquidity.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://calendly.com/desuite/demo-meeting"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  Book Your Demo
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-slate-900 flex items-center gap-1">
                  Download Whitepaper <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            
            {/* Visual Container with Glassmorphism */}
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 backdrop-blur-md bg-white/30">
                <div className="bg-white/80 h-96 rounded-lg flex items-center justify-center border border-white/50 shadow-sm">
                  <span className="text-slate-400 text-lg font-medium">[Visual: Oracle ERP ↔ DeSuite ↔ Global Chains]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}