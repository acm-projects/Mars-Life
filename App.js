/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 *
 */
 
 import  React, { useState } from 'react';
 import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

export default class weather extends React.Component{
 


  render(){
   return (
    <ImageBackground
      style = {style.background}
      source = {require('./assets/HomeBack.png')}>
      <View style = {style.body}>
        <View style = {style.header}>
          <Text style = {style.headerText}> Weather</Text>
        </View>
        <Image
            style = {style.mars}
            source = {require('./assets/Mars.png')}></Image>
        <View style = {style.sol}>
          <Text style = {style.solText}> Sol xxxx</Text>
        </View>





      </View>
    </ImageBackground>

   );
  }
}
const style = StyleSheet.create({
    background:{
    flex: 1,
    resizeMode: 'stretch'
  },
  body: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 50,
    color: '#F1FAEE',
  },
  mars:{
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    // height: '45%',
    // width: '65%'
   // padding
  },
  sol: {
    width: '47%',
    height: '48%',
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    borderStartColor: '#323547',
    margin: 5,
  },
  solText: {
    fontSize: 30,
    color: '#F1FAEE',
    fontWeight: '800'
  }
});
