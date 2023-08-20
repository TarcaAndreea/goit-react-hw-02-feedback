import React, { useState } from 'react';
import { Section } from './Section/section/section';
import { FeedbackOptions } from './FeedbackOptions/feedback-options';
import { Statistics } from './Statistics/statistics';
import { Notification } from './Notification/notification';
export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setFeedback({
      ...feedback,
      [type]: feedback[type] + 1,
    });
  };
  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((feedback.good / total) * 100) : 0;
  };
  const totalFeedback = countTotalFeedback();

  return (
    <div>
      <Section title="Te rugăm lasă-ne feedback-ul tău!">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistici">
        {totalFeedback ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
