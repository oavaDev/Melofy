import Image from 'next/image';
import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
const Offline = () => {
  interface songsI {
    id: number;
    name: string;
    artist: string;
    artwork: string;
  }
  const SONGS: songsI[] = [
    {
      id: 1,
      name: 'Sodus',
      artist: 'Cemeteries',
      artwork:
        'https://e-cdn-images.dzcdn.net/images/cover/483448feaa79f0a832692aa94fc0dea6/264x264-000000-80-0-0.jpg',
    },
    {
      id: 2,
      name: "It's late",
      artist: 'A beacon School',
      artwork:
        'https://e-cdn-images.dzcdn.net/images/cover/0580f60314ab3e22378d360c192210ea/264x264-000000-80-0-0.jpg',
    },
    {
      id: 3,
      name: 'Alleyways',
      artist: 'The neighbourhood',
      artwork:
        'https://e-cdn-images.dzcdn.net/images/cover/6f55ff3cc5c478510c948024e95cf8d6/264x264-000000-80-0-0.jpg',
    },
  ];
  return (
    <div className='w-screen bg-[#93438f] h-screen clipstylemb sm:clipstyleb  '>
      <aside className='flex flex-col w-screen h-screen  md:flex-row  items-center gap-20 md:gap-48 justify-center '>
        <div className='h-40  gap-y-10'>
          <h3 className='text-white text-5xl font-bold w-80'>
            Listen offline music
          </h3>
          <p className='text-white'>
            Enjoy music without wifi and internet connection
          </p>
        </div>

        <div className='flex flex-col gap-6'>
          {SONGS.map((song: songsI) => (
            <div
              className='flex w-80 bg-white p-3 rounded gap-5 items-center'
              key={song.id}
            >
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
                <AiFillPlayCircle color='grey' size={30} />
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Offline;
