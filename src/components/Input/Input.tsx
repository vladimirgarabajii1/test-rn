import React, {useState} from 'react';
import {
  Platform,
  StyleProp,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {
  InputModeOptions,
  ReturnKeyTypeOptions,
} from 'react-native/Libraries/Components/TextInput/TextInput';
import style from './Input.style';
import {lightThemeColors} from '../../configs/colors.ts';

interface IProps {
  value?: string;
  onChangeText?: (field: string) => void;
  placeholder?: string;
  inputMode?: InputModeOptions;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: ViewStyle;
  onFocus?: () => void;
  onBlur?: () => void;
  returnKeyType?: ReturnKeyTypeOptions;
  iconView?: JSX.Element;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  autoFocus?: boolean;
  maxLength?: number;
  selectTextOnFocus?: boolean;
  editable?: boolean;
  setActive?: (isActive: boolean) => void;
  onPress?: () => void;
  numberOfLines?: number;
  multiline?: boolean;
}

function Input(props: IProps): JSX.Element {
  const [value, setValue] = useState<string>();
  const [isActive, setActive] = useState<boolean>(false);

  const returnKeyType = props.returnKeyType || 'done';
  const paddingVertical =
    Platform.OS === 'android' ? {paddingVertical: 0} : null;
  const renderIconView = (): JSX.Element => {
    if (props.iconView && !value) {
      return props.iconView;
    }

    return <></>;
  };

  const onChangeText = (field: string) => {
    setValue(field);
    props.onChangeText?.(field);
  };

  const onBlur = () => {
    props.onBlur?.();

    setActive(false);
    props.setActive?.(false);
  };

  const onFocus = () => {
    props.onFocus?.();

    setActive(true);
    props.setActive?.(true);
  };

  const renderPlaceholder = (): string => {
    if (!props.placeholder) {
      return '';
    }

    return props.placeholder;
  };

  return (
    <View
      style={[
        style.container,
        isActive && style.activeInput,
        props.iconView && style.flexContainer,
        props.containerStyle,
      ]}>
      {renderIconView()}
      <TextInput
        onPressIn={props.onPress}
        autoFocus={props.autoFocus}
        autoCapitalize={props.autoCapitalize}
        placeholderTextColor={lightThemeColors.SecondaryLabel90}
        style={[
          style.textInput,
          paddingVertical,
          props.inputStyle,
          style.lineHeight,
        ]}
        onChangeText={onChangeText}
        value={props.value}
        inputMode={props.inputMode}
        placeholder={renderPlaceholder()}
        onFocus={onFocus}
        onBlur={onBlur}
        editable={props.editable}
        returnKeyType={returnKeyType}
        autoCorrect={false}
        spellCheck={false}
        selectTextOnFocus={props.selectTextOnFocus}
        maxLength={props.maxLength}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
      />
    </View>
  );
}

export default Input;
