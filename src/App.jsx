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
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    console.log('App mounted');
    console.log('Current route:', window.location.pathname);
    console.log('Environment:', process.env.NODE_ENV);
  }, []);

  if (error) {
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h1>Something went wrong</h1>
        <pre>{error.toString()}</pre>
      </div>
    );
  }

  return (
    <div className="app" style={{ backgroundColor: '#f8f8f8', minHeight: '100vh' }}>
      <Header />
      <main className="main-content" style={{ flex: 1, padding: '20px' }}>
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
