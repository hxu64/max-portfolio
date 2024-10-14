// /components/CardTemplate.tsx
"use client";

import { useState, useRef, ReactNode } from "react";

interface CardTemplateProps {
  title: string;
  description: ReactNode;
  initialGradient: string;
  hoverGradient: string;
  children?: ReactNode;
  className?: string;
}

export function CardTemplate({
  title,
  description,
  initialGradient = "radial-gradient(circle at 50% 50%, #9b5de5, #f15bb5)",
  hoverGradient = "radial-gradient(circle at 50% 50%, #00bbf9, #0096c7)",
  children,
  className = "max-w-xs w-full h-96",
}: CardTemplateProps) {
  const [gradientPosition, setGradientPosition] = useState("50% 50%");
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Update gradient position based on mouse movement
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const { left, top, width, height } = cardRef.current.getBoundingClientRect();
      const x = ((event.clientX - left) / width) * 100;
      const y = ((event.clientY - top) / height) * 100;
      setGradientPosition(`${x}% ${y}%`);
    }
  };

  return (
    <div className={className}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="
          group relative w-full h-full rounded-md shadow-xl mx-auto overflow-hidden cursor-pointer
          border border-transparent dark:border-neutral-800
        "
      >
        {/* Default background */}
        <div
          className="
            absolute inset-0 transition-opacity duration-500
            group-hover:opacity-0
          "
          style={{
            background: `${initialGradient}`,
            backgroundPosition: gradientPosition,
          }}
        ></div>

        {/* Hover background */}
        <div
          className="
            absolute inset-0 opacity-0 transition-opacity duration-500
            group-hover:opacity-100
          "
          style={{
            background: `${hoverGradient}`,
            backgroundPosition: gradientPosition,
          }}
        ></div>

        <div className="relative z-10 flex flex-col justify-end p-4">
          <h1 className="font-bold font-sans text-xl md:text-3xl text-gray-50">
            {title}
          </h1>
          <p className="font-sans text-base text-gray-50 my-4">
            {description}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}

export function CardDemo() {
    return (
        <CardTemplate
            title="About Me"
            description={
            <>
                With over{" "}
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-yellow-500 to-red-500">
                5
                </span>{" "}
                years of experience, and after developing programs used/viewed more
                than{" "}
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-yellow-500 to-red-500">
                250,000
                </span>{" "}
                times, I'm a developer passionate about making an <em>impact</em>.
                As a passionate developer and a strong advocate for continuous learning, I strive to harness technology to create solutions that address real-world challenges. 
          Through my work, I aim to further my interests, career, and set an example for those to come.
            </>
            }
            initialGradient="radial-gradient(circle at 50% 50%, #9b5de5, #bf47ff)"
            hoverGradient="radial-gradient(circle at 50% 50%, #00bbf9, #0096c7)"
      />
      
    );
  }