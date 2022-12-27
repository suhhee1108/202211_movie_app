import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

/* 교재와 다른 부분
   Route 는 Routes로 감싸야함.
   Route의 component가 element로 변경됨.
*/
function App() {
    return (
      <HashRouter>
        <Navigation />
        <Routes>        
          <Route path='/'      exact={true} element={<Home />} />
          <Route path='/about'        element={<About />} />
          <Route path='/movie-detail' element={<Detail />} />
        </Routes>
      </HashRouter>
    );
}

export default App;
