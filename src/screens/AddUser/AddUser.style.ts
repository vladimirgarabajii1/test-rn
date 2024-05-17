import {StyleProp, ViewStyle} from 'react-native';
import {lightThemeColors} from '../../configs/colors.ts';

const container: StyleProp<ViewStyle> = {
  paddingHorizontal: 16,
  paddingBottom: 28,
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: 50,
};

export default {
  container,
};
