import React, { useState } from 'react';
import { useMatchedContext } from '../contexts/useMatchedContext';
import useGameReset from '../hooks/useGameReset';
import randomArrayGenerator from '../randomArrayGenerator';
import FlipsText from './FlipsText';
import GameScreen from './GameScreen';
import WinScreen from './WinScreen';
import PlayAgainButton from './buttons/PlayAgainButton';

export default function ScreenSwitcher() {
  const [flips, setFlips] = useState<number>(0);
  const [order, setOrder] = useState<number[]>(randomArrayGenerator);
  const { isGameWon } = useMatchedContext();

  const resetGame = useGameReset(setFlips, setOrder);

  return (
    <>
      {isGameWon ? (
        <WinScreen>
          <FlipsText flips={flips} />
          <PlayAgainButton handlePress={resetGame} />
        </WinScreen>
      ) : (
        <GameScreen
          flips={flips}
          setFlips={setFlips}
          order={order}
        />
      )}
    </>
  );
}
