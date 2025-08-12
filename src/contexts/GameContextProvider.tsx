import React from 'react';
import FlippedContextProvider from './FlippedContextProvider';
import MatchedContextProvider from './MatchedContextProvider';

const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <FlippedContextProvider>
      <MatchedContextProvider>{children}</MatchedContextProvider>
    </FlippedContextProvider>
  );
};

export default GameProvider;
