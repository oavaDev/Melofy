import Image from 'next/image'
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import PageWrapper from './page-wrapper';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
export default function Home() {
  return (
    <main className='bg-transparent'>
      <section className='mx-[80px]'>
        <Navbar />
      </section>
      <section>
        <Hero />
      </section>
    </main>
  );
}
