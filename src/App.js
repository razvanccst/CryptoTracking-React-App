import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import Exchanges from './components/Exchanges';
import CryptoDetails from './components/CryptoDetails';
import Cryptocurrencies from './components/Cryptocurrencies';
import News from './components/News';

import './App.css';


function App() {
  return (
    <div className='app'>
        <div className='navbar'>
          <NavBar />  
        </div>
        <div className='main'>
          <Layout>
            <div className='routes'>
                <Routes>
                  <Route exact path='/' element={<Homepage />}>
                    
                  </Route>
                  <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} >
                    
                  </Route>
                  <Route exact path='/exchanges' element={<Exchanges />}>
                    
                  </Route>
                  <Route exact path='/crypto/:coinId' element={<CryptoDetails />}>
                    
                  </Route>
                  <Route exact path='/news' element={<News />}>
                    
                  </Route>
                </Routes>
            </div>
          </Layout>
        <div className='footer'>
          <Typography.Title level={5} style ={{color: 'white', textAlign: 'center'}}>
            CryptoTracking <br />
            All rights Reserver 
            Copywright @
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
        </div>
    </div>
  );
}

export default App;
