import React from 'react';
import WisdomCard from '../components/WisdomCard';

const Wisdom = () => {
  const wisdomData = [
    {
      id: 1,
      title: '四圣谛',
      content: '苦、集、灭、道。了知苦，断除集，证得灭，修习道。',
      source: '佛陀教诲'
    },
    {
      id: 2,
      title: '空手而来',
      content: '达摩面见梁武帝。帝问："朕自即位以来，造寺写经度僧，有何功德？"达摩答："实无功德。"',
      source: '禅宗公案'
    },
    {
      id: 3,
      title: '心经',
      content: '色不异空，空不异色；色即是空，空即是色。',
      source: '般若波罗蜜多心经'
    },
    {
      id: 4,
      title: '无常',
      content: '诸行无常，是生灭法；生灭灭已，寂灭为乐。',
      source: '涅槃经'
    },
    {
      id: 5,
      title: '喝茶去',
      content: '赵州和尚，僧问："如何是祖师西来意？"师曰："庭前柏树子。"',
      source: '禅宗公案'
    },
    {
      id: 6,
      title: '金刚经',
      content: '一切有为法，如梦幻泡影，如露亦如电，应作如是观。',
      source: '金刚经'
    }
  ];
  
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">智</h1>
      </div>
      
      <div className="wisdom-grid">
        {wisdomData.map(wisdom => (
          <WisdomCard
            key={wisdom.id}
            title={wisdom.title}
            content={wisdom.content}
            source={wisdom.source}
          />
        ))}
      </div>
    </div>
  );
};

export default Wisdom;
