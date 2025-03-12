import React, { useState } from 'react';
import QuestionForm from '../components/QuestionForm';
import Answer from '../components/Answer';

const Questions = () => {
  const [answers, setAnswers] = useState([]);
  
  // 预设的回答数据库
  const answerDatabase = {
    '如何开始冥想': '冥想可以从简单的呼吸观察开始。找一个安静的地方，舒适地坐下，将注意力放在呼吸上。当心思游走时，温和地将注意力带回呼吸。每天坚持5-10分钟，逐渐增加时间。重要的是保持规律，而不是一次冥想很长时间。',
    
    '如何放下执着': '放下执着是一个逐渐的过程。首先要认识到执着的本质及其带来的痛苦。通过冥想观察自己的念头和情绪，不与它们认同。培养"看见但不执取"的能力。理解无常的道理，知道一切都在变化，没有什么值得永远执着。最后，通过慈心和感恩，将注意力转向正面的品质。',
    
    '如何面对生活中的挫折': '佛学教导我们，挫折是生活的一部分，是我们成长的机会。首先接受现实，不逃避也不抗拒。理解缘起法则，知道一切都有其原因和条件。保持内心的平静，不被外界的起伏所动摇。从挫折中学习，看到它带来的智慧和成长。最后，培养慈悲心，不仅对他人，也对自己温柔以待。',
    
    '如何理解空性': '空性（Śūnyatā）是佛教中最深奥的概念之一，指一切现象都没有固有、独立的自性，都是因缘和合而生。理解空性不是说事物不存在，而是它们不以我们想象的方式存在。通过禅修和智慧观察，我们可以逐渐体会到这种超越概念的直接经验。空性的理解能帮助我们减少执着，获得更大的自由。'
  };
  
  // 通用回答，当没有匹配到特定问题时使用
  const genericAnswers = [
    '这是一个深刻的问题。佛陀教导我们，通过观察自己的心，培养正念和智慧，我们能找到内心的平静。建议你可以通过冥想和阅读经典来进一步探索这个问题。',
    
    '在佛教的观点中，一切现象都是因缘和合而生，没有永恒不变的实体。理解这一点可以帮助我们减少执着，面对生活中的变化。继续保持觉知和探索的心态，答案会逐渐显现。',
    
    '佛学教导我们中道的重要性，避免走向极端。在日常生活中保持觉知，观察自己的念头和情绪，不被它们所控制，这是修行的核心。随着实践的深入，你会获得更多的智慧和洞见。',
    
    '这个问题涉及到我们如何看待自己和世界。佛陀鼓励我们不要盲目相信，而是通过自己的体验和智慧来验证真理。建议你保持开放的心态，通过冥想和反思来探索这个问题的答案。'
  ];
  
  const handleQuestionSubmit = (question) => {
    // 检查是否有匹配的预设回答
    let answer = '';
    
    // 简单的关键词匹配
    for (const key in answerDatabase) {
      if (question.toLowerCase().includes(key.toLowerCase()) || 
          key.toLowerCase().includes(question.toLowerCase())) {
        answer = answerDatabase[key];
        break;
      }
    }
    
    // 如果没有匹配到，使用通用回答
    if (!answer) {
      const randomIndex = Math.floor(Math.random() * genericAnswers.length);
      answer = genericAnswers[randomIndex];
    }
    
    // 创建当前日期字符串
    const today = new Date();
    const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
    
    // 添加到回答列表
    setAnswers([
      { id: Date.now(), question, answer, date: dateStr },
      ...answers
    ]);
  };
  
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">问道解惑</h1>
        <p className="page-description">
          提出你的困惑与问题，获得基于佛学智慧的解答和指引。
        </p>
      </div>
      
      <QuestionForm onSubmit={handleQuestionSubmit} />
      
      {answers.length > 0 && (
        <section className="answers-section">
          <h2 className="section-title">智慧解答</h2>
          {answers.map(item => (
            <Answer
              key={item.id}
              question={item.question}
              answer={item.answer}
              date={item.date}
            />
          ))}
        </section>
      )}
      
      {answers.length === 0 && (
        <section className="no-answers-section">
          <div className="no-answers-message">
            <h3>尚未有问题解答</h3>
            <p>请在上方提出你的问题，寻求佛学智慧的指引。</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Questions;
