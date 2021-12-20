import React from 'react';
import Head from 'next/head';

interface Props {
  /** title of the page */
  title?: string;
}

const Meta = ({ title }: Props) => (
	<Head>
		<title>Eaglestack | {title}</title>
		<link rel='icon' href='/favicon.ico' />
	</Head>
);

Meta.defaultProps = {
	title: 'Software development'
};

export default Meta;
