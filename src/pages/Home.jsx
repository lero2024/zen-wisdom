import React from 'react';
import { Link } from 'react-router-dom';
import WisdomCard from '../components/WisdomCard';

const Home = () => {
  const featuredWisdom = [
    {
      id: 1,
      title: '当下的力量',
      content: '过去已逝，未来未至，唯有当下是真实存在的。学会活在当下，感受每一刻的存在，是通往内心平静的关键。',
      source: '佛陀教诲'
    },
    {
      id: 2,
      title: '放下执着',
      content: '一切烦恼皆源于执着。执着于物质、名誉、情感，都会带来痛苦。学会放下，才能获得真正的自由。',
      source: '心经'
    }
  ];

  return (
    <div className="container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">禅境</h1>
          <p className="hero-subtitle">简约哲学 · 随时问道解惑</p>
          <p className="hero-description">
            在繁忙的现代生活中，找到内心的平静与智慧。禅境带你探索佛学的精髓，以简约的方式融入日常。
          </p>
          <div className="hero-buttons">
            <Link to="/wisdom" className="btn primary-btn">探索智慧</Link>
            <Link to="/questions" className="btn secondary-btn">问道解惑</Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">探索禅境</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon wisdom-icon"></div>
            <h3 className="feature-title">佛学智慧</h3>
            <p className="feature-description">
              探索佛陀教诲、禅宗公案和经典智慧，以简明易懂的方式呈现深刻的哲理。
            </p>
            <Link to="/wisdom" className="feature-link">了解更多</Link>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon meditation-icon"></div>
            <h3 className="feature-title">冥想引导</h3>
            <p className="feature-description">
              简单实用的冥想技巧和引导，帮助你平静心灵，培养专注力和内在觉知。
            </p>
            <Link to="/meditation" className="feature-link">开始冥想</Link>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon question-icon"></div>
            <h3 className="feature-title">问道解惑</h3>
            <p className="feature-description">
              提出你的困惑与问题，获得基于佛学智慧的解答和指引，帮助你面对生活挑战。
            </p>
            <Link to="/questions" className="feature-link">提问解惑</Link>
          </div>
        </div>
      </section>

      <section className="wisdom-section">
        <h2 className="section-title">智慧片段</h2>
        <div className="wisdom-grid">
          {featuredWisdom.map(wisdom => (
            <WisdomCard
              key={wisdom.id}
              title={wisdom.title}
              content={wisdom.content}
              source={wisdom.source}
            />
          ))}
        </div>
        <div className="text-center">
          <Link to="/wisdom" className="btn">查看更多</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
