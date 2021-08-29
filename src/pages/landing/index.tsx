import Hero from 'components/hero';
import Introduction from 'components/introduction';
import Jobs from 'components/jobs';
import React from 'react';
import Layout from '../../layout/main';

const LandingPage: React.FC = () => {
  return <Layout>
    <Hero />
    <Introduction />
    <Jobs />
  </Layout>;
}

export default LandingPage;
