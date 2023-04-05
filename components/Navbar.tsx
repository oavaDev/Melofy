'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [NavbarOpen, setNavbarOpen] = useState(false);
  const links = [
    { href: '/about', label: 'About Us' },
    { href: '/support', label: 'Support' },
    { href: '/signin', label: 'Sign In' },
    {
      href: '/signup',
      label: 'Sign Up',
      className: 'bg-white px-10 py-2 rounded text-black',
    },
  ];
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <nav className=' absolute  z-50 '>
          <div className=' w-screen px-20 flex items-center justify-between h-16  text-white'>
            <div className='flex items-center space-x-2'>
              <div className='bg-white flex w-10 h-10  rounded-full m-auto'>
                <Image
                  src='https://res.cloudinary.com/dj80e8qqp/image/upload/v1680730218/logo-melofy_yyz9vt.png'
                  alt='Logo'
                  width={50}
                  height={80}
                />
              </div>
              <h1 className='text-xl font-bold'>Melofy</h1>
            </div>
            <div className={`${NavbarOpen && 'pt-40 '}  flex-col`}>
              <div className='md:hidden flex flex-col'>
                <button onClick={() => setNavbarOpen(!NavbarOpen)}>
                  {NavbarOpen ? (
                    <IoMdClose size={30} color={'white'} />
                  ) : (
                    <IoMdMenu size={30} color={'white'} />
                  )}
                </button>
              </div>
              <div
                className={`flex items-center gap-5 ${
                  NavbarOpen ? 'flex-col' : 'hidden'
                } md:flex`}
              >
                {links.map(({ href, label, className }) => (
                  <Link key={href} href={href}>
                    <label
                      className={`mx-4 text-md hover:text-gray-300 ${
                        className || ''
                      }`}
                    >
                      {label}
                    </label>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
