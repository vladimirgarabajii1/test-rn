import {StyleProp, Switch, ViewStyle} from 'react-native';
import style from './Switch.style';
import React from 'react';

interface IProps {
  value: boolean;
  style?: StyleProp<ViewStyle>;
  onValueChange?: (value: boolean) => void;
}

function Switcher(props: IProps): React.JSX.Element {
  return (
    <Switch style={props.style} value={props.value} onValueChange={props.onValueChange} trackColor={style.trackColor} />
  );
}
export default Switcher;
