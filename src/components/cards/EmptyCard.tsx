import React from 'react';
import { StyleSheet, View } from 'react-native';
import globalStyles from '../../constants/globalStyles';

export default function EmptyCard() {
  return <View style={[globalStyles.cardContainer, styles.emptyCard]} />;
}

const styles = StyleSheet.create({
  emptyCard: { backgroundColor: 'transparent', borderColor: 'transparent' },
});
