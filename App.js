/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 *
 */
 
import  React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, ImageBackground, ScrollView} from 'react-native';
 import { StatusBar } from 'expo-status-bar';
import SplashLoad from './components/SplashLoad';
import { useState, useEffect } from 'react';
import RoverPhotos from './components/RoverPhotos';
import Header from './Shared/header';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import Navigator from './routes/homeStack';

 
export default function App(){
 
  const [isLoading, setIsLoading]  = React.useState(true);

  useEffect(() => {
    setTimeout(async() => setIsLoading(false), 3000); // Shows loading screen
  }, []);
  
  if(isLoading) { // Loads for three seconds
    return(
      <View style={style.container}>
        <SplashLoad/>
      </View>
    );
  }
  
  else { // Shows navigator when the loading screen times out
    return( <Navigator/>);
  }
}


const style = StyleSheet.create({

  container: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#080B1F'
  },

  photocontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  loadText: {
    color: "#FFFFFF"
  }
});

