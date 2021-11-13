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
import MainContainer from './navigation/MainContainer';
 
export default function App(){
 
const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 3000);
  }, []);

  return (

    
    //<View style={style.container}>
      
      //{show ? <SafeAreaView style={style.photocontainer}>
      <MainContainer/>
      //</SafeAreaView> : <SplashLoad/> }
      
      //<StatusBar style="auto" />
      
    //</View>
  );
  
  

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

