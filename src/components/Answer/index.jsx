import React from 'react';
import './index.css';

const Answer = ({ question, answer, date }) => {
  return (
    <div className="answer-card">
      <div className="question-section">
        <h3 className="question-label">问题</h3>
        <p className="question-text">{question}</p>
        {date && <div className="question-date">{date}</div>}
      </div>
      
      <div className="answer-section">
        <h3 className="answer-label">解答</h3>
        <p className="answer-text">{answer}</p>
      </div>
    </div>
  );
};

export default Answer;
