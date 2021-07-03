import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="py-2 bg-gray-800 pt-8 pb-4 text-white mt-16 px-4 sm:px-44">
      <div className="flex flex-col mb-7 sm:justify-between sm:flex-row">
        <div className="flex flex-col">
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
        <div className="w-44 mt-4 sm:mt-0">
          <h6 className="mb-1">Get in Touch</h6>
          <div className="flex justify-between">
            <ul className="flex justify-between w-full py-2">
              <li>
                <FontAwesomeIcon
                  icon={['fab', 'facebook']}
                  className="text-4xl"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={['fab', 'instagram']}
                  className="text-4xl"
                />
              </li>
              <li>
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
      <div className="flex mt-2 px-2 flex-col items-center sm:items-start sm:justify-between sm:flex-row">
        <span>&copy;2021 Eaglestack All Rights Reserved</span>
        <div className="flex flex-col sm:flex-row">
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
