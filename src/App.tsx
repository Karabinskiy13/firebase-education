import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default App;
