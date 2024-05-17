import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import Button from '../../components/Button/Button';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import FontText from '../../components/FontText/FontText.tsx';
import Input from '../../components/Input/Input.tsx';
import PasswordInput from '../../components/PasswordInput/PasswordInput.tsx';
import backend from "../../backend";
import { Dropdown } from "react-native-element-dropdown";
import style from "./AddUser.style.ts";
import Switcher from "../../components/Switch/Switch.tsx";
import { lightThemeColors } from "../../configs/colors.ts";

const schema = yup.object().shape({
  type: yup.mixed().oneOf(['manual', 'advanced']),
  name: yup.string().required('Name is required'),
  password: yup.string().required('Password is required'),
  serverAddress: yup.string().required('Server Address is required'),
  serverPath: yup.string().optional(),
  port: yup.string().optional(),
});

type Props = NativeStackScreenProps<RootStackParamList, 'AddUser'>;

export default function AddUser(props: Props): JSX.Element {
  const [isFocus, setIsFocus] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [accountType, setAccountType] = useState('manual');
  const [doShowPassword, setShowPassword] = useState<boolean>(false);
  const [doUseSsl, setUseSsl] = useState<boolean>(true);

  const onCreateUser = async (formData: any) => {
    const userBody = {
      ...formData,
      useSsl: doUseSsl,
      type: accountType,
    }

    try {
      await backend.createUser(userBody);

      props.navigation.navigate('UserList');
    } catch (e) {
      console.error('something went wrong', e)
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={style.container}>
        <View>
          <Dropdown
            data={[
              {
                label: 'Manual',
                value: 'manual',
              },
              {
                label: 'Advanced',
                value: 'advanced',
              }
            ]}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Account type' : '...'}
            value={accountType}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setAccountType(item.value)
              setIsFocus(false);
            }}
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <Input value={value} onChangeText={onChange} placeholder="Name" />
            )}
            name="name"
          />
          {errors.name && <FontText style={{color: lightThemeColors.Red}}>{errors.name.message}</FontText>}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <PasswordInput
                containerStyle={{flexDirection: 'row', paddingTop: 20}}
                inputStyle={{flex: 1}}
                onDisplayPassword={() => setShowPassword(!doShowPassword)}
                secureTextEntry={!doShowPassword}
                value={value}
                onChangeText={onChange}
                placeholder="Password"
              />
            )}
            name="password"
          />
          {errors.password && <FontText style={{color: lightThemeColors.Red}}>{errors.password.message}</FontText>}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <Input
                value={value}
                onChangeText={onChange}
                placeholder="Server Address"
              />
            )}
            name="serverAddress"
          />
          {errors.serverAddress && (
            <FontText style={{color: lightThemeColors.Red}}>{errors.serverAddress.message}</FontText>
          )}
          {
            accountType === 'advanced' ?
              (
                <>
                  <Controller
                    control={control}
                    rules={{
                      required: false,
                    }}
                    render={({field: {onChange, value}}) => (
                      <Input
                        value={value}
                        onChangeText={onChange}
                        placeholder="Server Path"
                      />
                    )}
                    name="serverPath"
                  />

                  <Controller
                    control={control}
                    rules={{
                      required: false,
                    }}
                    render={({field: {onChange, value}}) => (
                      <Input
                        value={value}
                        inputMode={'numeric'}
                        onChangeText={onChange}
                        placeholder="Port"
                      />
                    )}
                    name="port"
                  />

                  <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 24}}>
                    <FontText style={{marginRight: 24}}>Use SSL</FontText>
                    <Switcher value={doUseSsl} onValueChange={() => setUseSsl(!doUseSsl)}/>
                  </View>
                </>
              ) : <></>
          }
        </View>
        <Button onPress={handleSubmit(onCreateUser)} text={'Submit'}/>
      </View>
    </SafeAreaView>
  );
}
