import { NUMBER_OF_CARDS } from './constants/cardData';

const randomArrayGenerator = () => {
  let array = [...Array(NUMBER_OF_CARDS).keys()];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export default randomArrayGenerator;
