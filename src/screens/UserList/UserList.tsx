import React, {useCallback, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Button from '../../components/Button/Button';
import style from './UserList.style.ts';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import backend, {UserType} from '../../backend';
import FontText from '../../components/FontText/FontText.tsx';
import {lightThemeColors} from '../../configs/colors.ts';
import {useFocusEffect} from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'UserList'>;

export default function UserList(props: Props): JSX.Element {
  const [userList, setUserList] = useState<UserType[]>([]);
  const onAddUser = () => {
    props.navigation.navigate('AddUser');
  };

  useFocusEffect(
    useCallback(() => {
      const getUserList = async () => {
        const result = await backend.getUserList();

        setUserList(result);
      };

      getUserList();
    }, []),
  );

  const renderUser = (user: UserType) => {
    return (
      <View
        style={{
          marginTop: 25,
          backgroundColor: lightThemeColors.SwitchPurple,
          borderRadius: 15,
          paddingHorizontal: 25,
          paddingVertical: 15,
        }}>
        <FontText style={{color: lightThemeColors.PrimaryLabel101}}>
          Id: {user.id}
        </FontText>

        <FontText style={{color: lightThemeColors.PrimaryLabel101}}>
          Username: {user.name}
        </FontText>

        <FontText style={{color: lightThemeColors.PrimaryLabel101}}>
          Type: {user.type}
        </FontText>

        <FontText style={{color: lightThemeColors.PrimaryLabel101}}>
          Server Address: {user.serverAddress}
        </FontText>

        <FontText style={{color: lightThemeColors.PrimaryLabel101}}>
          Use SSL: {user.useSsl ? 'true' : 'false'}
        </FontText>

        {user.serverPath ? (
          <FontText style={{color: lightThemeColors.PrimaryLabel101}}>
            Server Path: {user.serverPath}
          </FontText>
        ) : (
          <></>
        )}

        {user.port ? (
          <FontText style={{color: lightThemeColors.PrimaryLabel101}}>
            Port: {user.port}
          </FontText>
        ) : (
          <></>
        )}
      </View>
    );
  };

  return (
    <View style={style.container}>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
          }}>
          <View style={{flex: 1}}>
            <FlatList
              data={userList}
              renderItem={({item}) => renderUser(item)}
            />
          </View>
          <View>
            <Button
              onPress={onAddUser}
              style={style.signUpButton}
              text={'Add New User'}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
