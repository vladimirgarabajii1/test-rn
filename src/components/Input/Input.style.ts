import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import Font from '../../configs/font';
import {lightThemeColors} from '../../configs/colors.ts';

const container: StyleProp<ViewStyle> = {
  marginTop: 30,
  paddingVertical: 6,
  borderBottomWidth: 1,
  borderBottomColor: lightThemeColors.Separator100,
};

const activeInput: StyleProp<ViewStyle> = {
  borderBottomColor: lightThemeColors.HavePurple,
};

const flexContainer: StyleProp<ViewStyle> = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
};

const lineHeight: StyleProp<TextStyle> = {
  lineHeight: 20,
};

const textInput: StyleProp<TextStyle> = {
  ...Font.getFontStyle('regular', 'body'),
  color: lightThemeColors.PrimaryLabel100,
};
export default {
  container,
  flexContainer,
  activeInput,
  lineHeight,
  textInput,
};
