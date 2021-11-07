import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExpandedNews from './screens/expanded_news';

export default function App() {
  return (
    <ExpandedNews />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080B1F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadText: {
    color: "#FFFFFF"
  }
});
