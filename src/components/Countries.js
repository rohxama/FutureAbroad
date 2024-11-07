import React from 'react';
import Image from 'next/image';

export const CountriesSection = () => {
  return (
    <section id="countries-section" className="py-60">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Explore Top Study Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 countries-container">
          <div className="country-card text-center p-6 border rounded-lg shadow-md">
            <Image src="/media/uk.png" alt="UK" width={100} height={100} className="mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2">UK</h3>
            <p className="text-gray-600 mb-4">
              World-class institutions with rich academic history.
            </p>
            <a href="#learn-more" className="text-green-600 font-semibold hover:underline">
              Learn More
            </a>
          </div>
          <div className="country-card text-center p-6 border rounded-lg shadow-md">
            <Image src="/media/usa.png" alt="USA" width={100} height={100} className="mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2">USA</h3>
            <p className="text-gray-600 mb-4">
              Top universities and diverse culture. A leader in global education.
            </p>
            <a href="#learn-more" className="text-green-600 font-semibold hover:underline">
              Learn More
            </a>
          </div>
          <div className="country-card text-center p-6 border rounded-lg shadow-md">
            <Image src="/media/astralia.jpeg" alt="Australia" width={100} height={100} className="mx-auto mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Australia</h3>
            <p className="text-gray-600 mb-4">
              Innovative teaching and amazing student experience.
            </p>
            <a href="#learn-more" className="text-green-600 font-semibold hover:underline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

