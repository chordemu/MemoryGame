import React from 'react';
import { StyleSheet } from 'react-native';
import globalStyles from '../constants/globalStyles';
import MyText from './MyText';

type FlipsTextProps = { flips: number };

const FlipsText: React.FC<FlipsTextProps> = ({ flips }) => {
  return (
    <MyText style={styles.flipsText}>
      Flips:{' '}
      <MyText style={[styles.flipsText, globalStyles.boldText]}>{flips}</MyText>
    </MyText>
  );
};

export default FlipsText;

const styles = StyleSheet.create({
  flipsText: { fontSize: 34, margin: 30 },
});
