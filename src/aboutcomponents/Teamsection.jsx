import React from 'react';

export default function TeamSection() {
  return (
    <section className="px-6 lg:px-20 py-16 bg-white text-white">
      <div className="bg-[#1a161f] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-12">
        {/* Malik Aziz Block */}
        <div className="w-full lg:w-1/2">
          <h4 className="text-lime-400 font-medium mb-2">Director</h4>
          <h3 className="text-3xl font-bold mb-1">Malik Aziz</h3>
          <p className="text-gray-400 mb-6">MPA, MBA, B. Comm (H)</p>
          <p className="text-gray-200 leading-relaxed">
            With a keen analytical mind, numbers have always come naturally to me.
            My passion for trends and business led me to pursue a master’s degree
            and gain a decade of experience in accounting. Now, I’ve founded my own
            firm, MA & Co, to offer personalized tax planning and consulting. Unlike
            traditional accountants, we focus on understanding the person behind the
            business, their goals, and values.
          </p>
        </div>

        {/* Arti Budhnani Block */}
        <div className="w-full lg:w-1/2">
          <h4 className="text-lime-400 font-medium mb-2">
            Office Admin and Assistant Accountant
          </h4>
          <h3 className="text-3xl font-bold mb-1">Arti Budhnani</h3>
          <p className="text-gray-200 leading-relaxed">
            As our Office Admin and Assistant Accountant, Arti brings over two years
            of experience in bookkeeping and office administration. Her extensive
            background makes her our go-to expert for managing client onboarding,
            handling intricate bookkeeping tasks, and ensuring smooth office operations.
            Arti’s dedication and skills mean that if Malik faces a challenge, Arti is
            the one who steps in to resolve it.
          </p>
        </div>
      </div>
    </section>
  );
}
