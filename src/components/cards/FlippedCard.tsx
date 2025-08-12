import React from 'react';
import { ColorValue, View } from 'react-native';
import globalStyles from '../../constants/globalStyles';

type FlippedCardProps = { colour: ColorValue };

export default function FlippedCard({ colour }: FlippedCardProps) {
  return (
    <View style={[globalStyles.cardContainer, { backgroundColor: colour }]} />
  );
}
