import React from 'react';
import SeeMoreButton from './SeeMoreButton';
import Image from 'next/image';

const Podcasts = () => {
  // make a const with 4 podcasts using image,genre and description
  const podcasts = [
    {
      id: 1,
      image:
        'https://pyxis.nymag.com/v1/imgs/ea6/229/44b63960598089d78afb970c3b962feac0-floodlines.jpg',
      genre: 'History',
      name: 'Floodlines',
      description:
        'Some call it hurricane Katrina, Some call it the federal flood. Others c...',
      episode: 'E9',
    },
    {
      id: 2,
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/7f/be/1d/7fbe1db7-4db2-aae1-7106-081c908194ff/mza_15049730111281393670.jpeg/200x200bb.png',
      genre: 'Business',
      name: 'Lost Notes',
      description: 'A collection of the gratest music stories never told.',
      episode: 'E33',
    },
    {
      id: 3,
      image: 'https://i.scdn.co/image/d8eb10d354e300d56bde35ca1d6c86327ac92cbe',
      genre: 'Business',
      name: 'Ui Breakfast: UI/UX design',
      description:
        'Join us for exciting conversation about UI/UX design,SaaS produc...',
      episode: 'E22',
    },
    {
      id: 4,
      image:
        'https://e-cdns-images.dzcdn.net/images/talk/64180806ff9634046718a6e53002adbd/264x264-000000-80-0-0.jpg',
      genre: 'Drama',
      name: 'Frozen Head',
      description:
        'Hosted by Ash Kelley and Alaina Urquhart from the hit show Morbid.',
      episode: 'E3',
    },
  ];

  return (
    <article className='w-screen  h-screen flex flex-col md:flex-row md:gap-30 xl:gap-56 md:pt-0 pt-52 items-center md:justify-center justify-between bg-white   '>
      <aside className='h-96 md:h-80 flex flex-col gap-12 pb-12 text-center items-center justify-around'>
        <span className='text-black text-5xl font-bold w-80'>Podcasts</span>
        <p>Listen more than music</p>
        <SeeMoreButton />
      </aside>
      <aside className='flex gap-5 justify-center flex-wrap md:flex-nowrap '>
        {podcasts.map((podcast) => {
          return (
            <div
              className='flex flex-col w-32 bg-[#fefefe] shadow-md rounded justify-between'
              key={podcast.id}
            >
              <div className='justify-center'>
                <Image
                  src={podcast.image}
                  width={130}
                  height={130}
                  alt={podcast.name}
                />
                <div className=' flex flex-col m-1 gap-5'>
                  <span className='font-bold'>{podcast.name}</span>
                  <span className='font-bold text-xs'>{podcast.genre}</span>
                  <span className='text-xs'>{podcast.description}</span>
                </div>
              </div>
              <span className='mt-3'>{podcast.episode}</span>
            </div>
          );
        })}
      </aside>
    </article>
  );
};

export default Podcasts;
