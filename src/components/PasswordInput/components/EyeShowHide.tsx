import React from 'react';
import {Image, Platform, Pressable} from 'react-native';
import EyeShowHideStyle from './EyeShowHide.style';

export default function EyeShowHide(props: {
  state: boolean;
  onPress: () => void;
}) {
  const image = props.state
    ? require('../assets/eye-show.png')
    : require('../assets/eye-hide.png');
  const imageStyle = Platform.OS === 'android' ? {marginTop: 24} : null;
  return (
    <Pressable onPress={props.onPress}>
      <Image source={image} style={[EyeShowHideStyle.image, imageStyle]} />
    </Pressable>
  );
}
