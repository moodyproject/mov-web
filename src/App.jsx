import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DataAnalytics from './pages/DataAnalytics';
import TrainingPrograms from './pages/TrainingPrograms';
import CommandCenter from './pages/CommandCenter';
import About from './pages/About';
import Contact from './pages/Contact';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/training-programs" element={<TrainingPrograms />} />
        <Route path="/command-center" element={<CommandCenter />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
