import Image from 'next/image'
import { Raleway } from 'next/font/google';
const raleway = Raleway({ subsets: ['latin'] });
import PageWrapper from './page-wrapper';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
export default function Home() {
  return (
    <main className={raleway.className}>
      <section>
        <Navbar />
      </section>
      <section>
        <Hero />
        <h1 className='absolute'>Listen hot music every day</h1>
      </section>
    </main>
  );
}
