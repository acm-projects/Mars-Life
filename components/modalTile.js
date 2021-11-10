import React from "react";
import {StyleSheet, View, Text, Dimensions, Image, ScrollView} from 'react-native';
import * as Font from 'expo-font';

export default class modal extends React.Component{
  render() {
    return (
      <View style = {style.leftJustify}>
        <View style = {style.minMaxOuter}>
          <View style = {style.minMaxInner}>
          <Text style = {style.atmospheric}>Weather</Text>
          </View>
        </View>
        <View style = {style.sideline}/>

        <View style = {style.minMaxOuter}>
          <View style = {style.minMaxInner}>
          <Text style = {style.atmospheric}>Photos</Text>
          </View>
        </View>
        <View style = {style.sideline}/>

        <View style = {style.minMaxOuter}>
          <View style = {style.minMaxInner}>
          <Text style = {style.atmospheric}>News</Text>
          </View>
        </View>
        <View style = {style.sideline}/>

        <View style = {style.minMaxOuter}>
          <View style = {style.minMaxInner}>
          <Text style = {style.atmospheric}>Map</Text>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  leftJustify: {
    marginLeft: 'auto',
  },
  container:
  {
    justifyContent: 'center',
    alignSelf: 'center'
  },
  words:
  {
    fontSize: 40,
    color: 'white'
  },
  minMaxOuter:{
    paddingVertical: 5,
    width: '70%',
    borderWidth: 8,
    borderColor: '#323547',
    borderStartColor: '#323547',
    borderLeftColor: '#F1FAEE',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#323547',
    flexDirection: 'row',
    flex: 1,
  },

  atmosphericInner: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  atmospheric: {
    color: '#F1FAEE',
    fontSize: 40,
  //   fontFamily: 'Nunito'
  },
  
  sideline: {
    height: 2,
    width: '70%',
    backgroundColor: '#F1FAEE',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  });