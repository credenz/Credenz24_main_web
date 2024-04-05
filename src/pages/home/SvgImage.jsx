import React from 'react';

const SvgImage = ({ sources }) => {
  return (
    <div className='h-screen'>
      {sources.map((src, index) => (
        <svg
          key={index}
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image href={src}  />
        </svg>
      ))}
    </div>
  );
};

export default SvgImage;
