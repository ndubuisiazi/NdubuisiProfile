import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/App.css';
import Home from './Home';
import BoA from './WorkHistory/BoA';
import MUFG from './WorkHistory/MUFG';
import Regions from './WorkHistory/Regions';
import JPMC from './WorkHistory/JPMC';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/boa' element={<BoA/>}/>
          <Route path='/mufg' element={<MUFG/>}/>
          <Route path='/regions' element={<Regions/>}/>
          <Route path='/JPMC' element={<JPMC/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
