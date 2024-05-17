import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {lightThemeColors} from '../../configs/colors.ts';

export type ButtonSize = 'small' | 'medium' | 'large';

const container: StyleProp<ViewStyle> = {
  borderRadius: 15,
  width: '100%',
  backgroundColor: lightThemeColors.HaveGreen,
  paddingHorizontal: 10,
  paddingVertical: 20,
  alignItems: 'center',
};

const containerOutline: StyleProp<ViewStyle> = {
  backgroundColor: 'transparent',
};

const containerDisabled: StyleProp<ViewStyle> = {
  backgroundColor: lightThemeColors.TertiaryFill80,
};

const textDisabled: StyleProp<TextStyle> = {
  color: lightThemeColors.Gray800,
};

const containerSmall: StyleProp<ViewStyle> = {
  paddingHorizontal: 15,
  paddingVertical: 12,
  borderRadius: 12,
};

const containerMedium: StyleProp<ViewStyle> = {
  paddingHorizontal: 20,
  paddingVertical: 15,
  borderRadius: 12,
};

const containerLarge: StyleProp<ViewStyle> = {
  paddingHorizontal: 20,
  paddingVertical: 20,
  borderRadius: 12,
};

const containerBySize: Record<ButtonSize, StyleProp<ViewStyle>> = {
  small: containerSmall,
  medium: containerMedium,
  large: containerLarge,
};

const text: StyleProp<TextStyle> = {
  color: lightThemeColors.SecondaryLabel97,
};

export default {
  container,
  containerOutline,
  containerDisabled,
  textDisabled,
  containerBySize,
  text,
};
