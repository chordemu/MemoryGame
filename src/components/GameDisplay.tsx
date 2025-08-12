import React from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import cardData, { CardType, emptyCard } from '../constants/cardData';
import { useMatchedContext } from '../contexts/useMatchedContext';
import TurnType from '../types/TurnType';
import Card from './Card';

type GameDisplayProps = {
  turn: TurnType;
  setTurn: React.Dispatch<React.SetStateAction<TurnType>>;
  setFlips: React.Dispatch<React.SetStateAction<number>>;
  order: number[];
};

const GameDisplay: React.FC<GameDisplayProps> = ({
  turn,
  setTurn,
  setFlips,
  order,
}) => {
  const ids = useMatchedContext().matchedIds;

  const data = cardData.map((_, index) => {
    const orderedCard = cardData.find(cardB => cardB.index === order[index])!;
    return orderedCard;
  });

  const flatlistData = data.map(card =>
    ids.includes(card.id) ? emptyCard : card,
  );

  const renderItem: ListRenderItem<CardType> = ({ item }) => (
    <Card card={item} turn={turn} setTurn={setTurn} setFlips={setFlips} />
  );

  const getCardListKey = (item: CardType, index: number) =>
    item.isEmpty ? 'empty' + index : item.id + index;

  return (
    <FlatList
      keyExtractor={getCardListKey}
      data={flatlistData}
      contentContainerStyle={styles.flatlistContainer}
      renderItem={renderItem}
      numColumns={3}
    />
  );
};

export default GameDisplay;

const styles = StyleSheet.create({
  flatlistContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
