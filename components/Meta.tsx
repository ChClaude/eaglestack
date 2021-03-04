import React from 'react';
import Head from 'next/head';

interface Props {
  /** title of the page */
  title?: string;
}

const Meta = ({ title }: Props) => {
  return (
    <Head>
      <title>Eaglestack | {title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
