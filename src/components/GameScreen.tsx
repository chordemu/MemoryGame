import React from 'react';
import FlipsText from './FlipsText';
import ScreenContainer from './ScreenContainer';
import CardDisplay from './CardDisplay';

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
      <CardDisplay setFlips={setFlips} order={order} />
    </ScreenContainer>
  );
}
