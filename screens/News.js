import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {Icons, Button, StyleSheet, Dimensions, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, Pressable, TouchableHighlight } from 'react-native';
import NewsItem from '../components/newsItem';

const {width, height} = Dimensions.get('window')

export default function News() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#D0764E', '#080B1F']}>
          <ScrollView>
            <NewsItem />
          </ScrollView>
        </LinearGradient>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0764E',
    // paddingTop: 40,
    // paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
    resizeMode: 'stretch',
    overflow: 'hidden',
  },
  item: {
    flexDirection: 'row',
    overflow: 'hidden',
    marginTop: 24,
    marginHorizontal: 20,
    backgroundColor: '#E14616',
    fontSize: 20,
    borderColor: '#E14616',
    borderWidth: 1,
    borderRadius: 10,
  },
  topNews: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-evenly',
    overflow: 'hidden',
    marginTop: 50,
    backgroundColor: '#E14616',
    marginHorizontal: 20,
    fontSize: 20,
    borderColor: '#E14616',
    borderWidth: 1,
    borderRadius: 10,
  },
  topNewsImage: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 50,
    //marginLeft: 10,               //to fix the news screen left margin on the image
    padding: 80,
    borderRadius: 10,
    height: 100,
    width: 100
  },
  topNewsText: {
    marginTop: 40,
    marginRight: 30
  },
  backButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: width*.05,
  },
  arrowButton: {
    overflow: 'hidden',
    color: 'white',
    backgroundColor: '#FD773B',
    padding: width*.01,
    borderColor: '#B35335',
    borderRadius: 10,
    borderWidth: 2,
  }, 
  newsImage: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 9,
    padding: 10,
    borderRadius: 10,
    height: 65,
    width: 65
  },
  newsText: {
    marginTop: 10,
    marginLeft: 80,
  },
});




