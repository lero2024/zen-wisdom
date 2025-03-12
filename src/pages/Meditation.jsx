import React from 'react';
import MeditationTimer from '../components/MeditationTimer';

const Meditation = () => {
  const meditationGuides = [
    {
      id: 1,
      title: '呼吸冥想',
      steps: [
        '找一个安静的地方坐下，保持背部挺直',
        '闭上眼睛，将注意力集中在呼吸上',
        '感受空气进入和离开身体的感觉',
        '当心思游走时，温和地将注意力带回呼吸',
        '持续练习5-20分钟'
      ]
    },
    {
      id: 2,
      title: '慈心冥想',
      steps: [
        '舒适地坐下，闭上眼睛',
        '开始对自己生起慈爱之心，可以默念："愿我平安，愿我健康，愿我快乐"',
        '然后将这种慈爱扩展到亲人、朋友',
        '再扩展到中立的人、困难的人，最后是所有生命',
        '感受慈爱的温暖遍布全身'
      ]
    },
    {
      id: 3,
      title: '行走冥想',
      steps: [
        '选择一条短而安静的路径',
        '放慢脚步，专注于每一步的感觉',
        '注意脚抬起、移动、落下的过程',
        '保持对身体移动的觉知',
        '当注意力分散时，温和地将其带回到行走的感觉'
      ]
    }
  ];

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">冥想引导</h1>
        <p className="page-description">
          通过冥想培养内在的平静与觉知，让心灵回归本源。
        </p>
      </div>
      
      <section className="meditation-timer-section">
        <h2 className="section-title">冥想计时器</h2>
        <MeditationTimer />
      </section>
      
      <section className="meditation-guides-section">
        <h2 className="section-title">冥想指南</h2>
        <div className="guides-container">
          {meditationGuides.map(guide => (
            <div className="guide-card" key={guide.id}>
              <h3 className="guide-title">{guide.title}</h3>
              <ol className="guide-steps">
                {guide.steps.map((step, index) => (
                  <li key={index} className="guide-step">{step}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
      
      <section className="meditation-tips-section">
        <h2 className="section-title">冥想小贴士</h2>
        <div className="tips-card">
          <ul className="tips-list">
            <li className="tip-item">
              <strong>保持规律：</strong>每天固定时间冥想，哪怕只有几分钟，也比偶尔长时间冥想更有效。
            </li>
            <li className="tip-item">
              <strong>不要期待特定结果：</strong>冥想不是为了达到某种特定状态，而是培养对当下的觉知。
            </li>
            <li className="tip-item">
              <strong>温和对待自己：</strong>当注意力分散时，不要自责，温和地将注意力带回来即可。
            </li>
            <li className="tip-item">
              <strong>舒适但警觉：</strong>保持舒适的姿势，但避免过于放松而陷入昏沉。
            </li>
            <li className="tip-item">
              <strong>融入生活：</strong>将冥想的觉知带入日常活动，如吃饭、走路、洗碗等。
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Meditation;
