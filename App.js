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
import Weather from './screens/weather';
import ExpandedNews from './screens/expanded_news';

export default function App() {

   return (
      <ExpandedNews />
   );
  }
const style = StyleSheet.create({

});
