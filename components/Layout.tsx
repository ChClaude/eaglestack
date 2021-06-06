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
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
