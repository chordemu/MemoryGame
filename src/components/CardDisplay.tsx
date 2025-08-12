import React from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import cardData, { CardType, emptyCard } from '../constants/cardData';
import { useFlippedContext } from '../contexts/useFlippedContext';
import { useMatchedContext } from '../contexts/useMatchedContext';
import EmptyCard from './cards/EmptyCard';
import FlippedCard from './cards/FlippedCard';
import UnflippedCard from './cards/UnflippedCard';

type CardDisplayProps = {
  setFlips: React.Dispatch<React.SetStateAction<number>>;
  order: number[];
};

export default function CardDisplay({ setFlips, order }: CardDisplayProps) {
  const { matchedIds } = useMatchedContext();
  const { flippedIds } = useFlippedContext();

  const data = cardData.map((_, index) => {
    const orderedCard = cardData.find(cardB => cardB.index === order[index])!;
    return orderedCard;
  });

  const flatlistData = data.map(card =>
    matchedIds.includes(card.id) ? emptyCard : card,
  );

  const renderItem: ListRenderItem<CardType> = ({ item }) => {
    if (item.isEmpty) {
      return <EmptyCard />;
    }

    const isFlipped = flippedIds.includes(item.id);

    if (isFlipped) {
      return <FlippedCard colour={item.colour} />;
    }

    return <UnflippedCard card={item} setFlips={setFlips} />;
  };

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
}

const styles = StyleSheet.create({
  flatlistContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
