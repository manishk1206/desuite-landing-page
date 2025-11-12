// This is your main homepage file: app/page.tsx

// Import all your sections
// Next.js and TypeScript will automatically find the .js files
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Features from '@/components/Features';
import Personas from '@/components/Personas';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    // We wrap everything in a 'main' tag
    <main className="bg-white">
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <Features />
      <Personas />
      <FinalCTA />
      <Footer />
    </main>
  );
}