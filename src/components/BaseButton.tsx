import React, { ReactElement } from 'react';
import { Button } from 'react-native';

interface IProps {
  text: string;
}

function BaseButton({ text }: IProps): ReactElement {
  return <Button title={text} />;
}

export default BaseButton;
