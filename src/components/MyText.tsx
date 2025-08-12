import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

type MyTextProps = PropsWithChildren<TextProps>;

export default function MyText({ children, style, ...rest }: MyTextProps) {
  return (
    <Text style={[styles.myText, style]} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  myText: {
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center',
  },
});
