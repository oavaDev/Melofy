import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  const links = [
    { href: '/about', label: 'About Us' },
    { href: '/support', label: 'Support' },
    { href: '/signin', label: 'Sign In' },
    { href: '/signup', label: 'Sign Up', className: 'bg-white rounded' },
  ];

  return (
    <nav className='  bg-inherit flex items-center justify-between h-16  text-black'>
      <div className='flex items-center'>
        <div className='bg-white  rounded-full m-auto'>
          <Image
            src='/../public/melofy-icon.png'
            alt='Logo'
            width={50}
            height={80}
          />
        </div>
      </div>
      <div className='flex items-center'>
        {links.map(({ href, label, className }) => (
          <Link key={href} href={href}>
            <label className={`mx-4 hover:text-gray-300 ${className || ''}`}>
              {label}
            </label>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
