import React, { useState } from 'react';
import { useMatchedContext } from '../contexts/useMatchedContext';
import TurnType from '../types/TurnType';
import GameScreen from './GameScreen';
import WinScreen from './WinScreen';
import PlayAgainButton from './buttons/PlayAgainButton';
import randomArrayGenerator from '../randomArrayGenerator';
import useGameReset from '../hooks/useGameReset';
import FlipsText from './FlipsText';

export default function ScreenSwitcher() {
  const [turn, setTurn] = useState<TurnType>('first');
  const [flips, setFlips] = useState<number>(0);
  const [order, setOrder] = useState<number[]>(randomArrayGenerator);
  const { isGameWon } = useMatchedContext();

  const resetGame = useGameReset(setTurn, setFlips, setOrder);

  return (
    <>
      {isGameWon ? (
        <WinScreen>
          <FlipsText flips={flips} />
          <PlayAgainButton handlePress={resetGame} />
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
}
