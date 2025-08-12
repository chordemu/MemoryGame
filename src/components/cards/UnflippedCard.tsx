import React from 'react';
import { Pressable } from 'react-native';
import cardData, { ValidCard } from '../../constants/cardData';
import globalStyles from '../../constants/globalStyles';
import { useFlippedContext } from '../../contexts/useFlippedContext';
import { useCardMatchHandler } from '../../hooks/useCardMatchHandler';

type UnflippedCardProps = {
  card: ValidCard;
  setFlips: React.Dispatch<React.SetStateAction<number>>;
};

export default function UnflippedCard({ card, setFlips }: UnflippedCardProps) {
  const { flippedIds, addFlippedIds, lastFlippedId } = useFlippedContext();
  const { handleMatch, handleMismatch } = useCardMatchHandler();
  const { id, colour } = card;

  const handlePress = () => {
    if (flippedIds.length === 2) return;

    setFlips(prev => prev + 1);
    addFlippedIds([id]);

    // if second flip
    if (flippedIds.length % 2 === 1 && lastFlippedId) {
      const lastFlippedCard = cardData.find(item => item.id === lastFlippedId);
      if (!lastFlippedCard) throw new Error('No lastFlippedCard detected');

      if (lastFlippedCard.colour === colour) {
        handleMatch(id);
      } else {
        handleMismatch();
      }
    }
  };

  return (
    <Pressable onPress={handlePress} style={[globalStyles.cardContainer]} />
  );
}
