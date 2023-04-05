import React from 'react';
import Image from 'next/image';
const Hero = () => {
  const IMAGE_URL = '/../public/HeroImage.jpg';
  return (
    <>
      <div className='relative w-screen h-screen'>
        <div className='-z-50 -top-50'>
          <Image
            priority
            src={IMAGE_URL}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            alt='hero image example'
          />
        </div>
        <div className='absolute p-20 top-0 left-0 w-full h-full flex flex-col justify-center items-start'>
          <h1 className='text-white text-6xl font-bold w-80 '>
            Listen <br /> hot music every day
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
