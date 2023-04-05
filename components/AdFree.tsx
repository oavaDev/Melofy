import Image from 'next/image';
import React from 'react';

const AdFree = () => {
  const IMAGE_URL = '/../public/billie.jpg';
  return (
    <article className='w-screen bg-white h-screen  '>
      <div className=' w-screen h-screen flex flex-col md:flex-row items-center justify-around my-auto'>
        <aside className=''>
          <figure className='absolute w-[250px] h-[290px] z-5 -my-6 -mx-14 border-2 border-black'></figure>
          <Image
            className='relative z-5'
            src={IMAGE_URL}
            width={250}
            height={250}
            alt='billie'
          />
        </aside>
        <aside className='flex flex-col gap-5'>
          <h2 className='text-black text-5xl font-bold w-80'>
            Unlimited, ad-free music
          </h2>
          <p>
            No ads, No interrumptions.
            <br />
            Just music.
          </p>
        </aside>
      </div>
    </article>
  );
};

export default AdFree;
