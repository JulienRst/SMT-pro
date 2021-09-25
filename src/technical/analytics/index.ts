import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';

const analytics = Analytics({
  app: 'SMT-PRO',
  plugins: [
    googleAnalytics({
      trackingId: process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID,
    })
  ]
});

export default analytics;
