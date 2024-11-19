import React from 'react';

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 service-container">
          <div className="text-center p-6 border rounded-lg shadow-m bg-green-700">
            <h3 className="text-xl font-semibold mb-6">Visa Assistance</h3>
            <p className="service-info text-white">
              Get help with your visa application process.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg shadow-md bg-green-700">
            <h3 className="text-xl font-semibold mb-6">University Applications</h3>
            <p className="service-info text-white">
              Apply to top universities with our guidance.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg shadow-md bg-green-700">
            <h3 className="text-xl font-semibold mb-6">Scholarship Opportunities</h3>
            <p className="service-info text-white">
              Discover scholarships that match your profile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
