import React from 'react';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-green-700 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 footer-container">
          
          <div className="footer-about">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veniam ad deserunt est ullam obcaecati eos dolorem, nisi veritatis tempora. Adipisci enim minus accusamus saepe suscipit quia fuga officia odio tempore laudantium. Explicabo, maiores libero dolore odit placeat odio qui.
            </p>
          </div>

          <div className="footer-link mx-auto">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-gray-300">Services</a></li>
              <li><a href="#countries" className="hover:text-gray-300">Popular Destinations</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-200">Email: info@example.com</p>
            <p className="text-gray-200">Phone: +123 456 7890</p>
            <p className="text-gray-200">Address: 123 Main Street, City, Country</p>
          </div>

        </div>
      </div>

      <div className="footer-bottom bg-green-900 py-4 mt-8">
        <p className="text-center text-white text-sm">
          &copy; 2024 Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
