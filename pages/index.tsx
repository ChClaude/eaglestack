import Link from 'next/link';
import Layout from '../components/Layout';
import Button from '../components/Button';

import styles from '../styles/Home.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faPhone, faMapMarkerAlt);

const Home = () => (
  <Layout>
    <section className={`px-24 pt-16 pb-20 relative ${styles['hero-wrapper']}`}>
      <div
        className={`absolute top-0 right-0 h-full w-2/5 bg-blue-600 z-0 ${styles['hero-clip-path']}`}
      />
      <div className="grid grid-cols-2 h-96 relative z-10">
        <div className="flex flex-col justify-center">
          <h1 className="leading-tight mb-1">Eaglestack Software</h1>
          <p className="text-xl mb-3">
            Mordern and reliable software solutions that delivers value to your
            business
          </p>
          <Button className="bg-blue-600 text-white hover:bg-blue-500 w-44 h-14 text-lg">
            Explore
          </Button>
        </div>

        <div className="bg-gray-500 flex justify-center items-center text-white text-2xl">
          <div>
            <div>Site under development</div>
            <div>Coming Soon</div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;
