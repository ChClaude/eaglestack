import Link from 'next/link';
import Button from '../components/Button';
import Meta from '../components/Meta';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import styles from '../styles/Home.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faPhone, faMapMarkerAlt);

const Home = () => (
  <>
    <Meta title="We build modern and reliable software solutions" />
    <Header />
    <Main />
    <Footer />
  </>
);

export default Home;
