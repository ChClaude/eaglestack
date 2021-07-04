import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="py-2 bg-gray-800 pt-8 pb-4 text-white mt-16 px-4 md:px-44">
      <div className="flex flex-col mb-7 md:justify-between md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <h6 className="mb-1">Important Links</h6>
          <ul>
            <li>
              <Link href="/">
                <a className="py-2">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="py-2">Services</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="py-2">Articles</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="py-2">Chat to us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full mt-4 md:mt-0 md:w-44">
          <h6 className="mb-1 text-center md:text-left">Get in Touch</h6>
          <div className="flex justify-between">
            <ul className="flex justify-center w-full py-2 md:justify-between">
              <li className="mr-3 md:mr-0">
                <FontAwesomeIcon
                  icon={['fab', 'facebook']}
                  className="text-4xl"
                />
              </li>
              <li className="mr-3 md:mr-0">
                <FontAwesomeIcon
                  icon={['fab', 'instagram']}
                  className="text-4xl"
                />
              </li>
              <li className="mr-3 md:mr-0">
                <FontAwesomeIcon
                  icon={['fab', 'twitter']}
                  className="text-4xl"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={['fab', 'linkedin']}
                  className="text-4xl"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <div className="flex mt-2 px-2 flex-col items-center md:items-start md:justify-between md:flex-row">
        <span>&copy;2021 Eaglestack All Rights Reserved</span>
        <div className="flex flex-col md:flex-row">
          <Link href="/">
            <a className="mr-3">Privacy</a>
          </Link>
          <Link href="/">
            <a>Terms</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
