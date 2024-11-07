import React from 'react';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 testimonials-container">
          <div className="testimonial-card bg-white p-6 border rounded-lg shadow-md text-center">
            <p className="text-gray-600 mb-4">
              "The application process was seamless and the team was incredibly supportive!"
            </p>
            <h4 className="text-lg font-semibold">John Doe</h4>
            <span className="text-gray-500">University of Sydney</span>
          </div>
          <div className="testimonial-card bg-green-50 p-6 border rounded-lg shadow-md text-center highlight">
            <p className="text-gray-600 mb-4">
              "Their guidance helped me get a scholarship I never imagined possible!"
            </p>
            <h4 className="text-lg font-semibold">Jane Smith</h4>
            <span className="text-gray-500">Harvard University</span>
          </div>
          <div className="testimonial-card bg-white p-6 border rounded-lg shadow-md text-center">
            <p className="text-gray-600 mb-4">
              "HS Consultants made my study abroad dream a reality."
            </p>
            <h4 className="text-lg font-semibold">Emily Brown</h4>
            <span className="text-gray-500">University of Oxford</span>
          </div>
        </div>
      </div>
    </section>
  );
};

