import React, { useState } from 'react';
import { useMatchedContext } from '../contexts/useMatchedContext';
import randomArray from '../randomArrayGenerator';
import TurnType from '../types/TurnType';
import GameScreen from './GameScreen';
import WinScreen from './WinScreen';
import PlayAgainButton from './buttons/PlayAgainButton';

const ScreenSwitcher = () => {
  const [turn, setTurn] = useState<TurnType>('first');
  const [flips, setFlips] = useState<number>(0);
  const [order, setOrder] = useState<number[]>(randomArray);
  const { isGameWon } = useMatchedContext();

  return (
    <>
      {isGameWon ? (
        <WinScreen>
          <WinScreen.FinalFlipsText flips={flips} />
          <PlayAgainButton
            setTurn={setTurn}
            setFlips={setFlips}
            setOrder={setOrder}
          />
        </WinScreen>
      ) : (
        <GameScreen
          turn={turn}
          setTurn={setTurn}
          flips={flips}
          setFlips={setFlips}
          order={order}
        />
      )}
    </>
  );
};

export default ScreenSwitcher;
