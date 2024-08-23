import React from 'react';

export const Layout = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const Button = ({ children, className, size }) => (
  <button className={`${className} ${size === 'lg' ? 'text-lg px-6 py-3' : 'px-4 py-2'}`}>{children}</button>
);

export const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`}>{children}</div>
);

export const List = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const Avatar = ({ children, className }) => (
  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${className}`}>{children}</div>
);

export const Switch = ({ checked, onChange, className }) => (
  <button
    type="button"
    className={`${className} ${
      checked ? 'bg-blue-600' : 'bg-gray-200'
    } relative inline-flex h-6 w-11 items-center rounded-full`}
    role="switch"
    aria-checked={checked}
    onClick={onChange}
  >
    <span className="sr-only">Toggle dark mode</span>
    <span
      className={`${
        checked ? 'translate-x-6' : 'translate-x-1'
      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
    />
  </button>
);