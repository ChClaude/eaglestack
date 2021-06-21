import Link from 'next/link';
import Button from '../components/Button';
import EcommerceSite from '../components/EcommerceSite';
import Image from 'next/image';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Layout from '../components/Layout';
import image from 'next/image';

library.add(fab, faPhone, faMapMarkerAlt);

const Home = () => {
  const slide = {
    image: '/assets/web_design_site.jpg',
    description: 'website design',
  };

  return (
    <Layout>
      <section className="mx-44 h-auto">
        <div className="flex justify-between items-center mt-12">
          <div>
            <h1 className="mb-4 w-40-em leading-normal">
              <div>Modern</div>
              <div>web apps</div>
              <div>built faster</div>
            </h1>
            <p className="text-2xl w-80-em font-serif">
              An intuitive Git-based workflow and powerful serverless platform
              to build, deploy, and collaborate on web apps
            </p>
            <ul className="mt-6 flex items-center">
              <li>
                <Button variant="outlined" dark>
                  Get Started
                </Button>
              </li>
              <li className="ml-4 flex">
                <Link href="#">
                  <a className="flex">
                    <span className="underline  hover:no-underline">
                      Questions? Talk to an expert
                    </span>
                    <span className="material-icons ml-1 text-blue-700 text-base">
                      arrow_forward
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <div className="w-full h-96 rounded-lg shadow bg-white flex justify-center items-center overflow-hidden">
              <EcommerceSite />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
