import React, { createContext, PropsWithChildren, useReducer } from 'react';
import cardData, { CardId } from '../constants/cardData';
import createCardIdArrayReducer from '../reducers/createCardIdArrayReducer';

type MatchedContextType = {
  matchedIds: CardId[];
  resetMatchedIds: () => void;
  setMatchedIds: (cardIds: CardId[]) => void;
  addMatchedIds: (cardIds: CardId[]) => void;
  isGameWon: boolean;
};

export const MatchedContext = createContext<MatchedContextType | undefined>(
  undefined,
);

export default function MatchedContextProvider({
  children,
}: PropsWithChildren) {
  const matchedReducer = createCardIdArrayReducer();

  const [state, dispatch] = useReducer(matchedReducer, { items: [] });

  const matchedIds = state.items;

  const resetMatchedIds = () => {
    dispatch({ type: 'RESET' });
    return;
  };

  const setMatchedIds = (cardIds: CardId[]) => {
    dispatch({ type: 'SET', payload: cardIds });
    return;
  };

  const addMatchedIds = (cardIds: CardId[]) => {
    dispatch({ type: 'ADD', payload: cardIds });
    return;
  };

  const isGameWon = matchedIds.length === cardData.length;

  return (
    <MatchedContext.Provider
      value={{
        matchedIds,
        resetMatchedIds,
        setMatchedIds,
        addMatchedIds,
        isGameWon,
      }}
    >
      {children}
    </MatchedContext.Provider>
  );
}
