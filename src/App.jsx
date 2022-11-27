import React from 'react';
import hotBg from './assets/hot.jpg';
import coldBg from './assets/cold.jpg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${coldBg})` }}>
      <div className="overlay">
        <div className="container">
          <div className="section section_inputs">
            <input type="text" name="city" placeholder="Enter city..." />
            <button>F</button>
          </div>
          <div className="section section_temperature">
            <div className="icon">
              <h3>London, GB</h3>
              <img src="https://www.modlabs.net/uploads/gallery/blogs/the-cloud.jpg" alt="weatherIcon" />
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>34 C</h1>
            </div>
          </div>
          {/* bottom description */}
        </div>
      </div>
    </div>
  );
}

export default App;
