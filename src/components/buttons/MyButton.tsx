import React from 'react';
import { Pressable, PressableProps, StyleSheet } from 'react-native';

type MyButtonProps = {
  children: React.ReactNode;
  style?: PressableProps;
};

const MyButton: React.FC<MyButtonProps & PressableProps> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.myButton,
        style,
        pressed && { backgroundColor: '#bebebeff' },
      ]}
      {...rest}
    >
      {children}
    </Pressable>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  myButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#ffffffff',
    margin: 30,
  },
});
