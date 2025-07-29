import React from 'react';
import { StyleSheet } from 'react-native';
import globalStyles from '../constants/globalStyles';
import MyText from './MyText';
import { useFlipped } from '../contexts/useFlipped';

type FlipsTextProps = { flips: number };

const FlipsText: React.FC<FlipsTextProps> = ({ flips }) => {
  const { isGameWon } = useFlipped();

  return (
    <>
      {!isGameWon && (
        <MyText style={styles.flipsText}>
          Flips:{' '}
          <MyText style={[styles.flipsText, globalStyles.boldText]}>
            {flips}
          </MyText>
        </MyText>
      )}
    </>
  );
};

export default FlipsText;

const styles = StyleSheet.create({
  flipsText: { fontSize: 34, marginTop: 64 },
});
