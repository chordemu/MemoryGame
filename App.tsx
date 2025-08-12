/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Home from './src/components/Home';
import { myColours } from './src/constants/globalStyles';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={myColours.bgLightGreen}
        barStyle={'dark-content'}
      />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
