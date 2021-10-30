Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Couchchurro 
acm-projects
/
Mars-Life
Public
2
3
0
Code
Issues
12
Pull requests
Discussions
Actions
Projects
1
Wiki
Security
Insights
Settings
Mars-Life/App.js /
@Couchchurro
Couchchurro a
Latest commit d3bc727 44 minutes ago
 History
 2 contributors
@Couchchurro@rishixyz9
24 lines (20 sloc)  470 Bytes
   
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
 import HomeScreen from './screens/HomeScreen';

export default function App() {

   return (
      <HomeScreen/>
   );
  }
const style = StyleSheet.create({

});