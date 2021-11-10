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
import HomeView from './components/HomeView';
import RoverPhotos from './components/RoverPhotos';
import Header from './Shared/header';
import News from './News';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import Navigator from './routes/homeStack';
 
export default function App(){
 
const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 3000);
  }, []);

  return (
    // <View style={style.container}>
      
    //   {show ? <SafeAreaView style={style.photocontainer}>
      <Navigator />
    //   </SafeAreaView> : <SplashLoad/> }
      
    //   <StatusBar style="auto" />
      
    // </View>
  );
  
  

}


const style = StyleSheet.create({

  container: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },

  photocontainer: {                        //how do I remove the that blue bar from top???
    //backgroundColor: "#fff",             //background photo of the image carousel
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    //backgroundColor: '#080B1F'
    //backgroundColor: '#fff'
  },
  loadText: {
    color: "#FFFFFF"
  }
});

