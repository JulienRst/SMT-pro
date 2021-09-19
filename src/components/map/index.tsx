import React from 'react';
import config from 'config';
import styles from './index.module.scss';
import GoogleMapReact from 'google-map-react';
import images from 'ui/images';

interface ComponentToMapProps {
  lat: number;
  lng: number;
}

const defaultLocation = {
  lat: 45.59661812174074,
  lng: 5.093516103647361
}

const ComponentToMap: React.FC<ComponentToMapProps> = () => {
  return (
    <img className={styles.marker} src={images.Marker} alt="marker" />
  );
} 

const Map: React.FC = () => {
  return (
    <div className={styles.map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: config.googleMapApiKey }}
        defaultCenter={defaultLocation}
        defaultZoom={16}
      >
        <ComponentToMap {...defaultLocation} />
      </GoogleMapReact>
    </div>
  );
}

export default Map;