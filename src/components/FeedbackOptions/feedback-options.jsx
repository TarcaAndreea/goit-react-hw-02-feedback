import React from 'react';
import styles from './feedback-options.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.buttonSection}>
      {options.map(option => (
        <button
          className={styles.button}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
