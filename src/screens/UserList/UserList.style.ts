import {StyleProp, TextStyle, ViewStyle, ImageStyle} from 'react-native';
import {lightThemeColors} from '../../configs/colors';

const background: StyleProp<ImageStyle> = {
  width: '100%',
  height: 400,
};

const container: StyleProp<ViewStyle> = {
  paddingHorizontal: 16,
  paddingBottom: 28,
  backgroundColor: lightThemeColors.PrimaryLabel100,
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-end',
  minHeight: 50,
};

const signUpButton: StyleProp<ViewStyle> = {
  width: '100%',
  backgroundColor: lightThemeColors.HaveFreshGreen,
};

const loginButtonText: StyleProp<TextStyle> = {
  color: lightThemeColors.HaveFreshGreen,
};

const signUpButtonText: StyleProp<TextStyle> = {
  color: lightThemeColors.SecondaryLabel97,
};

export default {
  signUpButtonText,
  background,
  container,
  signUpButton,
  loginButtonText,
};
