import React, { createContext, useState } from 'react';
import cardData, { CardId } from '../constants/cardData';

type MatchedContextType = {
  matchedIds: CardId[];
  setMatchedIds: React.Dispatch<React.SetStateAction<CardId[]>>;
  addMatchedIds: (cardIds: CardId[]) => void;
  resetMatchedIds: () => void;
  isGameWon: boolean;
};

export const MatchedContext = createContext<MatchedContextType | undefined>(
  undefined,
);

type MatchedContextProviderProps = {
  children: React.ReactNode;
};

const MatchedContextProvider: React.FC<MatchedContextProviderProps> = ({
  children,
}) => {
  const [matchedIds, setMatchedIds] = useState<CardId[]>([]);

  const addMatchedIds = (cardIds: CardId[]) => {
    const newMatchedIds = [...matchedIds, ...cardIds];
    setMatchedIds(newMatchedIds);
    return;
  };

  const resetMatchedIds = () => {
    setMatchedIds([]);
    return;
  };

  const isGameWon = matchedIds.length === cardData.length;

  return (
    <MatchedContext.Provider
      value={{
        matchedIds,
        setMatchedIds,
        addMatchedIds,
        resetMatchedIds,
        isGameWon,
      }}
    >
      {children}
    </MatchedContext.Provider>
  );
};

export default MatchedContextProvider;
