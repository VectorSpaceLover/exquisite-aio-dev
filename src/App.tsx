import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home'
import { AppProvider } from './provider/AppProvider'
import CorderArt from './layouts/_app'
import { Login } from './pages';
import './styles/index.scss';

function App() {
  return (
    <CorderArt props = {{}}>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </AppProvider>
    </CorderArt>
  );
}

export default App;
