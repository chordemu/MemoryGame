import { ColorValue } from 'react-native';

export const NUMBER_OF_CARDS = 12;

export type CardId = string | 'empty';
export type CardType =
  | { id: CardId; colour: ColorValue; index: number }
  | { id: 'empty'; colour: ColorValue; index: number };

const cardData: CardType[] = [
  { id: 'blueA', colour: 'blue', index: 0 },
  { id: 'blueB', colour: 'blue', index: 1 },
  { id: 'greenA', colour: 'green', index: 2 },
  { id: 'greenB', colour: 'green', index: 3 },
  { id: 'pinkA', colour: 'pink', index: 4 },
  { id: 'pinkB', colour: 'pink', index: 5 },
  { id: 'redA', colour: 'red', index: 6 },
  { id: 'redB', colour: 'red', index: 7 },
  { id: 'blackA', colour: 'black', index: 8 },
  { id: 'blackB', colour: 'black', index: 9 },
  { id: 'purpleA', colour: '#fcba03', index: 10 },
  { id: 'purpleB', colour: '#fcba03', index: 11 },
];

export const emptyCard: CardType = {
  id: 'empty',
  colour: 'transparent',
  index: 100,
};

export default cardData;
