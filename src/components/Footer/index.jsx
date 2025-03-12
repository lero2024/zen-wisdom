import React from 'react';
import './index.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">禅境</h3>
            <p className="footer-description">
              简约哲学，随时问道解惑。让佛学智慧融入生活的每一刻。
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">快速链接</h3>
            <ul className="footer-links">
              <li><a href="#/">首页</a></li>
              <li><a href="#/wisdom">佛学智慧</a></li>
              <li><a href="#/meditation">冥想引导</a></li>
              <li><a href="#/questions">问道解惑</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} 禅境 | 简约哲学 随时问道解惑
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
