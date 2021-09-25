import React from 'react';
import { Redirect, useParams } from 'react-router';
import analytics from 'technical/analytics';

interface FromSourceCallBackRouteParams {
  source: 'visit-card' | 'van';
}

const FromSourceCallBack: React.FC = () => {
  const { source } = useParams<FromSourceCallBackRouteParams>();

  analytics.track('visit-from-qr-code', {
    category: source,
  });
  

  return <Redirect to='/' />;
}

export default FromSourceCallBack;