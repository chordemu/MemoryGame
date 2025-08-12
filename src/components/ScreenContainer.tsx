import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { myColours } from '../constants/globalStyles';

export default function ScreenContainer({ children }: PropsWithChildren) {
  return <View style={styles.screenContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: myColours.bgLightGreen,
  },
});
