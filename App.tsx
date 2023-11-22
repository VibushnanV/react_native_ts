/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UnAuthenticatedTabs} from './src/screens/unauth_screens';
import { AuthenticatedTabs } from './src/screens/auth_screens/common_screens';
import { Colors } from './src/constants/colors';
const App = () => {
  const [isAuthenticated,setIsAuth] = useState(false);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.brand}></StatusBar>
      {!isAuthenticated ? <UnAuthenticatedTabs /> : < AuthenticatedTabs/>}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});


