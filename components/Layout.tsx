import React from 'react';
import Meta from './Meta';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

interface Props {
  /** title of the page */
  title?: string;
  /** children to append to the layout */
  children: React.ReactNode;
}

const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Meta
        title={title || 'We build modern and reliable software solutions'}
      />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
