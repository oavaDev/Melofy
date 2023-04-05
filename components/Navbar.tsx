import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
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

  return (
    <nav className=' absolute  z-50 '>
      <div className=' w-screen px-20 flex items-center justify-between h-16  text-white'>
        <div className='flex items-center space-x-2'>
          <div className='bg-white flex  rounded-full m-auto'>
            <Image
              src='/../public/melofy-icon.png'
              alt='Logo'
              width={50}
              height={80}
            />
          </div>
          <h1 className=''>Melofy</h1>
        </div>
        <div className='flex items-center'>
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
    </nav>
  );
};

export default Navbar;
