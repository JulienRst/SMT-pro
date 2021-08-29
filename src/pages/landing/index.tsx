import React, { useEffect, useRef } from 'react';
import Layout from '../../layout/main';
import { useParams } from 'react-router-dom';
import Routes from 'routes';
// Landing Part
import Jobs from 'components/jobs';
import Hero from 'components/hero';
import Introduction from 'components/introduction';
import Works from 'components/works';

interface LandingPageRouteParams {
  slug: Routes.Smt | Routes.Jobs;
}

const LandingPage: React.FC = () => {
  const { slug } = useParams<LandingPageRouteParams>();

  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check that slug is one of the correct value
    if (Object.values(Routes).includes(slug)) {
      scrollableRef.current?.scrollTo({ top: document.getElementById(slug)?.offsetTop, behavior: 'smooth' });
    }
  }, [slug])


  return <Layout scrollableRef={scrollableRef}>
    <Hero />
    <Introduction />
    <Jobs />
    <Works />
  </Layout>;
}

export default LandingPage;
