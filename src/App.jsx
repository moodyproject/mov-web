import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import DataAnalytics from './pages/DataAnalytics';
import TrainingPrograms from './pages/TrainingPrograms';
import CommandCenter from './pages/CommandCenter';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/training-programs" element={<TrainingPrograms />} />
        <Route path="/command-center" element={<CommandCenter />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
