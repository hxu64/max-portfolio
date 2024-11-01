"use client"

import React, { useEffect, useRef } from 'react';

function TitleCard() {
  const layer1Ref = useRef<HTMLDivElement | null>(null);
  const layer2Ref = useRef<HTMLDivElement | null>(null);
  const layer3Ref = useRef<HTMLDivElement | null>(null);

  // Parallax effect function
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (layer1Ref.current) layer1Ref.current.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      if (layer2Ref.current) layer2Ref.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      if (layer3Ref.current) layer3Ref.current.style.transform = `translateY(${scrollPosition * 0.75}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-white/[0.96] overflow-hidden">
      {/* Background Parallax Layers */}
      <div
        ref={layer1Ref}
        className="flex items-center justify-center absolute inset-x-0 z-30 w-full"  // Increased z-index to 30
        style={{
          top: '50%',
          height: '50vh',
          backgroundImage: 'url(/images/mountain1.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Title Card Content inside layer3Ref */}
      <div
        className="p-4 max-w-7xl mx-auto relative z-20 w-full text-center" // Keep z-index at 20
        style={{ top: '-20%' }}
        ref={layer3Ref}
        >
        <h1 className="font-sans text-5xl md:text-9xl font-bold text-gray-800 z-15"> {/* Keep the bold style */}
            Max Xu <br />
        </h1>
        <h3 className="font-sans md:text-3xl font-bold text-base text-neutral-600 max-w-lg mx-auto"> {/* Added font-bold to make it bold */}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-yellow-500 to-orange-500">Fueled</span> by curiosity,
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-pink-500"> driven</span> to create.
        </h3>
        <a className="down mt-6" href="#about" data-scroll>
            <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
        </a>
    </div>


  
      <div
        ref={layer2Ref}
        className="absolute inset-0 bg-cover bg-center opacity-80 z-10" // Keep z-index at 10
        style={{
          backgroundImage: 'url(/images/mountain2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
        }}
      />
    </div>
  );
  
  
}

export default TitleCard;
