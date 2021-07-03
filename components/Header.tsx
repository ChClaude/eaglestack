import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => (
  <div className="flex w-36 overflow-hidden">
    <Image
      width={35}
      height={30}
      src="/assets/feather-logo-blue.png"
      alt="Eaglestack Logo"
      className="w-auto"
      objectFit="cover"
    />
    <span className="text-xl font-black ">Eaglestack</span>
  </div>
);

const Header = () => {
  return (
    <header className="mb-4 w-full">
      <div className="flex items-end py-4 px-4 sm:px-44">
        <Link href="/">
          <a className="mr-8 relative top-px">
            <Logo />
          </a>
        </Link>
        <nav className="w-full hidden sm:inline-block">
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
    </header>
  );
};

export default Header;
