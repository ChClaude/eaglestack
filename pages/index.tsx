import Link from 'next/link';
import Layout from '../components/Layout';
import Button from '../components/Button';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faPhone, faMapMarkerAlt);

const Home = () => (
  <Layout>
    <div className="grid grid-cols-2">
      <div>
        <h1 className="leading-tight mb-1">Eaglestack Software</h1>
        <p className="text-xl mb-3">
          Mordern and reliable software solutions that delivers value to your
          business
        </p>
        <Button className="bg-blue-600 text-white hover:bg-blue-500">
          Explore
        </Button>
      </div>

      <div className="bg-gray-500 flex justify-center items-center text-white text-2xl">
        <div>Site under development</div>
      </div>
    </div>
  </Layout>
);

export default Home;
