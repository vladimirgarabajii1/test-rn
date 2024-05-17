import {StyleProp, TextStyle} from 'react-native';

// Types
type FontType = {
  caption2: TextStyle;
  caption1: TextStyle;
  footnote: TextStyle;
  subHeadline: TextStyle;
  callout: TextStyle;
  body: TextStyle;
  headline: TextStyle;
  title3: TextStyle;
  title2: TextStyle;
  title1: TextStyle;
  largeTitle: TextStyle;
};

type Font = {
  regular: FontType;
  bold: FontType;
};

export type FontWeight = keyof Font;
export type FontStyle = keyof FontType;

// Styles
const fontMedium: StyleProp<TextStyle> = {
  fontFamily: 'PublicSans-Regular',
};

const fontBold: StyleProp<TextStyle> = {
  fontFamily: 'PublicSans-Bold',
  fontWeight: '600',
};

const weight400: StyleProp<TextStyle> = {
  ...fontMedium,
  fontWeight: '400',
};

const weight600: StyleProp<TextStyle> = {
  ...fontMedium,
  fontWeight: '600',
};

const caption2: StyleProp<TextStyle> = {
  ...weight400,
  fontSize: 11,
  lineHeight: 13,
};

const caption1: StyleProp<TextStyle> = {
  ...weight400,
  fontSize: 12,
  lineHeight: 16,
};

const footnote: StyleProp<TextStyle> = {
  ...weight400,
  fontSize: 13,
  lineHeight: 18,
  letterSpacing: -0.08,
};

const subHeadline: StyleProp<TextStyle> = {
  ...weight400,
  fontSize: 15,
  lineHeight: 20,
  letterSpacing: -0.24,
};

const callout: StyleProp<TextStyle> = {
  ...weight400,
  fontSize: 16,
  lineHeight: 21,
  letterSpacing: -0.32,
};

const body: StyleProp<TextStyle> = {
  ...weight400,
  fontSize: 17,
  lineHeight: 25,
};

const headline: StyleProp<TextStyle> = {
  ...weight600,
  fontSize: 17,
  lineHeight: 22,
  letterSpacing: -0.41,
};

const title3: StyleProp<TextStyle> = {
  ...weight400,
  fontSize: 20,
  lineHeight: 24,
  letterSpacing: -0.36,
};

const title2: StyleProp<TextStyle> = {
  ...weight400,
  fontSize: 22,
  lineHeight: 28,
  letterSpacing: -0.36,
};

const title1: StyleProp<TextStyle> = {
  ...weight400,
  fontSize: 28,
  lineHeight: 34,
  letterSpacing: -0.36,
};

const largeTitle: StyleProp<TextStyle> = {
  ...weight400,
  fontSize: 32,
  lineHeight: 41,
  letterSpacing: -0.37,
};

// Font Types
const regular: FontType = {
  caption2,
  caption1,
  footnote,
  subHeadline,
  callout,
  body,
  headline,
  title3,
  title2,
  title1,
  largeTitle,
};

const bold: FontType = {
  caption2: {...caption2, ...fontBold, letterSpacing: 0.06},
  caption1: {...caption1, ...fontBold, fontWeight: '500'},
  footnote: {...footnote, ...fontBold},
  subHeadline: {...subHeadline, ...fontBold, letterSpacing: -0.5},
  callout: {...callout, ...fontBold},
  body: {...body, ...fontBold, lineHeight: 22, letterSpacing: -0.41},
  headline: {...headline, ...fontBold},
  title3: {...title3, ...fontBold, fontWeight: '700', letterSpacing: -0.38},
  title2: {...title2, ...fontBold, fontWeight: '700', letterSpacing: -0.37},
  title1: {...title1, ...fontBold, fontWeight: '700', lineHeight: 32.9},
  largeTitle: {...largeTitle, ...fontBold, fontWeight: '700'},
};

const getFontStyle = (weight: FontWeight, fontStyle: FontStyle): TextStyle => {
  const font: Font = {
    regular,
    bold,
  };

  return font[weight][fontStyle];
};

export default {
  getFontStyle,
};
