import { useFlippedContext } from '../contexts/useFlippedContext';
import { useMatchedContext } from '../contexts/useMatchedContext';
import randomArrayGenerator from '../randomArrayGenerator';

const useGameReset: (
  setFlips: React.Dispatch<React.SetStateAction<number>>,
  setOrder: React.Dispatch<React.SetStateAction<number[]>>,
) => () => void = (setFlips, setOrder) => {
  const { resetFlippedIds } = useFlippedContext();
  const { resetMatchedIds } = useMatchedContext();

  const resetGame = () => {
    setFlips(0);
    setOrder(randomArrayGenerator());
    resetFlippedIds();
    resetMatchedIds();
  };

  return resetGame;
};

export default useGameReset;
