import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {lightThemeColors} from '../../configs/colors';
import Font from '../../configs/font';

const container: StyleProp<ViewStyle> = {
  marginTop: 16,
  borderBottomWidth: 1,
  borderBottomColor: lightThemeColors.Separator100,
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
  textInput,
  lineHeight,
};
