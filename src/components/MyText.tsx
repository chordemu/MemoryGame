import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

type MyTextProps = TextProps & { children: React.ReactNode };

const MyText: React.FC<MyTextProps> = ({ children, style, ...rest }) => {
  return (
    <Text style={[styles.myText, style]} {...rest}>
      {children}
    </Text>
  );
};

export default MyText;

const styles = StyleSheet.create({
  myText: {
    fontSize: 30,
    fontWeight: 300,
    textAlign: 'center',
  },
});
