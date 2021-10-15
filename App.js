import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashLoad from './components/SplashLoad';
import { useState, useEffect } from 'react';


export default function App() {
  
  

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 3000);
  }, []);
  
  return (
    <View style={styles.container}>
      {show ?<Text style={styles.loadText}>Finished loading!</Text> : <SplashLoad /> }
      <StatusBar style="auto" />
    </View>
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

