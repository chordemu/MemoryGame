import React from 'react';
import GameContextProvider from '../contexts/GameContextProvider';
import ScreenSwitcher from './ScreenSwitcher';

const Home = ({}) => {
  return (
    <GameContextProvider>
      <ScreenSwitcher />
    </GameContextProvider>
  );
};

export default Home;
