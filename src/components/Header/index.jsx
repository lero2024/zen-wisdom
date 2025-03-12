import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          禅境
        </Link>
        
        <button className="menu-toggle" onClick={toggleMenu} aria-label="菜单">
          <span className={`menu-icon ${menuOpen ? 'open' : ''}`}></span>
        </button>
        
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>
                首页
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/wisdom" className={`nav-link ${isActive('/wisdom')}`} onClick={closeMenu}>
                佛学智慧
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/meditation" className={`nav-link ${isActive('/meditation')}`} onClick={closeMenu}>
                冥想引导
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/questions" className={`nav-link ${isActive('/questions')}`} onClick={closeMenu}>
                问道解惑
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
