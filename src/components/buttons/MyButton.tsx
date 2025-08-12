import React, { PropsWithChildren } from 'react';
import { Pressable, PressableProps, StyleSheet } from 'react-native';
import { myColours } from '../../constants/globalStyles';

type MyButtonProps = {
  style?: PressableProps;
};

export default function MyButton({
  children,
  style,
  ...rest
}: PropsWithChildren<MyButtonProps> & PressableProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.myButton,
        style,
        pressed && { backgroundColor: myColours.buttonPressed },
      ]}
      {...rest}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  myButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: myColours.button,
    margin: 30,
  },
});
