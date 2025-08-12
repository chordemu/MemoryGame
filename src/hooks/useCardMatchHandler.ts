import { useCallback } from 'react';
import { useFlippedContext } from '../contexts/useFlippedContext';
import { useMatchedContext } from '../contexts/useMatchedContext';
import cardData from '../constants/cardData';

const MATCH_TIMEOUT = 100;
const MISMATCH_TIMEOUT = 200;

export function useCardMatchHandler() {
  const { lastFlippedId, resetFlippedIds } = useFlippedContext();
  const { addMatchedIds } = useMatchedContext();

  const handleMatch = useCallback(
    (currentId: string) => {
      setTimeout(() => {
        const lastFlipped = cardData.find(c => c.id === lastFlippedId);
        if (!lastFlipped) throw new Error('No lastFlippedCard detected');
        addMatchedIds([currentId, lastFlipped.id]);
        resetFlippedIds();
      }, MATCH_TIMEOUT);
    },
    [addMatchedIds, lastFlippedId, resetFlippedIds],
  );

  const handleMismatch = useCallback(() => {
    setTimeout(() => {
      resetFlippedIds();
    }, MISMATCH_TIMEOUT);
  }, [resetFlippedIds]);

  return { handleMatch, handleMismatch };
}
