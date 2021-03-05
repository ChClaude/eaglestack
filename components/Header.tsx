import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-32 py-3 mb-16 sticky top-0 bg-white">
      <div className="text-4xl font-black">
        <Link href="/">Eaglestack</Link>
      </div>
      <nav className="w-1/3">
        <ul className="flex justify-between">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
