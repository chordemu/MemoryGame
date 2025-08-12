import React from 'react';
import { Pressable } from 'react-native';
import cardData, { ValidCard } from '../../constants/cardData';
import globalStyles from '../../constants/globalStyles';
import { useFlippedContext } from '../../contexts/useFlippedContext';
import { useMatchedContext } from '../../contexts/useMatchedContext';

const MATCH_TIME_OUT = 100;
const MISMATCH_TIME_OUT = 200;

type CardProps = {
  card: ValidCard;
  setFlips: React.Dispatch<React.SetStateAction<number>>;
};

export default function Card({ card, setFlips }: CardProps) {
  const { flippedIds, addFlippedIds, resetFlippedIds, lastFlippedId } =
    useFlippedContext();
  const { matchedIds, addMatchedIds } = useMatchedContext();
  const { id, colour } = card;

  const turn = flippedIds.length % 2 === 0 ? 'first' : 'second';

  const handleMismatch = () => {
    setTimeout(() => {
      resetFlippedIds();
    }, MISMATCH_TIME_OUT);
  };

  const handleMatch = () => {
    setTimeout(() => {
      const lastFlippedCard = cardData.find(item => item.id === lastFlippedId);

      if (!lastFlippedCard) {
        throw new Error('No lastFlippedCard detected');
      }
      addMatchedIds([id, lastFlippedCard.id]);
      resetFlippedIds();
    }, MATCH_TIME_OUT);
    if (matchedIds.length === cardData.length) {
      handleWin();
    }
  };

  const handleWin = () => {};

  const handleFirstPress = () => {};

  const handleSecondPress = () => {
    const lastFlippedCard = cardData.find(item => item.id === lastFlippedId);

    if (!lastFlippedCard) {
      throw new Error('No lastFlippedCard detected');
    }

    const colourOfLastFlipped = lastFlippedCard.colour;

    if (colour === colourOfLastFlipped) {
      handleMatch();
    } else {
      handleMismatch();
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
    <Pressable onPress={handlePress} style={[globalStyles.cardContainer]} />
  );
}
