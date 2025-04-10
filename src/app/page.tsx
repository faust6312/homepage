'use client';

import MatrixRain from '../components/MatrixRain';
import PillButton from '../components/PillButton';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Matrix Digital Rain Background */}
      <MatrixRain />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 px-4 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-wider">
          <span className="text-green-400">FAUST</span>
          <span className="text-xs md:text-sm block mt-2 text-green-300 font-normal">MAKE YOUR CHOICE</span>
        </h1>
        
        {/* Pills Container */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Red Pill - Linux.do Profile */}
          <PillButton 
            color="red" 
            href="https://linux.do/u/faust6312/summary" 
            label="RED PILL" 
          />
          
          {/* Blue Pill - Blog */}
          <PillButton 
            color="blue" 
            href="https://ewww.fun" 
            label="BLUE PILL" 
          />
        </div>
        
        {/* Matrix Quote */}
        <p className="text-green-300 max-w-md mt-8 text-sm md:text-base italic">
          "You take the blue pill, the story ends. You take the red pill, you stay in Wonderland, and I show you how deep the rabbit hole goes."
        </p>
      </div>
    </main>
  );
}
