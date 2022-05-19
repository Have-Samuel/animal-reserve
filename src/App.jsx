/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailsPage from './components/pages/Details';
import HomePage from './components/pages/Home';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </Router>
  );
}

export default App;
