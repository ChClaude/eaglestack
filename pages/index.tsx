import Link from 'next/link';
import Button from '@/components/Button';
import EcommerceSite from '@/components/EcommerceSite';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Layout from '@/components/Layout';

library.add(fab, faPhone, faMapMarkerAlt);

const Home = () => {
  return (
    <Layout>
      <section className="px-4 h-auto overflow-hidden sm:px-44">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="flex flex-col justify-center mb-10 sm:justify-start sm:mb-0">
            <h1 className="mb-4 leading-normal w-full sm:w-40-em">
              <div className="whitespace-nowrap text-center sm:text-left">
                Modern
              </div>
              <div className="whitespace-nowrap text-center sm:text-left">
                web apps
              </div>
              <div className="whitespace-nowrap text-center sm:text-left">
                built faster
              </div>
            </h1>
            <p className="text-2xl font-serif text-center sm:w-80-em sm:text-justify">
              Everything you need to build and boost your online presence.
              Providing solutions for ecoomerce sites, web and mobile apps, AI
              powered web tools to meet your business needs.
            </p>
            <ul className="mt-6 flex flex-col items-center sm:flex-row">
              <li>
                <Button variant="outlined" dark>
                  Get Started
                </Button>
              </li>
              <li className="flex mt-4 sm:mt-0 sm:ml-4">
                <Link href="#">
                  <a className="flex">
                    <span className="underline hover:no-underline">
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
