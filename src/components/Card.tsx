import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import cardData, { CardType } from '../constants/cardData';
import TurnType from '../types/TurnType';
import { useFlippedContext } from '../contexts/useFlippedContext';
import { useMatchedContext } from '../contexts/useMatchedContext';

const MATCH_TIME_OUT = 100;
const MISMATCH_TIME_OUT = 200;

type CardProps = {
  card: CardType;
  turn: TurnType;
  setTurn: React.Dispatch<React.SetStateAction<TurnType>>;
  setFlips: React.Dispatch<React.SetStateAction<number>>;
};

export default function Card({ card, turn, setTurn, setFlips }: CardProps) {
  const { flippedIds, addFlippedIds, resetFlippedIds, lastFlippedId } =
    useFlippedContext();
  const { matchedIds, addMatchedIds } = useMatchedContext();

  if (card.isEmpty) {
    return <View style={[styles.cardContainer, styles.emptyCard]} />;
  }

  const { id, colour } = card;

  const flipped = flippedIds.includes(id);

  const handleMisMatch = () => {
    setTimeout(() => {
      resetFlippedIds();
    }, MISMATCH_TIME_OUT);
    setTurn('first');
  };

  const handleMatch = () => {
    setTimeout(() => {
      const lastFlippedCard = cardData.find(item => item.id === lastFlippedId);

      if (!lastFlippedCard) {
        throw new Error('No lastFlippedCard detected');
      }
      addMatchedIds([id, lastFlippedCard.id]);
      resetFlippedIds();
      setTurn('first');
    }, MATCH_TIME_OUT);
    if (matchedIds.length === cardData.length) {
      handleWin();
    }
  };

  const handleWin = () => {};

  const handleFirstPress = () => {
    setTurn('second');
  };

  const handleSecondPress = () => {
    const lastFlippedCard = cardData.find(item => item.id === lastFlippedId);

    if (!lastFlippedCard) {
      throw new Error('No lastFlippedCard detected');
    }

    const colourOfLastFlipped = lastFlippedCard.colour;

    if (colour === colourOfLastFlipped) {
      handleMatch();
    } else {
      handleMisMatch();
    }
  };

  const handlePress = () => {
    if (flippedIds.length === 2) {
      return;
    }

    setFlips(prev => prev + 1);
    addFlippedIds([id]);

    // const lastFlipped = flippedIds[flippedIds.length - 1];
    // console.log(flippedIds, lastFlipped);

    if (turn === 'first') {
      handleFirstPress();
    }
    if (turn === 'second') {
      handleSecondPress();
    }
  };

  return (
    <>
      {flipped ? (
        <View style={[styles.cardContainer, { backgroundColor: colour }]} />
      ) : (
        <Pressable onPress={handlePress} style={[styles.cardContainer]} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 120,
    width: 80,
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
  },
  emptyCard: { backgroundColor: 'transparent', borderColor: 'transparent' },
});
