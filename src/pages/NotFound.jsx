import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">页面未找到</h2>
        <p className="not-found-text">
          "一切有为法，如梦幻泡影"<br />
          你所寻找的页面已不复存在
        </p>
        <Link to="/" className="btn not-found-btn">返回首页</Link>
      </div>
    </div>
  );
};

export default NotFound;
