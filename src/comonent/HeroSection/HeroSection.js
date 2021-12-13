import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <>
            <div className="hero w-full h-full bg-hero-img bg-no-repeat bg-cover bg-left bg-fixed object-fill">
                {/*-----------------------NAVIGATION-----------------------*/}
                <nav class="flex items-center justify-between flex-wrap  p-6">

                    <div class="block lg:hidden">
                        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                    <div class="w-full block flex-grow lg:flex lg:items-center lg:mt-0">

                        <div className="text-sm " >
                            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Docs
                            </a>
                            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Examples
                            </a>
                            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                                Blog
                            </a> {" "}
                            <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
                        </div>
                    </div>
                </nav>

                {/*-----------------------HERO-TITLE ------------------*/}
                <div className='hero-title container mx-auto px-4 pt-4'>
                    <div>
                        <h2 className='hero-heading' >Startup <br /> Framework.
                            Suit <br /> Up Your Startup </h2>
                        <p className='hero-para pt-3'>
                            We have created a new product that will help designers,<br /> developers and companies create websites for their startups<br /> quickly and easily.
                        </p>
                    </div>
                    <div className='pt-8 relative'>
                        <button class="bg-transparent hover:bg-white text-white font-semibold hover:text-blue-700 py-2 px-4 mr-4  border border-white border-opacity-50 hover:border-transparent rounded-full">
                            Get Started
                        </button>
                        <button class="bg-transparent hover:bg-white text-white font-semibold hover:text-blue-700 py-2 px-4 border border-white border-opacity-50 hover:border-transparent rounded-full">
                            Learn More
                        </button>
                    </div>
                </div>


            </div>

        </>
    );
};

export default HeroSection;