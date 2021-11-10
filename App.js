
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 *
 */
 
 import  React, { useState } from 'react';
 import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
 import * as Font from 'expo-font';
 import {AppLoading} from 'expo';
 import News from './News';
 import { StatusBar } from 'expo-status-bar';

 //import HomeScreen from '../HomeScreen';
 import Navigator from './routes/homeStack';

export default function App() {

   return (
      <Navigator />
      //<HomeScreen/>
   );
  }
const style = StyleSheet.create({

});
