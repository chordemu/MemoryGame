import React, { createContext, useState } from 'react';
import { CardId } from '../constants/cardData';

type FlippedContextType = {
  flippedIds: CardId[];
  setFlippedIds: React.Dispatch<React.SetStateAction<CardId[]>>;
  addFlippedIds: (cardIds: CardId[]) => void;
  resetFlippedIds: () => void;
  lastFlippedId: CardId | null;
};

export const FlippedContext = createContext<FlippedContextType | undefined>(
  undefined,
);

type FlippedContextProviderProps = {
  children: React.ReactNode;
};

export default function FlippedContextProvider({
  children,
}: FlippedContextProviderProps) {
  const [flippedIds, setFlippedIds] = useState<CardId[]>([]);

  const numberOfFlipped = flippedIds.length;

  const lastFlippedId =
    numberOfFlipped >= 1 ? flippedIds[numberOfFlipped - 1] : null;

  const addFlippedIds = (cardIds: CardId[]) => {
    const newFlippedIds = [...flippedIds, ...cardIds];
    setFlippedIds(newFlippedIds);
    return;
  };

  const resetFlippedIds = () => {
    setFlippedIds([]);
    return;
  };

  return (
    <FlippedContext.Provider
      value={{
        flippedIds,
        setFlippedIds,
        addFlippedIds,
        resetFlippedIds,
        lastFlippedId,
      }}
    >
      {children}
    </FlippedContext.Provider>
  );
}
