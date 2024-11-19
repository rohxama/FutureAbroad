import React from 'react';

export const AboutSection = () => {
    return (
        <section id="about-us" className="py-60">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center about-container">
                    <div className="mb-8 md:mb-0 md:w-1/2">
                        <img src="/static-media/about-sec.png" alt="Unlock Your Journey" className="w-full max-w-sm" />
                    </div>
                    <div className="md:w-1/2 md:pl-10">
                        <h2 className="text-3xl font-bold mb-4">Unlock Your Journey</h2>
                        <p className="mb-8">
                            We provide the best way to help students achieve their educational dreams. Start your journey with us and unlock a world of opportunities.
                        </p>
                        <ul className="list-disc list-inside mb-8">
                            <li className="flex items-center mb-2 text-md font-medium">
                                <img src="./static-media/star.png" alt="Star Icon" width={15} className="mr-2" />
                                Expert visa assistance tailored to your needs.
                            </li>
                            <li className="flex items-center mb-2 text-md font-medium">
                                <img src="./static-media/star.png" alt="Star Icon" width={15} className="mr-2" />
                                Personalized university application guidance.
                            </li>
                            <li className="flex items-center mb-2 text-md font-medium">
                                <img src="./static-media/star.png" alt="Star Icon" width={15} className="mr-2" />
                                Access to exclusive scholarships for international students.
                            </li>
                        </ul>
                        <a href="#apply" className="btn-apply inline-block bg-green-600 text-white px-6 py-2 rounded-md">
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
