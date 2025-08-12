import React, { createContext, PropsWithChildren, useReducer } from 'react';
import { CardId } from '../constants/cardData';
import createCardIdArrayReducer from '../reducers/createCardIdArrayReducer';

type FlippedContextType = {
  flippedIds: CardId[];
  setFlippedIds: (cardIds: CardId[]) => void;
  addFlippedIds: (cardIds: CardId[]) => void;
  resetFlippedIds: () => void;
  lastFlippedId: CardId | null;
};

export const FlippedContext = createContext<FlippedContextType | undefined>(
  undefined,
);

export default function FlippedContextProvider({
  children,
}: PropsWithChildren) {
  const flippedReducer = createCardIdArrayReducer();

  const [state, dispatch] = useReducer(flippedReducer, { items: [] });

  const flippedIds = state.items;

  const numberOfFlipped = flippedIds.length;

  const lastFlippedId =
    numberOfFlipped >= 1 ? flippedIds[numberOfFlipped - 1] : null;

  const resetFlippedIds = () => {
    dispatch({ type: 'RESET' });
    return;
  };
  const setFlippedIds = (cardIds: CardId[]) => {
    dispatch({ type: 'SET', payload: cardIds });
    return;
  };

  const addFlippedIds = (cardIds: CardId[]) => {
    dispatch({ type: 'ADD', payload: cardIds });
    return;
  };

  return (
    <FlippedContext.Provider
      value={{
        flippedIds,
        resetFlippedIds,
        setFlippedIds,
        addFlippedIds,
        lastFlippedId,
      }}
    >
      {children}
    </FlippedContext.Provider>
  );
}
