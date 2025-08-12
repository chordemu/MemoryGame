import { ColorValue } from 'react-native';

export type CardId = string;

export type EmptyCard = { isEmpty: true };

export type ValidCard = {
  isEmpty: false;
  id: CardId;
  colour: ColorValue;
  index: number;
};

export type CardType = EmptyCard | ValidCard;

type ColourType = {
  name: string;
  colour: ColorValue;
};
const coloursList: ColourType[] = [
  {
    name: 'blue',
    colour: 'blue',
  },
  {
    name: 'green',
    colour: 'green',
  },
  {
    name: 'red',
    colour: 'red',
  },
  {
    name: 'black',
    colour: 'black',
  },
  {
    name: 'pink',
    colour: 'pink',
  },
  {
    name: 'ochre',
    colour: '#fcba03',
  },
];

export const NUMBER_OF_PAIRS = coloursList.length;

export const cardData: ValidCard[] = coloursList.flatMap((item, index) => {
  return [
    {
      isEmpty: false,
      id: item.name + 'A',
      colour: item.colour,
      index: index * 2,
    },
    {
      isEmpty: false,
      id: item.name + 'B',
      colour: item.colour,
      index: index * 2 + 1,
    },
  ];
});

export const emptyCard: CardType = {
  isEmpty: true,
};

export default cardData;
