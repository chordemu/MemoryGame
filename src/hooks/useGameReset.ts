import { useFlippedContext } from '../contexts/useFlippedContext';
import { useMatchedContext } from '../contexts/useMatchedContext';
import randomArrayGenerator from '../randomArrayGenerator';
import TurnType from '../types/TurnType';

const useGameReset: (
  setTurn: React.Dispatch<React.SetStateAction<TurnType>>,
  setFlips: React.Dispatch<React.SetStateAction<number>>,
  setOrder: React.Dispatch<React.SetStateAction<number[]>>,
) => () => void = (setTurn, setFlips, setOrder) => {
  const { resetFlippedIds } = useFlippedContext();
  const { resetMatchedIds } = useMatchedContext();

  const resetGame = () => {
    setTurn('first');
    setFlips(0);
    setOrder(randomArrayGenerator());
    resetFlippedIds();
    resetMatchedIds();
  };

  return resetGame;
};

export default useGameReset;
