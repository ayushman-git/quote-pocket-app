import React, { ReactNode } from 'react';
import { Button } from 'react-native';

interface IProps {
  text: string;
}

function BaseButton({ text }: IProps): ReactNode {
  return <Button title={text} />;
}

export default BaseButton;
