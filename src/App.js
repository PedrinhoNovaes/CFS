import React from 'react';

import { Footer, Features, WhatGPT3, Header } from './containers';
import { Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    
    <Features />
    <WhatGPT3 />
    <Footer />
  </div>
);

export default App;
