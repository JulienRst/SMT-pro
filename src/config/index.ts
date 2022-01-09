
if (!process.env.REACT_APP_GOOGLE_MAP_API_KEY) {
  throw new Error('REACT_APP_GOOGLE_MAP_API_KEY is not set');
}

const config = {
  email: 'smt@smt-pro.fr',
  phone: '0472485973', // technical use
  dspPhone: '04 72 48 59 73', // use for display
  address: 'ZA Grange Neuve 38790 Diemoz',
  googleMapApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
};

export default config;