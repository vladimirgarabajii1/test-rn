import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {StatusBar} from 'react-native';
import UserList from '../screens/UserList/UserList.tsx';
import AddUser from '../screens/AddUser/AddUser.tsx';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Root(): React.JSX.Element {
  const initialRoute = 'UserList';

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={initialRoute}>
        <Stack.Screen name={'UserList'} component={UserList} />
        <Stack.Screen name={'AddUser'} component={AddUser} />
      </Stack.Navigator>
    </>
  );
}

export default Root;
