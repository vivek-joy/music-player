/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './src/containers/Login';
import colors from './src/themes/colors';
import Register from './src/containers/Register';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

import Touchable from 'react-native-platform-touchable';
import spacing from './src/themes/spacing';
import UserAvatar from './src/components/common/UserAvatar';
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.black,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'Poppins-Bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Touchable style={{paddingLeft: spacing(4)}}>
              <Fontisto name="nav-icon-grid-a" size={32} color={colors.white} />
            </Touchable>
          ),
          headerTitle: () => (
            <Touchable style={{paddingLeft: spacing(4)}}>
              <Feather name="fast-forward" size={40} color={colors.blue} />
            </Touchable>
          ),
          headerRight: () => (
            <View style={{paddingRight: spacing(2)}}>
              <UserAvatar showStatus />
            </View>
          ),
        }}
        name="Home"
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.black,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
          },
          headerTitleAlign: 'center',
        }}
        initialRouteName="Main">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Main"
          component={TabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
