import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="px-32 py-2 bg-gray-800 pt-8 pb-4 text-white">
      <div className="flex justify-around mb-7">
        <div className="flex flex-col">
          <h5>Team up with us</h5>
          <ul>
            <li>
              <Link href="/">
                <a>Products</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Articles</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Our Partners</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Our team</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Chat to us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Where to find us</h5>
          <div className="flex justify-between">
            <ul>
              <li>Cape Town, South Africa</li>
              <li>+27748954636</li>
              <li>
                <ul className="flex justify-between">
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>LinkedIn</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <div className="flex mt-2 px-2 justify-between">
        <span>&copy;2021 Eaglestack All Rights Reserved</span>
        <div>
          <Link href="/">
            <a className="mr-2">Privacy</a>
          </Link>
          <Link href="/">
            <a>Terms of use</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
