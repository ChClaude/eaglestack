import Link from 'next/link';
import Button from '../components/Button';
import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';

import styles from '../styles/Home.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Layout from '../components/Layout';

library.add(fab, faPhone, faMapMarkerAlt);

const Home = () => (
  <Layout>
    <section className="mx-44 h-auto">
      <div className="flex justify-between  items-center mt-12">
        <div>
          <h1 className="mb-4 w-40-em leading-normal">
            <div>Modern</div>
            <div>web apps</div>
            <div>built faster</div>
          </h1>
          <p className="text-2xl w-80-em font-serif">
            An intuitive Git-based workflow and powerful serverless platform to
            build, deploy, and collaborate on web apps
          </p>
          <ul className="mt-6 flex items-center">
            <li>
              <Button>Get Started</Button>
            </li>
            <li className="ml-4">Questions? Talk to an expert</li>
          </ul>
        </div>
        <div className="w-full">
          <div className="w-full h-6 bg-red-700">Column</div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;
