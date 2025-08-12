import React from 'react';
import { StyleSheet } from 'react-native';
import globalStyles from '../constants/globalStyles';
import MyText from './MyText';

type FlipsTextProps = { flips: number };

export default function FlipsText({ flips }: FlipsTextProps) {
  return (
    <MyText style={styles.flipsText}>
      Flips:{' '}
      <MyText style={[styles.flipsText, globalStyles.boldText]}>{flips}</MyText>
    </MyText>
  );
};

const styles = StyleSheet.create({
  flipsText: { fontSize: 34, margin: 30 },
});
