import PageWrapper from '@/app/page-wrapper';
import Image from 'next/image';
import React from 'react';

const AdFree = () => {
  const IMAGE_URL =
    'https://res.cloudinary.com/dj80e8qqp/image/upload/v1680730214/billie_onzu7n.jpg';
  return (
    <PageWrapper>
      <article className='w-screen bg-white h-screen  '>
        <div className=' w-screen h-screen flex flex-col md:flex-row items-center justify-around my-auto'>
          <aside className=''>
            <figure className='absolute w-[250px] h-[290px] z-5 -my-6 -mx-14 border-2 border-black'></figure>
            <Image
              className='relative z-5'
              src={IMAGE_URL}
              width={250}
              loading='lazy'
              height={250}
              quality={100}
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
    </PageWrapper>
  );
};

export default AdFree;
