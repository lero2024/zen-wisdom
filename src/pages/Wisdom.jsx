import React, { useState } from 'react';
import WisdomCard from '../components/WisdomCard';

const Wisdom = () => {
  const [filter, setFilter] = useState('all');
  
  const wisdomData = [
    {
      id: 1,
      category: 'teachings',
      title: '四圣谛',
      content: '佛陀的核心教导是四圣谛：苦谛（生活中存在苦）、集谛（苦的原因是欲望和执着）、灭谛（苦可以被消除）、道谛（通过八正道可以消除苦）。这些真理是佛教实践的基础。',
      source: '佛陀教诲'
    },
    {
      id: 2,
      category: 'zen',
      title: '禅宗公案：空手而来',
      content: '达摩祖师来到中国，梁武帝问他："朕自即位以来，建造寺庙、抄写经书、供养僧人，有何功德？"达摩回答："并无功德。"这个公案教导我们，真正的修行不在外在形式，而在内心的觉醒。',
      source: '禅宗公案'
    },
    {
      id: 3,
      category: 'sutras',
      title: '心经精髓',
      content: '"色不异空，空不异色；色即是空，空即是色。"这句话揭示了佛教对现象世界和空性的深刻理解，教导我们超越二元对立，认识一切现象的本质。',
      source: '心经'
    },
    {
      id: 4,
      category: 'teachings',
      title: '无常',
      content: '一切都在变化，没有什么是永恒的。理解无常的本质，不执着于事物的永恒性，是获得内心平静的关键。当我们接受变化是生命的本质，我们就能更好地面对生活中的起伏。',
      source: '佛陀教诲'
    },
    {
      id: 5,
      category: 'zen',
      title: '禅宗公案：喝茶去',
      content: '赵州禅师被问及"什么是禅？"他回答说："吃饭穿衣。"又被问："这不是很平常吗？"他说："是的，但不是每个人都能真正做到。"这教导我们禅就在日常生活中，关键是保持觉知。',
      source: '禅宗公案'
    },
    {
      id: 6,
      category: 'sutras',
      title: '金刚经的智慧',
      content: '"一切有为法，如梦幻泡影，如露亦如电，应作如是观。"这句话提醒我们世间一切现象都是短暂的、无常的，就像梦境、幻觉、水泡、影子、露水和闪电一样。',
      source: '金刚经'
    },
    {
      id: 7,
      category: 'teachings',
      title: '中道',
      content: '佛陀教导中道，避免极端的苦行和极端的享乐，走一条平衡的道路。这种平衡不仅适用于修行，也适用于我们日常生活中的各个方面，帮助我们保持平静和智慧。',
      source: '佛陀教诲'
    },
    {
      id: 8,
      category: 'zen',
      title: '禅宗公案：庭前柏树',
      content: '有僧问赵州："佛法的要义是什么？"赵州回答："庭前柏树子。"这个公案指向直接体验的重要性，真理就在眼前，不在遥远的概念中。',
      source: '禅宗公案'
    }
  ];
  
  const filteredWisdom = filter === 'all' 
    ? wisdomData 
    : wisdomData.filter(item => item.category === filter);
  
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">佛学智慧</h1>
        <p className="page-description">
          探索佛陀教诲、禅宗公案和经典智慧，以简明易懂的方式呈现深刻的哲理。
        </p>
      </div>
      
      <div className="filter-container">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          全部
        </button>
        <button 
          className={`filter-btn ${filter === 'teachings' ? 'active' : ''}`}
          onClick={() => setFilter('teachings')}
        >
          佛陀教诲
        </button>
        <button 
          className={`filter-btn ${filter === 'zen' ? 'active' : ''}`}
          onClick={() => setFilter('zen')}
        >
          禅宗公案
        </button>
        <button 
          className={`filter-btn ${filter === 'sutras' ? 'active' : ''}`}
          onClick={() => setFilter('sutras')}
        >
          经典智慧
        </button>
      </div>
      
      <div className="wisdom-grid">
        {filteredWisdom.map(wisdom => (
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
