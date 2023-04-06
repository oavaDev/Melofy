import Image from 'next/image';
import React from 'react';

const Collections = () => {
  interface genre {
    name: string;
    image: string;
  }
  const GENRES: genre[] = [
    {
      name: 'Rock',
      image:
        'https://images.jamendo.com/jamendolicensing/heroes/catalog/genres_rock-m.webp',
    },
    {
      name: 'Pop',
      image:
        'https://media.istockphoto.com/id/994280546/photo/passionate-singer-playing-the-guitar-and-recording-song-in-studio.jpg?s=612x612&w=0&k=20&c=MvAY7l1ZVL8RhQNIsoj4BD-GuWqOOjF411eW2LOMmGU=',
    },
    {
      name: 'Rap',
      image:
        'https://media.istockphoto.com/id/1160768128/photo/rap-musician-in-studio.jpg?s=612x612&w=0&k=20&c=8LzuLliur66CaZnXywhBZzcTRellYlRF3gRCTlSG3XE=',
    },
    {
      name: 'Hip-Hop',
      image:
        'https://media.istockphoto.com/id/157425110/photo/rapper-on-concert-stage.jpg?s=612x612&w=0&k=20&c=EhY2XTZQ-vbWn01aNVvpb4x7Gl7ZydeWZfn84J6otDI=',
    },
    {
      name: 'R&B',
      image:
        'https://assets.snapmuse.com/computed/images/managed/genre/genre_gCxbfWvwJ1B9p6wg_1664017309517@2x.webp',
    },
    {
      name: 'Country',
      image:
        'https://images.unsplash.com/photo-1479708393961-bbdb87fd2514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291bnRyeSUyMG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Jazz',
      image:
        'https://media.istockphoto.com/id/465732100/photo/african-jazz-musician-playing-the-saxophone.jpg?s=612x612&w=0&k=20&c=hCw5oibcUVJYSHqAWJQnD3AHpPATEdCZoA4TS8qqkng=',
    },
    {
      name: 'Classical',

      image:
        'https://images.jamendo.com/jamendolicensing/heroes/catalog/genres_others_classical-m.webp',
    },
  ];
  return (
    <article className='w-screen bg-white h-screen  '>
      <div className='w-screen flex flex-col  bg-white h-screen gap-32   '>
        <div className='flex flex-col justify-center items-center text-center md:text-start md:pl-28  md:justify-start md:items-start gap-8'>
          <p className='text-black text-5xl font-bold w-80 '>Collections</p>
          <p>Playlists tailored to your mood or genre</p>
        </div>
        <div className='flex items-center justify-center'>
          <div className='flex flex-wrap gap-4 justify-center md:grid md:grid-cols-4 md:gap-4 '>
            {GENRES.map((genre: genre, i: number) => (
              <div
                className={`relative w-52 h-52  order-${i}`}
                key={genre.name}
              >
                <Image
                  className='z-30 brightness-75'
                  src={genre.image}
                  fill={true}
                  alt={genre.name}
                />
                <div className='z-50 relative  '>
                  <span className='text-white text-xl font-bold bottom-0 '>
                    {genre.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='text-center '>
          <a
            href='/'
            className='bg-black w-40 px-16 py-4  text-center rounded text-white'
          >
            See more
          </a>
        </div>
      </div>
    </article>
  );
};

export default Collections;
