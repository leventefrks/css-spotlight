import './App.css';
import { FiAperture } from 'react-icons/fi';
import { BiSun, BiMoon } from 'react-icons/bi';
import { useState, useEffect } from 'react';

const App = () => {
  const [theme, setDarkMode] = useState('light');

  const toggleDarkMode = () => {
    if (theme === 'light') {
      setDarkMode('dark');
    } else {
      setDarkMode('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <main>
        <div className="wrapper">
          <span className="sub-title">
            {theme === 'light' ? 'Now you see me' : 'Now you dont'}
          </span>
          <h1>Light</h1>
          <div className="triangle" />
          <a href="#">
            Get Started <FiAperture className="icon" />
          </a>
          <button className="theme" onClick={() => toggleDarkMode()}>
            {theme === 'dark' ? (
              <span>
                Dark mode <BiMoon className="icon" />
              </span>
            ) : (
              <span>
                Light mode <BiSun className="icon" />
              </span>
            )}
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
