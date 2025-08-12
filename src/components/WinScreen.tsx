import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import MyText from './MyText';
import ScreenContainer from './ScreenContainer';

export default function WinScreen({ children }: PropsWithChildren) {
  return (
    <ScreenContainer>
      <MyText style={styles.title}>You win!</MyText>
      {children}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 42, fontWeight: '400', marginBottom: 30 },
});
