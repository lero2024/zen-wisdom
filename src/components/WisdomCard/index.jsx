import React from 'react';
import './index.css';

const WisdomCard = ({ title, content, source }) => {
  return (
    <div className="wisdom-card">
      <h3 className="wisdom-title">{title}</h3>
      <div className="wisdom-content">{content}</div>
      {source && <div className="wisdom-source">—— {source}</div>}
    </div>
  );
};

export default WisdomCard;
