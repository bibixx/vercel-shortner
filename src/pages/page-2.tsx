import React from 'react';
import { PageProps, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const SecondPage: React.FC<PageProps> = ({ path }) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 ({path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
