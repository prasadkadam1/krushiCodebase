import React from 'react';

const Button = ({ children, onClick, className = '', type = 'button', ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-semibold rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition transform hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
