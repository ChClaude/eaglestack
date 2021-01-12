import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { Helmet } from 'react-helmet';
import Button from '@material-ui/core/Button';

const IndexPage = () => (
  <Layout>
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Helmet>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button variant="contained" color="primary">
      Click here
    </Button>
    <div
      style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginTop: '10px' }}
    >
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
