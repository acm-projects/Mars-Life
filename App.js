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
 import Weather from './weather';
 import WeatherTile from './components/weatherTile';

export default function App() {

   return (
      <Weather />
   );
  }
const style = StyleSheet.create({

});