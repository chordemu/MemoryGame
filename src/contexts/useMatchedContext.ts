import { useContext } from 'react';
import { MatchedContext } from './MatchedContextProvider';

export function useMatchedContext() {
  const context = useContext(MatchedContext);
  if (!context) {
    throw new Error(
      'useMatchedContext must be used within a MatchedContextProvider',
    );
  }
  return context;
}
