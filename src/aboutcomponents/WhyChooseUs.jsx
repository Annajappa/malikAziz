import React from 'react';

export default function WhyChooseUs() {
  const cards = [
    {
      number: '01.',
      title: 'Trust',
      desc: 'We prioritize building strong, lasting relationships with our clients. With our transparent and reliable services, you can trust us to handle your financial needs with integrity and dedication.',
      bg: 'bg-[#1a161f] text-white',
    },
    {
      number: '02.',
      title: 'Expertise',
      desc: 'We brings extensive experience in accounting, bookkeeping, and tax services, offering a wealth of knowledge to every client engagement.',
      bg: 'bg-white text-black border',
    },
    {
      number: '03.',
      title: 'Community',
      desc: 'We believe in the power of community and are dedicated to supporting the growth and success of the businesses and individuals we serve.',
      bg: 'bg-lime-400 text-black',
    },
    {
      number: '04.',
      title: 'Ethics',
      desc: 'At Malik Aziz & Co., we adhere to the highest ethical standards. Our commitment to honesty, fairness, and accountability ensures that your financial matters are handled with the utmost care and professionalism.',
      bg: 'bg-[#1a161f] text-white',
    },
    {
      number: '05.',
      title: 'Efficiency',
      desc: 'We understand the importance of efficiency in financial management. Our streamlined processes and advanced tools help you save time and resources, allowing you to focus on what matters most—growing your business.',
      bg: 'bg-white text-black border',
    },
    {
      number: '06.',
      title: 'Many More',
      desc: 'Our wide range of services is designed to meet all your financial needs. From personalized advisory to innovative software solutions, we offer comprehensive support to help you achieve your financial goals.',
      bg: 'bg-lime-400 text-black',
    },
  ];

  return (
    <section className="px-6 lg:px-20 py-16 bg-white">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 text-lg">
          we pride ourselves on our commitment to excellence and personalized service.
          We stay up-to-date with the latest industry trends and regulations, ensuring you
          receive the most accurate and relevant advice.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 ${card.bg}`}
          >
            <h3
  className={`text-3xl font-bold mb-2 ${
    card.bg.includes('bg-lime-400') ? 'text-black' : 'text-lime-400'
  }`}
>
  {card.number}
</h3>

            <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
            <p className="text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
