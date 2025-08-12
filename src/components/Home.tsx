import React from 'react';
import GameContextProvider from '../contexts/GameContextProvider';
import ScreenSwitcher from './ScreenSwitcher';

export default function Home() {
  return (
    <GameContextProvider>
      <ScreenSwitcher />
    </GameContextProvider>
  );
}
