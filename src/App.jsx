import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Wisdom from './pages/Wisdom';
import Meditation from './pages/Meditation';
import Questions from './pages/Questions';
import NotFound from './pages/NotFound';
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wisdom" element={<Wisdom />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
