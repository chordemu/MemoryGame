import React, { PropsWithChildren } from 'react';
import FlippedContextProvider from './FlippedContextProvider';
import MatchedContextProvider from './MatchedContextProvider';

export default function GameProvider({ children }: PropsWithChildren) {
  return (
    <FlippedContextProvider>
      <MatchedContextProvider>{children}</MatchedContextProvider>
    </FlippedContextProvider>
  );
}
