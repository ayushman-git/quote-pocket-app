import React, { ReactElement } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface IProps {
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    backgroundColor: '#515151',
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
  },
  text: {
    fontSize: 40,
    color: '#fff',
  },
});

function FloatingActionButton({ onPress }: IProps): ReactElement {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </Pressable>
  );
}

export default FloatingActionButton;
