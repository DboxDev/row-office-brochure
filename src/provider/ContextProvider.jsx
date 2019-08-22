import React, { useState, useEffect } from 'react';
import Context from 'config/Context';

function ContextProvider({ children }) {
  const [windowDimensions, setWindowDimensions] = useState(null);

  const updateWindowDimensions = () => {
    const width =
      window.innerWidth ||
      Math.max(document.documentElement.clientWidth, document.body.clientWidth);
    const height =
      window.innerHeight ||
      Math.max(document.documentElement.clientHeight, document.body.clientHeight);
    const dimensions = { windowDimensions: { width, height } };
    setWindowDimensions(dimensions);
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  return (
    <Context.Provider
      value={{
        state: { windowDimensions }
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
