import React from 'react';
import { StyleSheet } from 'react-native';
import globalStyles from '../constants/globalStyles';
import MyText from './MyText';
import ScreenContainer from './ScreenContainer';

type WinScreenProps = {
  children: React.ReactNode;
};

const WinScreen: React.FC<WinScreenProps> & {
  FinalFlipsText: React.FC<FinalFlipsTextProps>;
} = ({ children }) => {
  return (
    <ScreenContainer>
      <MyText style={styles.title}>You win!</MyText>
      {children}
    </ScreenContainer>
  );
};

type FinalFlipsTextProps = { flips: number };

const FinalFlipsText: React.FC<FinalFlipsTextProps> = ({ flips }) => {
  return (
    <MyText>
      Number of flips: <MyText style={globalStyles.boldText}>{flips}</MyText>
    </MyText>
  );
};

WinScreen.FinalFlipsText = FinalFlipsText;

export default WinScreen;

const styles = StyleSheet.create({
  title: { fontSize: 42, fontWeight: '400', marginBottom: 30 },
});
