import React from 'react';
import { StyleSheet, View } from 'react-native';

type ScreenContainerProps = { children: React.ReactNode };

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => {
  return <View style={styles.screenContainer}>{children}</View>;
};

export default ScreenContainer;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cbffd0',
  },
});
