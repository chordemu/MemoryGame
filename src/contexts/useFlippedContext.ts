import { useContext } from 'react';
import { FlippedContext } from './FlippedContextProvider';

export function useFlippedContext() {
  const context = useContext(FlippedContext);
  if (!context) {
    throw new Error(
      'useFlippedContext must be used within a FlippedContextProvider',
    );
  }
  return context;
}
