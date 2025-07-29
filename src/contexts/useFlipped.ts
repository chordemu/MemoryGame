import { useContext } from 'react';
import { FlippedContext } from './FlippedContextProvider';

export const useFlipped = () => {
  const context = useContext(FlippedContext);
  if (!context) {
    throw new Error('useFlipped must be used within a FlippedContextProvider');
  }
  return context;
};
