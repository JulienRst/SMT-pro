import { useState, useEffect } from 'react';

//https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

interface WindowDimension {
  width: number;
  height: number;
}

function getWindowDimensions(): WindowDimension {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimension>(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
} 