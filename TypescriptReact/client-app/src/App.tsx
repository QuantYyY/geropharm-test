import React, { FC, useEffect } from 'react';
import './App.scss'

import Header from './components/Header';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

import { useAppDispatch } from './hook';
import { getPosts } from './store/postsSlice';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts({limit: 0, offset: 0}))
  })

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
