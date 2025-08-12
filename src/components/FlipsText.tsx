import React from 'react';
import { StyleSheet } from 'react-native';
import MyText from './MyText';

type FlipsTextProps = { flips: number };

export default function FlipsText({ flips }: FlipsTextProps) {
  return (
    <MyText style={styles.flipsText}>
      Flips: <MyText style={styles.boldText}>{flips}</MyText>
    </MyText>
  );
}

const styles = StyleSheet.create({
  flipsText: { fontSize: 34, margin: 30 },
  boldText: { fontWeight: '500' },
});
