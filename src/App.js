import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ColorPick from './components/RandomColor';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Click from './components/Click';
import Facts from './components/Facts';
import PhotoSearch from './components/PhotoSearch';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <HomePage />
        <Routes>
          <Route path="/click" element={<Click />} />
          <Route path="/photosearch" element={<PhotoSearch />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/hues" element={<ColorPick />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
