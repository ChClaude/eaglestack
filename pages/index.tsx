import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <h1>Eaglestack Software</h1>
    <p>This site is still under development. We'll be back soon!</p>
    <p>
      Please contact Chris at{' '}
      <a style={{ color: '#0070f3' }} href="mailto:christ@tchambila@gmail.com">
        christ@tchambila@gmail.com
      </a>{' '}
      for more
    </p>
  </Layout>
);

export default Home;
