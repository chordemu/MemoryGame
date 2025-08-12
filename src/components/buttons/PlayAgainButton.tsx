import React from 'react';
import { useFlippedContext } from '../../contexts/useFlippedContext';
import { useMatchedContext } from '../../contexts/useMatchedContext';
import randomArrayGenerator from '../../randomArrayGenerator';
import TurnType from '../../types/TurnType';
import MyText from '../MyText';
import MyButton from './MyButton';

type PlayAgainButtonProps = {
  setTurn: React.Dispatch<React.SetStateAction<TurnType>>;
  setFlips: React.Dispatch<React.SetStateAction<number>>;
  setOrder: React.Dispatch<React.SetStateAction<number[]>>;
};

const PlayAgainButton: React.FC<PlayAgainButtonProps> = ({
  setTurn,
  setFlips,
  setOrder,
}) => {
  const { resetFlippedIds } = useFlippedContext();
  const { resetMatchedIds } = useMatchedContext();

  const handlePress = () => {
    setTurn('first');
    setFlips(0);
    setOrder(randomArrayGenerator());
    resetFlippedIds();
    resetMatchedIds();
  };

  return (
    <MyButton onPress={handlePress}>
      <MyText>Play Again?</MyText>
    </MyButton>
  );
};

export default PlayAgainButton;
