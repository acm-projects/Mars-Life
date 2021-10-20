
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 *
 */
 
 import  React from 'react';
 import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
 import { StatusBar } from 'expo-status-bar';
import SplashLoad from './components/SplashLoad';
import { useState, useEffect } from 'react';
import HomeView from './components/HomeView';

 
 
export default function App(){
 
const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 3000);
  }, []);

  return (
    <View style={style.container}>
      {show ?<HomeView/> : <SplashLoad /> }
      <StatusBar style="auto" />
    </View>
  );
  
  

}


const style = StyleSheet.create({

  container: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#080B1F'
  },

  loadText: {
    color: "#FFFFFF"
  }
});

