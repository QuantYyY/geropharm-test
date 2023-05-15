import React, { FC } from 'react';
import './App.scss'

import Header from './components/Header';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

const App: FC = () => {

  return (
    <>
      <div className='content'>
        <Header />
        <LeftBar />
        <RightBar />
        <Footer />
        <MainContent />
      </div>
      
    </>

  );
}

export default App;
