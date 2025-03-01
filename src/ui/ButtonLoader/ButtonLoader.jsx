import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

const ButtonLoader = ({ height, width }) => {
  return (
    <CirclesWithBar
      height={height}
      width={width}
      color="#ffffff"
      wrapperStyle={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      visible={true}
      ariaLabel="circles-with-bar-loading"
    />
  );
};

export default ButtonLoader;
