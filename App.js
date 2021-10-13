/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * 
 */

 import  React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   useColorScheme,
   View,
   Image,
   Text,
 } from 'react-native';
 
 
 
 function App() {
 
 
 
 
   return (
       <View style={style.body}>
        <Text style= {style.headerText}>HOME</Text>
        <View style ={style.textWrapper}>
         <Text style={style.newsText }>News</Text>
           <Text style={style.photosText }>Photos</Text>
           <Text style={style.weatherText }>Weather</Text>
          <Text style={style.mapText }>Map</Text>
        </View>
       </View>
   );
 };
 
 const style = StyleSheet.create({
 body:{
   backgroundColor: '#171A2C',
   flex :1
 },
 headerText:{
   marginTop: 10,
   color: '#F1FAEE',
   fontSize: 60,
 
   alignSelf: 'center'
 },
 textWrapper: {
   marginTop: 350,
   marginBottom: 20,
   marginLeft: 10,
   marginRight: 10,
   flex:1,
   justifyContent: 'center',
   flexDirection:'row'
 
 },
 newsText:{
   flex:1,
   backgroundColor: '#323547',
 
   margin:2,
   color: '#F1FAEE',
   fontSize: 20
 },
 photosText:{
   backgroundColor: '#323547',
   flex:1,
   margin:2,
   color: '#F1FAEE',
   fontSize: 20
 },
 weatherText:{
   backgroundColor: '#323547',
   flex: 1,
   margin:2,
   color: '#F1FAEE',
   fontSize: 20
 },
 mapText:{
   backgroundColor: '#323547',
   flex: 1,
   margin: 2,
   color: '#F1FAEE',
   fontSize: 20
 },
 
 
 });
 
 export default App;
 
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
