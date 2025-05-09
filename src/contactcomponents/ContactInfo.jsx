import React from 'react';

export default function ContactIntro() {
  return (
    <section className="px-6 lg:px-20 py-16 bg-white text-black">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left: Heading */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-semibold text-[#1a161f]">
            Contact Us
          </h1>
        </div>

        {/* Right: Paragraph */}
        <div className="w-full lg:w-1/2 text-lg leading-relaxed text-gray-800">
          <p>
            Curious about how we can help with your finances? Reach out to our team today.
            We specialize in SMSF management, business advisory, tax accounting, and more.
            No matter if you're an individual or a business, we offer customized solutions
            to fit your financial needs. Contact us by phone or email to begin your journey
            toward financial success.
          </p>
        </div>
      </div>
    </section>
  );
}
