import React from 'react';

export default ({ customClass, children }) => (
  <div className={`row ${customClass || ''}`}>
    {' '}
    {children}
    {' '}
  </div>
);
