import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FlippedContextProvider from '../contexts/FlippedContextProvider';
import TurnType from '../types/TurnType';
import CardDisplay from './CardDisplay';
import MyText from './MyText';

const Home = ({}) => {
  const [turn, setTurn] = useState<TurnType>('first');
  const [flips, setFlips] = useState<number>(0);

  return (
    <FlippedContextProvider>
      <View style={styles.container}>
        <CardDisplay
          turn={turn}
          setTurn={setTurn}
          flips={flips}
          setFlips={setFlips}
          />
          <MyText>{flips}</MyText>
        {/* <ResetButton setTurn={setTurn} /> */}
      </View>
    </FlippedContextProvider>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: { fontSize: 40, fontWeight: 400 },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cbffd0',
  },
});
