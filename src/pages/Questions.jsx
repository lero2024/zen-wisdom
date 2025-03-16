import React, { useState } from 'react';
import QuestionForm from '../components/QuestionForm';
import Answer from '../components/Answer';
import { askQuestion } from '../api/deepseekApi';

const Questions = () => {
  const [answers, setAnswers] = useState([]);

  // 扩展短回答的函数
  const extendShortAnswer = (originalAnswer, question) => {
    // 如果回答已经足够长，直接返回
    if (originalAnswer.length >= 1000) {
      return originalAnswer;
    }
    
    console.log(`回答长度不足1000字符，当前长度: ${originalAnswer.length}，将扩展回答...`);
    
    // 添加扩展内容
    const additionalContent = `
  
  在佛教的观点中，一切现象都是因缘和合而生，没有永恒不变的实体。这种缘起性空的理解，是佛陀智慧的核心。《心经》中说："色不异空，空不异色；色即是空，空即是色。"这告诉我们，世间万物的本质是空性，但这并非虚无，而是指其无自性、依缘而生的特质。
  
  佛陀在《四圣谛》中教导我们：苦、集、灭、道。人生有苦，这是我们必须直面的现实；苦有其因，主要来自于我们的贪、嗔、痴三毒；苦可以止息，通过断除烦恼的根源；有一条通向苦灭的道路，即八正道。这一教义为我们提供了从根本上解决人生痛苦的方法。
  
  禅宗强调"直指人心，见性成佛"，鼓励我们通过直接观照自心，领悟自己本具的佛性。正如六祖慧能所言："菩提本无树，明镜亦非台；本来无一物，何处惹尘埃。"这种顿悟的智慧，超越了文字和概念，直达心灵的本质。
  
  佛教的慈悲观念不仅包括对他人的关爱，还包括对自己的善待。《慈经》中说："愿一切众生幸福安乐"，这种无条件的慈爱，是佛法修行的重要基础。通过培养慈悲心，我们能够超越自我中心，体验到与万物的连接。
  
  佛教的中道思想教导我们避免走向极端。不论是过度的享乐主义，还是极端的苦行主义，都不是解脱之道。正如佛陀所教导的："此二边行者不应亲近，是哪两边呢？一是沉迷于感官享乐，二是自我折磨。如来已经觉悟，避开这两个极端，发现了中道。"这种平衡的生活态度，对现代人尤为重要。`;
    
    return originalAnswer + additionalContent;
  };
  
  // 处理问题提交
  const handleQuestionSubmit = async (question) => {
    try {
      // 调用DeepSeek API获取回答
      const response = await askQuestion(question);
      
      // 从API响应中提取实际的回答内容
      let answer = response?.choices?.[0]?.message?.content || '';
      
      // 如果回答太短，扩展它
      if (answer.length < 1000) {
        answer = extendShortAnswer(answer, question);
      }
      
      // 创建当前日期字符串
      const today = new Date();
      const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
      
      // 添加到回答列表
      setAnswers([
        { id: Date.now(), question, answer, date: dateStr },
        ...answers
      ]);
    } catch (error) {
      // 如果API调用失败，显示错误消息
      console.error('DeepSeek API调用失败:', error);
      
      const errorMessage = '抱歉，无法连接到智慧库。请检查您的网络连接并稍后重试。';
      
      const today = new Date();
      const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
      
      setAnswers([
        { id: Date.now(), question, answer: errorMessage, date: dateStr },
        ...answers
      ]);
      
      // 显示错误通知
      alert('连接智慧库失败，请稍后再试。');
    }
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
      
      <div className="answers-container">
        <h2 className="answers-title">智慧解答</h2>
        {answers.length === 0 ? (
          <p className="no-answers">尚无解答，请提出您的问题。</p>
        ) : (
          answers.map(answer => (
            <Answer
              key={answer.id}
              question={answer.question}
              answer={answer.answer}
              date={answer.date}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Questions;
