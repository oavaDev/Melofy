import { Raleway } from 'next/font/google';
const raleway = Raleway({ subsets: ['latin'] });
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AdFree from '@/components/AdFree';
import Offline from '@/components/Offline';
import Charts from '@/components/Charts';
import Collections from '@/components/Collections';
import Podcasts from '@/components/Podcasts';
export default function Home() {
  return (
    <main className={raleway.className}>
      <section>
        <Navbar />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <AdFree />
      </section>
      <section>
        <Offline />
      </section>
      <section>
        <Charts />
      </section>
      <section>
        <Collections />
      </section>
      <section>
        <Podcasts />
      </section>
    </main>
  );
}
