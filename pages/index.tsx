import Link from 'next/link';
import Layout from '../components/Layout';
import Button from '../components/Button';

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

      <div>Image</div>
    </div>
  </Layout>
);

export default Home;
