import React from 'react';
import '../section/section-module.css';
export const Section = ({ title, children }) => (
  <section>
    <h2 className="title">{title}</h2>
    {children}
  </section>
);
