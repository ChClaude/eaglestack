import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Header.module.scss';

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

const HamburgerMenu = () => {
  const [classBar1, setClassBar1] = React.useState(styles.bar1);
  const [classBar2, setClassBar2] = React.useState(styles.bar2);
  const [classBar3, setClassBar3] = React.useState(styles.bar3);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOnClick = () => {
    if (isOpen) {
      setClassBar1(styles.bar1);
      setClassBar2(styles.bar2);
      setClassBar3(styles.bar3);
    } else {
      setClassBar1(styles.barCross1);
      setClassBar2(styles.barCross2);
      setClassBar3(styles.barCross3);
    }

    setIsOpen(!isOpen);
  };

  return (
    <button className={styles.barContainer} onClick={handleOnClick}>
      <span className={classBar1}></span>
      <span className={classBar2}></span>
      <span className={classBar3}></span>
    </button>
  );
};

const Header = () => {
  return (
    <header className="mb-4 w-full overflow-hidden">
      <div className="flex items-end py-4 px-4 md:px-44">
        <Link href="/">
          <a className="mr-8 relative top-px">
            <Logo />
          </a>
        </Link>
        <nav className="w-full hidden md:inline-block">
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

        <div className="ml-auto md:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
