import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
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
});

export const myColours = {
  bgLightGreen: '#cbffd0',
  button: '#ffffffff',
  buttonPressed: '#ecececff',
};

export default globalStyles;
