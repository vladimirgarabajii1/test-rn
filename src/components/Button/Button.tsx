import React from 'react';
import {Pressable, StyleProp, TextStyle, ViewStyle} from 'react-native';
import styles, {ButtonSize} from './Button.style';
import FontText from '../FontText/FontText';
import {FontStyle, FontWeight} from '../../configs/font';

interface IButtonProps {
  text?: string;
  onPress?: () => void;
  children?: JSX.Element;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  size?: ButtonSize;
  outline?: boolean;
  disabled?: boolean;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
}

function Button(props: IButtonProps): JSX.Element {
  const renderText = (
    disabledStyle?: StyleProp<TextStyle>,
  ): JSX.Element | undefined => {
    if (!props.text) {
      return;
    }

    return (
      <FontText
        fontWeight={props.fontWeight || 'regular'}
        fontStyle={props.fontStyle || 'subHeadline'}
        style={[styles.text, props.textStyle, disabledStyle]}>
        {props.text}
      </FontText>
    );
  };

  const sizeStyle = styles.containerBySize[props.size || 'medium'];
  const outlineStyle = props.outline ? styles.containerOutline : null;
  const disabled = !!props.disabled;
  const disabledStyle = props.disabled ? styles.containerDisabled : null;
  const textDisabledStyle = props.disabled ? styles.textDisabled : null;

  return (
    <Pressable
      onPress={props.onPress}
      disabled={disabled}
      style={[
        styles.container,
        outlineStyle,
        sizeStyle,
        disabledStyle,
        props.style,
      ]}>
      {renderText(textDisabledStyle)}
      {props?.children}
    </Pressable>
  );
}

export default Button;
