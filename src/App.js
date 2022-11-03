import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Registration from './pages/Registration/Registration';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes path="/" element={<App />}>
        <Route index element={<Registration />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
