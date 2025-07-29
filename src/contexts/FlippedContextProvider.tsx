import React, { createContext, useState } from 'react';
import cardData, { CardId } from '../constants/cardData';

type FlippedContextType = {
  flippedIds: CardId[];
  setFlippedIds: React.Dispatch<React.SetStateAction<CardId[]>>;
  addFlippedCard: (cardId: CardId) => void;
  matchedIds: CardId[];
  setMatchedIds: React.Dispatch<React.SetStateAction<CardId[]>>;
  lastFlippedId: string | undefined;
  addMatchedCard: (cardId: CardId) => void;
  isGameWon: boolean;
};

export const FlippedContext = createContext<FlippedContextType | undefined>(
  undefined,
);

type FlippedContextProviderProps = {
  children: React.ReactNode;
};

const FlippedContextProvider: React.FC<FlippedContextProviderProps> = ({
  children,
}) => {
  const [flippedIds, setFlippedIds] = useState<CardId[]>([]);
  const [matchedIds, setMatchedIds] = useState<CardId[]>([]);

  const numberOfFlipped = flippedIds.length;

  const lastFlippedId =
    numberOfFlipped >= 1 ? flippedIds[numberOfFlipped - 1] : undefined;

  const addFlippedCard = (cardId: CardId) => {
    const newFlippedIds = [...flippedIds, cardId];
    setFlippedIds(newFlippedIds);
    return;
  };

  const addMatchedCard = (cardId: CardId) => {
    const newMatchedIds = [...matchedIds, cardId];
    setMatchedIds(newMatchedIds);
    return;
  };

  const isGameWon = matchedIds.length === cardData.length;

  return (
    <FlippedContext.Provider
      value={{
        flippedIds,
        setFlippedIds,
        addFlippedCard,
        matchedIds,
        setMatchedIds,
        addMatchedCard,
        lastFlippedId,
        isGameWon,
      }}
    >
      {children}
    </FlippedContext.Provider>
  );
};

export default FlippedContextProvider;
