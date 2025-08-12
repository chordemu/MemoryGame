import { CardId } from '../constants/cardData';

export default function createCardIdArrayReducer() {
  type State = { items: CardId[] };
  type Action =
    | { type: 'RESET' }
    | { type: 'SET'; payload: CardId[] }
    | { type: 'ADD'; payload: CardId[] };

  function reducer(state: State, action: Action): State {
    switch (action.type) {
      case 'RESET':
        return { items: [] };
      case 'SET':
        return { items: action.payload };
      case 'ADD':
        return { items: [...state.items, ...action.payload] };
      default:
        return state;
    }
  }

  return reducer;
}
