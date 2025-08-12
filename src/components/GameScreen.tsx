import React from 'react';
import FlipsText from './FlipsText';
import GameDisplay from './GameDisplay';
import ScreenContainer from './ScreenContainer';

type GameScreenProps = {
  flips: number;
  setFlips: React.Dispatch<React.SetStateAction<number>>;
  order: number[];
};

export default function GameScreen({
  flips,
  setFlips,
  order,
}: GameScreenProps) {
  return (
    <ScreenContainer>
      <FlipsText flips={flips} />
      <GameDisplay
        setFlips={setFlips}
        order={order}
      />
    </ScreenContainer>
  );
}
