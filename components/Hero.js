'use client'; // This component uses state, so it's a client component

import { useState } from 'react';
import Header from './Header'; // We import the header here

export default function Hero() {
  return (
    <div className="bg-white">
      <Header />
      <main className="relative isolate pt-14">
        {/* Background Gradient Shape */}
        <div 
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" 
          aria-hidden="true"
        >
          <div 
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a0c4ff] to-[#4a90e2] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} 
          />
        </div>

        <div className="py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                The Stablecoin & Tokenization Layer for Oracle ERP
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Seamlessly integrate stablecoin payments, tokenized assets, and blockchain rails directly into your Oracle Financials and SCM.
                No complexity. Just compliance, speed, and liquidity.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Book Your Demo
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Download Whitepaper <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            
            {/* Hero Visual (Placeholder) */}
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center border border-gray-300">
                  <span className="text-gray-500 text-lg font-medium">[Visual: Oracle ERP → DeSuite Bridge → Global Payments]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}