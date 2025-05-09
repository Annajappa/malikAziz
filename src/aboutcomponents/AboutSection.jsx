import React from 'react';

export default function AboutSection() {
  return (
    <section className="px-6 lg:px-20 py-16 bg-white text-black">
      {/* Heading and Subtitle + Paragraph Row */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-12">
        {/* Left: Heading and Subtitle */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Us</h2>
          <p className="text-lg font-semibold text-gray-800">
            Top quality accounting services for your business
          </p>
        </div>

        {/* Right: Paragraph */}
        <div className="w-full lg:w-1/2">
          <p className="text-lg leading-relaxed text-gray-800">
            With 10 years of experience, we work with companies of all sizes, and in all industries.
            We are dedicated to handling all tax issues swiftly and accurately, so that you can focus
            on what really matters to your business.
          </p>
        </div>
      </div>

     {/* Images in a responsive row */}
<div className="flex flex-col sm:flex-row gap-6">
  {/* Smaller left image */}
  <div className="relative sm:w-[40%] w-full h-[350px] rounded-2xl overflow-hidden">
    <img
      src="https://static.vecteezy.com/system/resources/previews/008/035/527/large_2x/beautiful-young-asian-girl-working-at-a-office-space-with-a-laptop-concept-of-smart-female-business-free-photo.JPG"
      alt="Small Image"
      className="w-full h-full object-cover opacity-80"
    />
    <div className="absolute inset-0 bg-black opacity-40 rounded-2xl" />
  </div>

  {/* Larger right image */}
  <div className="relative sm:w-[60%] w-full h-[350px] rounded-2xl overflow-hidden">
    <img
      src="https://thumbs.dreamstime.com/b/cropped-shot-female-hands-using-laptop-computer-library-table-cropped-shot-female-hands-using-laptop-computer-library-table-153601358.jpg"
      alt="Large Image"
      className="w-full h-full object-cover opacity-80"
    />
    <div className="absolute inset-0 bg-black opacity-40 rounded-2xl" />
  </div>
</div>
    </section>
  );
}
