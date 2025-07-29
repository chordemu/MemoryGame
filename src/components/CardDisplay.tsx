import React, { useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import cardData, { CardType, emptyCard } from '../constants/cardData';
import { useFlipped } from '../contexts/useFlipped';
import randomArray from '../randomArrayGenerator';
import TurnType from '../types/TurnType';
import Card from './Card';
import PlayAgainButton from './buttons/PlayAgainButton';
import MyText from './MyText';

type CardDisplayProps = {
  turn: TurnType;
  setTurn: React.Dispatch<React.SetStateAction<TurnType>>;
  flips: number;
  setFlips: React.Dispatch<React.SetStateAction<number>>;
};

const CardDisplay: React.FC<CardDisplayProps> = ({
  turn,
  setTurn,
  flips,
  setFlips,
}) => {
  const [order, setOrder] = useState(randomArray);
  const { matchedIds } = useFlipped();

  const data = cardData.map((cardA, index) => {
    // TODO: fix
    const returnValue = cardData.find(cardB => cardB.index === order[index]);
    if (returnValue) {
      return returnValue;
    } else {
      return emptyCard;
    }
  });

  const flatlistData = data.map(card =>
    matchedIds.includes(card.id) ? emptyCard : card,
  );

  const renderItem: ListRenderItem<CardType> = ({ item }) => (
    <Card card={item} turn={turn} setTurn={setTurn} setFlips={setFlips} />
  );

  return (
    <>
      {matchedIds.length === cardData.length ? (
        <View style={styles.container}>
          <MyText style={styles.title}>You win!</MyText>
          <MyText>
            Number of flips: <MyText style={styles.boldText}>{flips}</MyText>
            
          </MyText>
          <PlayAgainButton
            setTurn={setTurn}
            setFlips={setFlips}
            setOrder={setOrder}
          />
        </View>
      ) : (
        <FlatList
          keyExtractor={(item, index) => item.id + index}
          contentContainerStyle={styles.container}
          data={flatlistData}
          renderItem={renderItem}
          numColumns={3}
        />
      )}
    </>
  );
};

export default CardDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cbffd0',
  },
  title: { fontSize: 42, fontWeight: 400, marginBottom: 30 },
  boldText: { fontWeight: 500 },
});
