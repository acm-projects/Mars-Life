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
      <ScrollView>
      <View style = {style.body}>
        <View style = {style.header}>
          <Text style = {style.headerText}> Weather</Text>
        </View>

          <Image
            style = {style.mars}
            source = {require('./assets/Mars.png')}></Image>
          <View style = {style.container}>
            <View style = {style.solHeader}>
              <Text style = {style.solText}> Sol XXXX  </Text>
            </View>
            <View style = {style.line}></View>
            <View style = {style.containerInner}>
              <Text style = {style.innerText}>Minimum and Maximum temperature: -xx to -xx </Text>
            </View>
            <View style = {style.containerInner}>
              <Text style = {style.innerText}>Atmospheric Temperature: -xx to -xx</Text>
            </View>
            <View style = {style.containerInner}>
              <Text style = {style.innerText}>Ground Temperature: -xx to -xx </Text>
            </View>
            <View style = {style.containerInner}>
              <Text style = {style.innerText}>Conditions: Sunny</Text>
            </View>
            <View style = {style.containerInner}>
              <Text style = {style.innerText}>Sunrise/Sunset time: idk what format it's in</Text>
            </View>
            <View style = {style.containerInner}>
              <Text style = {style.innerText}>Ultraviolet radiation levels: idk how it's reported</Text>
            </View>
          </View>

          <View style = {style.date}>
            <Text style = {style.dateText}> Oct. 20, 2021</Text>
          </View>








      </View>
      </ScrollView>
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
    height : '20%',
    width: '20%'
    
  },
  // sol: {
  //   marginTop: '14',
  //   width: '40%',
  //   height: '8%',
  //   borderWidth: 8,
  //   borderRadius: 10,
  //   borderColor: '#323547',
  //   borderStartColor: '#323547',
  //   justifyContent: 'center',
  //   alignItems:'center',
  //   alignSelf: 'center',
  //   backgroundColor:'#323547',
  // },
  solText: {
    fontSize: 30,
    color: '#F1FAEE',
    fontWeight: '800'
  },
  container: {
    marginTop: '14',
    width:'90%',
    height:'60%',
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    borderStartColor: '#323547',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#323547',
    flexDirection: 'row',
  },
  solHeader: {
    height: '20%',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  solText:{
    fontSize: 30,
    justifyContent: 'center',
    color: '#F1FAEE',
  },
  line: {
    width: '90%',
    height: '1%',
    backgroundColor: '#F1FAEE',

  },
  containerInner: {
    margin:1,
    width: '90%',
    height: '13%',
  },
  innerText: {
    fontSize: '10',
    justifyContent: 'center',
    color: '#F1FAEE',

  },
  date: {
    borderwidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    borderStartColor: '#323547',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height:'15%',
    width: '70%'
  },
  dateText: {
    fontSize: 20,
    justifyContent: 'center',
    color: '#F1FAEE',
  }

});
