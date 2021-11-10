import React from "react";
import {StyleSheet, View, Text, Dimensions, Image, ScrollView} from 'react-native';
import * as Font from 'expo-font';

export default class modal extends React.Component{
  render() {
    return (
      <View>
        <View style = {style.minMaxOuter}>
          <View style = {style.minMaxInner}>
          <Text style = {style.atmospheric}>Weather</Text>
          </View>
        </View>
        <View style = {style.container}>
          <Text style = {style.words}>Photo</Text>
        </View>
        <View style = {style.container}>
          <Text style = {style.words}>News</Text>
        </View>
        <View style = {style.container}>
          <Text style = {style.words}>Map</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
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
    width: '85%',
    borderWidth: 8,
    borderRadius: 5,
    borderColor: '#323547',
    borderStartColor: '#323547',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#323547',
    flexDirection: 'row',
    flex: 1,
    marginTop: 15,
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
  });