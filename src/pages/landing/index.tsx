import Hero from 'components/hero';
import Introduction from 'components/introduction';
import React from 'react';
import Layout from '../../layout/main';

const LandingPage: React.FC = () => {
  return <Layout>
    <Hero />
    <Introduction />
  </Layout>;
}

export default LandingPage;
