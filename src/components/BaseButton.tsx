import React, { ReactElement } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

interface IProps {
  text: string;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#515151',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 3,
  },
});

function BaseButton({ text }: IProps): ReactElement {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

export default BaseButton;
