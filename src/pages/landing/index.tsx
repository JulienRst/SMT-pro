import React, { useEffect, useRef } from 'react';
import Layout from '../../layout/main';
import { useParams } from 'react-router-dom';
import Routes from 'routes';
import analytics from 'technical/analytics';
// Landing Part
import Jobs from 'components/jobs';
import Hero from 'components/hero';
import Introduction from 'components/introduction';
import Works from 'components/works';
import Contact from 'components/contact';

interface LandingPageRouteParams {
  slug: Routes;
}

const LandingPage: React.FC = () => {
  const { slug } = useParams<LandingPageRouteParams>();

  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Run Analytics
    analytics.page();
    // Check that slug is one of the correct value
    if (Object.values(Routes).includes(slug)) {
      scrollableRef.current?.scrollTo({ top: (document.getElementById(slug)?.offsetTop || 0) - 60, behavior: 'smooth' });
    }
  }, [slug])


  return <Layout scrollableRef={scrollableRef}>
    <Hero />
    <Introduction />
    <Jobs />
    <Works />
    <Contact />
  </Layout>;
}

export default LandingPage;
