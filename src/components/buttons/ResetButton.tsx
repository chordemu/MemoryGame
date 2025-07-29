import React from 'react';
import { useFlipped } from '../../contexts/useFlipped';
import TurnType from '../../types/TurnType';
import MyButton from './MyButton';
import MyText from '../MyText';

type ResetButtonProps = {
  setTurn: React.Dispatch<React.SetStateAction<TurnType>>;
};

const ResetButton: React.FC<ResetButtonProps> = ({ setTurn }) => {
  const { setFlippedIds, setMatchedIds } = useFlipped();

  const handlePress = () => {
    setFlippedIds([]);
    setMatchedIds([]);
    setTurn('first');
  };

  return (
    <MyButton onPress={handlePress}>
      <MyText>Reset</MyText>
    </MyButton>
  );
};

export default ResetButton;
