import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-24 py-3 sticky top-0 bg-blue-600 text-white z-30">
      <div className="text-4xl font-black">
        <Link href="/">Eaglestack</Link>
      </div>
      <nav className="w-1/3">
        <ul className="flex justify-between">
          <li className="relative">
            <Link href="/">
              <a className={styles.link}>Home</a>
            </Link>
            <div className="bg-white h-1 absolute w-0 left-0 transition-all" />
          </li>
          <li className="relative">
            <Link href="#">
              <a className={styles.link}>About</a>
            </Link>
            <div className="bg-white h-1 absolute w-0 left-0 transition-all" />
          </li>
          <li className="relative">
            <Link href="#">
              <a className={styles.link}>Products</a>
            </Link>
            <div className="bg-white h-1 absolute w-0 left-0 transition-all" />
          </li>
          <li className="relative">
            <Link href="#">
              <a className={styles.link}>Services</a>
            </Link>
            <div className="bg-white h-1 absolute w-0 left-0 transition-all" />
          </li>
          <li className="relative">
            <Link href="#">
              <a className={styles.link}>Contact</a>
            </Link>
            <div className="bg-white h-1 absolute w-0 left-0 transition-all" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
