import React from 'react';
import Image from 'next/image';
const Hero = () => {
  const IMAGE_URL = '/../public/HeroImage.jpg';
  return (
    <>
      <div className='relative w-screen h-screen'>
        <div className='-z-50 -top-50 '>
          <Image
            priority
            src={IMAGE_URL}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            alt='hero image example'
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
