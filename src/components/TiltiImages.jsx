import React, { useRef } from "react";

export default function TiltImages() {
  const handleTilt = (e, ref) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    ref.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const resetTilt = (ref) => {
    ref.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  const image1 = useRef(null);
  const image2 = useRef(null);

  return (
    <div className="flex justify-center items-center py-20 bg-white">
      <div className="relative w-fit">
        {/* Bottom Image */}
        <div
          ref={image1}
          onMouseMove={(e) => handleTilt(e, image1)}
          onMouseLeave={() => resetTilt(image1)}
          className="rounded-xl shadow-xl w-[260px] h-[360px] transition-transform duration-300"
        >
          <img
            src="https://img.freepik.com/free-photo/businesspeople-discussing-graphs_53876-15084.jpg"
            alt="Back Chart"
            className="rounded-xl w-full h-full object-cover"
          />
        </div>

        {/* Top Image */}
        <div
          ref={image2}
          onMouseMove={(e) => handleTilt(e, image2)}
          onMouseLeave={() => resetTilt(image2)}
          className="absolute top-0 left-1/2 -translate-x-1/2 -mt-20 z-10 rounded-xl shadow-2xl w-[260px] h-[360px] transition-transform duration-300"
        >
          <img
            src="https://img.freepik.com/free-photo/young-woman-working-documents-financial-charts-office_74952-2042.jpg"
            alt="Front Chart"
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
