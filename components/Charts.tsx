import React from 'react';
import Image from 'next/image';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import { FaCrown } from 'react-icons/fa';
import SeeMoreButton from './SeeMoreButton';
const Charts = () => {
  interface songsI {
    id: number;
    name: string;
    artist: string;
    artwork: string;
  }
  const boolean = () => {
    return Math.floor(Math.random() * 2);
  };
  const SONGS: songsI[] = [
    {
      id: 1,
      name: "It's late",
      artist: 'A beacon School',
      artwork:
        'https://e-cdn-images.dzcdn.net/images/cover/0580f60314ab3e22378d360c192210ea/264x264-000000-80-0-0.jpg',
    },
    {
      id: 2,
      name: 'Warm Healer',
      artist: 'Everything Everything',
      artwork:
        'https://e-cdn-images.dzcdn.net/images/cover/c4948a8a70d0077722793acfd77ef73d/264x264-000000-80-0-0.jpg',
    },
    {
      id: 3,
      name: 'Sodus',
      artist: 'Cemeteries',
      artwork:
        'https://e-cdn-images.dzcdn.net/images/cover/483448feaa79f0a832692aa94fc0dea6/264x264-000000-80-0-0.jpg',
    },

    {
      id: 4,
      name: 'Alleyways',
      artist: 'The neighbourhood',
      artwork:
        'https://e-cdn-images.dzcdn.net/images/cover/6f55ff3cc5c478510c948024e95cf8d6/264x264-000000-80-0-0.jpg',
    },
  ];

  return (
    <article className='w-screen bg-white h-screen '>
      <div className='w-screen  h-screen flex flex-col md:flex-row justify-evenly md:justify-around  items-center '>
        <aside className='flex flex-col   '>
          {SONGS.map((song: songsI) => (
            <div
              className='flex w-80 bg-[#f6f5f6] p-3 rounded gap-5 items-center border-b-[1px] border-gray-400 last:border-b-0'
              key={song.id}
            >
              <div className='font-bold flex-shrink-0'>
                {song.id === 1 ? (
                  <>
                    <div className='text-center  text-xs '>
                      <p>Top</p>
                      <FaCrown color='gold' size={20} />
                    </div>
                  </>
                ) : (
                  song.id
                )}
              </div>
              <div className='flex-shrink-0'>
                <Image
                  src={song.artwork}
                  width={50}
                  height={50}
                  alt={'sodus'}
                />
              </div>
              <div className='flex-grow'>
                <h4 className='font-bold text-md'>{song.name}</h4>
                <p className='text-xs text-gray-500'>{song.artist}</p>
              </div>
              <div className='w-1/6 flex items-center justify-end flex-shrink-0'>
                {boolean() === 1 || song.id === 1 ? (
                  <IoMdArrowDropup color='green' size={30} />
                ) : (
                  <IoMdArrowDropdown color='red' size={30} />
                )}
              </div>
            </div>
          ))}
        </aside>
        <aside className='flex flex-col gap-5 justify-between md:justify-between items-center md:items-baseline text-center md:text-start'>
          <h5 className='text-black text-5xl font-bold w-80'>
            Melofy top charts
          </h5>
          <p>Listen popular tracks right now</p>
          <SeeMoreButton />
        </aside>
      </div>
    </article>
  );
};

export default Charts;
