import React, { useState } from 'react';
import './index.css';

const QuestionForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!question.trim()) return;
    
    setIsSubmitting(true);
    
    try {
      await onSubmit(question);
      setQuestion('');
    } catch (error) {
      console.error('提交问题失败:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="question-form-container">
      <h2 className="form-title">问道解惑</h2>
      <p className="form-description">
        提出你的困惑，寻求佛学智慧的指引
      </p>
      
      <form className="question-form" onSubmit={handleSubmit}>
        <textarea
          className="question-input"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="请输入你的问题..."
          rows="4"
          required
        />
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="loading-spinner"></span>
              提交中...
            </>
          ) : '提交问题'}
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;
