import React from 'react';
import './index.css';

const parseAnswerText = (text) => {
  // 首先按换行符分割文本
  let lines = text.split('\n');
  let parsed = '';
  let inList = false;
  let listType = null; // 'ol' or 'ul'

  // 处理每一行
  lines.forEach((line, index) => {
    // 解析**粗体**为标题
    line = line.replace(/\*\*(.*?)\*\*/g, '<h3>$1</h3>');
    
    // 添加高亮样式
    line = line.replace(/《(.*?)》/g, '<span class="highlight">$1</span>');

    // 处理列表
    if (line.match(/^\d+\./)) {
      // 数字列表
      if (!inList || listType !== 'ol') {
        if (inList) parsed += `</${listType}>`;
        parsed += '<ol>';
        inList = true;
        listType = 'ol';
      }
      parsed += `<li>${line.replace(/^\d+\.\s*/, '')}</li>`;
    } else if (line.match(/^-/)) {
      // 普通列表
      if (!inList || listType !== 'ul') {
        if (inList) parsed += `</${listType}>`;
        parsed += '<ul>';
        inList = true;
        listType = 'ul';
      }
      parsed += `<li>${line.replace(/^-\s*/, '')}</li>`;
    } else {
      // 非列表内容
      if (inList) {
        parsed += `</${listType}>`;
        inList = false;
      }
      if (line.trim()) {
        parsed += `<p>${line}</p>`;
      }
    }
  });

  // 确保所有列表都正确关闭
  if (inList) {
    parsed += `</${listType}>`;
  }

  return parsed;
};

const Answer = ({ question, answer, date }) => {
  const parsedAnswer = parseAnswerText(answer);

  return (
    <div className="answer-card">
      <div className="question-section">
        <h3 className="question-label">问题</h3>
        <p className="question-text">{question}</p>
        {date && <div className="question-date">{date}</div>}
      </div>
      
      <div className="answer-section">
        <h3 className="answer-label">解答</h3>
        <div 
          className="answer-text"
          dangerouslySetInnerHTML={{ __html: parsedAnswer }}
        />
      </div>
    </div>
  );
};

export default Answer;
