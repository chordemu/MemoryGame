import React from 'react';
import TurnType from '../types/TurnType';
import FlipsText from './FlipsText';
import GameDisplay from './GameDisplay';
import ScreenContainer from './ScreenContainer';

type GameScreenProps = {
  turn: TurnType;
  setTurn: React.Dispatch<React.SetStateAction<TurnType>>;
  flips: number;
  setFlips: React.Dispatch<React.SetStateAction<number>>;
  order: number[];
};

const GameScreen: React.FC<GameScreenProps> = ({
  turn,
  setTurn,
  flips,
  setFlips,
  order,
}) => {
  return (
    <ScreenContainer>
      <FlipsText flips={flips} />
      <GameDisplay
        turn={turn}
        setTurn={setTurn}
        setFlips={setFlips}
        order={order}
      />
    </ScreenContainer>
  );
};

export default GameScreen;
