import './App.css';
import { FiAperture } from 'react-icons/fi';

const App = () => {
  return (
    <div className="App">
      <main>
        <div className="wrapper">
          <span>Now you see me</span>
          <h1>Light</h1>
          <div className="triangle" />
          <a href="#">
            Get Started <FiAperture className="icon" />
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;
