import React from 'react';
import {Platform, TextInput, TextStyle, View, ViewStyle} from 'react-native';
import EyeShowHide from './components/EyeShowHide';
import style from './PasswordInput.style';
import {lightThemeColors} from '../../configs/colors.ts';

interface IProps {
  value?: string;
  onChangeText?: (field: string) => void;
  placeholder: string;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  secureTextEntry: boolean;
  onDisplayPassword: () => void;
}

function PasswordInput(props: IProps): JSX.Element {
  const padding =
    Platform.OS === 'android' ? {paddingVertical: 0} : {paddingVertical: 6};
  return (
    <View style={[style.container, props.containerStyle]}>
      <TextInput
        style={[props.inputStyle, style.textInput, style.lineHeight, padding]}
        onChangeText={props.onChangeText}
        placeholderTextColor={lightThemeColors.SecondaryLabel90}
        value={props.value}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        inputMode={'text'}
        returnKeyType={'done'}
      />
      <EyeShowHide
        state={props.secureTextEntry}
        onPress={props.onDisplayPassword}
      />
    </View>
  );
}

export default PasswordInput;
