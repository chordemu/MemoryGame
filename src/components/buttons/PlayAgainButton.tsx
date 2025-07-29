import React from 'react';
import { useFlipped } from '../../contexts/useFlipped';
import randomArrayGenerator from '../../randomArrayGenerator';
import TurnType from '../../types/TurnType';
import MyButton from './MyButton';
import MyText from '../MyText';

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
  const { setFlippedIds, setMatchedIds } = useFlipped();

  const handlePress = () => {
    setTurn('first');
    setFlips(0);
    setOrder(randomArrayGenerator());
    setFlippedIds([]);
    setMatchedIds([]);
  };

  return (
    <MyButton onPress={handlePress}>
      <MyText>Play Again?</MyText>
    </MyButton>
  );
};

export default PlayAgainButton;
