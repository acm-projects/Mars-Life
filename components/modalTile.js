import React from "react";
import {StyleSheet, View, Text, Dimensions, Image, ScrollView} from 'react-native';
import * as Font from 'expo-font';

export default class modal extends React.Component{
  render() {
    return (
      <View>
        <View style = {style.container}>
          <Text style = {style.words}>Weather</Text>
        </View>
        <View>
          <Text style = {style.words}>Photo</Text>
        </View>
        <View>
          <Text style = {style.words}>Photo</Text>
        </View>
        <View>
          <Text style = {style.words}>Photo</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container:
  {
    
  },
  words:
  {
    fontSize: 40,
    color: 'white'
  }
  });