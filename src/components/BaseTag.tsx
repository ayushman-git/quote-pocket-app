import React, { ReactElement } from 'react';
import { Pressable, Text } from 'react-native';

interface IProps {
  text: string;
  onPress: () => void;
}

function BaseTag({ text, onPress }: IProps): ReactElement {
  return (
    <Pressable onPress={onPress}>
      <Text>#</Text>
      <Text>{text}</Text>
    </Pressable>
  );
}

export default BaseTag;
