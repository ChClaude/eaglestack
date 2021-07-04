import * as React from 'react';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

type LayoutProp = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProp) => {
  return (
    <>
      <Meta title="We build modern and reliable software solutions" />
      <Header />
      <main className="mt-8 md:mt-12">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
