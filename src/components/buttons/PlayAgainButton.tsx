import React from 'react';
import { GestureResponderEvent } from 'react-native';
import MyText from '../MyText';
import MyButton from './MyButton';

type PlayAgainButtonProps = {
  handlePress: ((event: GestureResponderEvent) => void) | null | undefined;
};

export default function PlayAgainButton({ handlePress }: PlayAgainButtonProps) {
  return (
    <MyButton onPress={handlePress}>
      <MyText>Play Again?</MyText>
    </MyButton>
  );
}
