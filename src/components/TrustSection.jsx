import React, { useRef, useState } from "react";

export default function TrustSection() {
  const imageRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleTilt = (e) => {
    const el = imageRef.current;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    const rotateX = -y * 90; // up to 90 degrees vertically
    const rotateY = x * 90;  // up to 90 degrees horizontally
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    imageRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  const points = [
    "Trust",
    "Accuracy",
    "Confidentiality",
    "Expertise",
    "Experience",
    "Professional",
  ];

  return (
    <section className="bg-white px-6 lg:px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trust is the foundation of <br className="hidden md:block" />
            great service
          </h2>
          <p className="text-gray-700 mb-8">
            We provide income tax, accounting and bookkeeping services to
            individuals, small businesses and corporate clients. Our services
            are tailored to the unique needs of each client. We work as part of
            your team, understanding your needs and what matters to you.
          </p>

          {/* 2-column Checkpoints */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-6">
            {points.map((point, i) => {
              const isActive = hoveredIndex === i;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 cursor-pointer group"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isActive
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    ✓
                  </div>
                  <span className="text-sm font-medium text-gray-900 group-hover:text-black transition-colors duration-300">
                    {point}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Image with Tilt Effect */}
        <div
          ref={imageRef}
          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
          className="rounded-2xl shadow-2xl overflow-hidden transition-transform duration-300 w-full max-w-[600px] mx-auto"
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          <img
            src="https://malikaziz.com.au/wp-content/uploads/2024/06/3517.jpg"
            alt="Meeting"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
