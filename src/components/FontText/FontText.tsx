import {StyleProp, Text, TextStyle} from 'react-native';
import React from 'react';
import Font, {FontStyle, FontWeight} from '../../configs/font';
import style from './FontText.style';

function FontText(props: {
  children?: React.ReactNode;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  style?: StyleProp<TextStyle>;
  variables?: string[];
  numberOfLines?: number;
}): JSX.Element {
  const weight = props.fontWeight || 'regular';
  const fontStyle = props.fontStyle || 'body';
  return (
    <Text
      style={[style.text, Font.getFontStyle(weight, fontStyle), props.style]}
      numberOfLines={props.numberOfLines}>
      {props.children}
    </Text>
  );
}

export default FontText;
