import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import logo from '../assets/eaglestack-logo.jpg';

const Header = () => {
  return (
    <header className="py-4 mb-4">
      <div className="w-full">
        <div className="mx-44 flex items-end">
          <Link href="/">
            <a className="text-xl font-black mr-8 relative top-px">
              Eaglestack
            </a>
          </Link>
          <nav className="w-full">
            <ul className="flex justify-between">
              <li>
                <Link href="/">
                  <a className="flex h-full items-center px-3 hover:underline">
                    Platform
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="flex h-full items-center px-3 hover:underline">
                    Pricing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="flex h-full items-center px-3 hover:underline">
                    Entreprise
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="flex h-full items-center px-3 hover:underline">
                    Jamstack
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="flex h-full items-center px-3 hover:underline">
                    Blog
                  </a>
                </Link>
              </li>
              <li className="flex-grow"></li>
              <li>
                <Link href="#">
                  <span className="material-icons flex h-full items-center px-3">
                    search
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="flex h-full items-center px-3 hover:underline">
                    Get in touch
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
