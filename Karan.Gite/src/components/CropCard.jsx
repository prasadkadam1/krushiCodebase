import React from 'react';

const CropCard = ({ img, alt, title, desc, onClick }) => {
  return (
    <div
      className="rounded-lg overflow-hidden cursor-pointer m-4"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
      role="button"
      aria-label={`${title} crop card`}
    >
      <img
        src={img}
        alt={alt}
        loading="lazy"
        className="w-full h-64 object-cover"
        style={{ transform: 'scale(1.2)', transformOrigin: 'center' }}
      />
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold text-yellow-900">{title}</h3>
        <p className="text-yellow-700 text-base mt-2">{desc}</p>
      </div>
    </div>
  );
};

export default CropCard;
