import React from 'react';
import '../Statistics/style-statistics-module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className="list">
      <li className="list__item">Good: {good}</li>
      <li className="list__item">Neutral: {neutral}</li>
      <li className="list__item">Bad: {bad}</li>
      <li className="list__item">Total: {total}</li>
      <li className="list__item">Pozitive Percentage: {positivePercentage}%</li>
    </ul>
  );
};
