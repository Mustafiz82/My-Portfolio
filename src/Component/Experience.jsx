import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import image from "../assets/texon.webp";

const Experience = () => {
    return (
        <div className='p-10 bg-cover bg-center' style={{ backgroundImage: 'url(/path/to/starry-background.jpg)' }}>
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4 text-white">
                    My Experience
                </h1>
                <p className="text-2xl md:text-3xl lg:text-5xl text-[#61CE70]">
                    ----- What I’ve Done ------
                </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-10 my-20">
                <div className='w-full  flex justify-end items-center lg:w-1/3 p-10'>
                    <img src={image} className='rounded-3xl w-[300px] hover:scale-105 transition-transform duration-300' alt="Texon Logo" />
                </div>
                <div className='w-full bg lg:w-2/3 p-10 max-w-3xl rounded-3xl shadow-lg'>
                    <h1 className='text-3xl font-extrabold text-white'>Frontend Developer Intern</h1>
                    <h2 className='text-lg my-3 font-medium text-gray-300'>Texon Limited | October 2024 – December 2024 (3 months)</h2>

                    <ul className='list-disc mt-5 ml-5 space-y-3  pl-5'>
                        <li className='flex items-center gap-3 leading-relaxed'>
                            <div className='w-5 h-5 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Collaborated on 5 major projects, primarily converting Figma designs into web pages using Next.js and Tailwind CSS.
                            </span>
                        </li>
                        <li className='flex items-center gap-3 leading-relaxed'>
                            <div className='w-5 h-5 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Delivered high-quality, responsive web pages for multiple projects, adhering to deadlines.
                            </span>
                        </li>


                        <li className='flex items-center gap-3 leading-relaxed'>
                            <div className='w-5 h-5 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Integrated APIs for fetching and updating data on specific pages.
                            </span>
                        </li>
                        <li className='flex items-center gap-3 leading-relaxed'>
                            <div className='w-5 h-5 flex-shrink-0'>
                                <FiCheckCircle className="text-primaryColor" />
                            </div>
                            <span className='flex-grow'>
                                Received positive feedback for creating pixel-perfect and clean code that aligned with the design team’s expectations.
                            </span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Experience;