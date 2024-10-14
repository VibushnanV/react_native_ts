/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Forgot, Login} from './index';
import { AuthenticatedTabs } from '../auth_screens/common_screens/index';
const UnAuthStackNavigator = createNativeStackNavigator();
const UnAuthenticatedTabs = () => {
  return (
    <UnAuthStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <UnAuthStackNavigator.Screen name="login" component={Login} />
      <UnAuthStackNavigator.Screen name="auth_tabs" component={AuthenticatedTabs}  />
      <UnAuthStackNavigator.Screen name='forgot' component={Forgot} />
    </UnAuthStackNavigator.Navigator>
  );
};

export default UnAuthenticatedTabs;

const styles = StyleSheet.create({});
