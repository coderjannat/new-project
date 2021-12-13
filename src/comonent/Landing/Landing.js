import React from 'react';
import './Landing.css';
import { BsCodeSlash } from 'react-icons/bs';
import { BsFillHeartFill } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';

const Landing = () => {
    return (
        <div className='md:container md:mx-auto mt-24'>
            <div className='flex justify-center items-center'>
                <BsCodeSlash size={32} color="#1E0E62"/>
                <BsFillHeartFill size={32} color="#E93A7D" className="mx-12" />
                <AiOutlineStar size={32} color="#1E0E62" />
            </div>
            <div className='mt-10'>
                <h6 className='landing-title'>Better Landing for Your Startup</h6>
                <p className='landing-para pt-4 px-24'>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
            </div>
        </div>
    );
};

export default Landing;