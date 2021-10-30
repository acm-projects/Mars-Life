<<<<<<< HEAD

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 *
 */
 
 import  React from 'react';
 import { StyleSheet, SafeAreaView, Text, View, Image, ImageBackground} from 'react-native';
 import { StatusBar } from 'expo-status-bar';
import SplashLoad from './components/SplashLoad';
import { useState, useEffect } from 'react';
import HomeView from './components/HomeView';
import RoverPhotos from './components/RoverPhotos';
import Header from './Shared/header';
 
 
export default function App(){
 
const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 3000);
  }, []);

  return (
    <View style={style.container}>
      
      {show ? <SafeAreaView style={style.photocontainer}>
        <RoverPhotos/>
      </SafeAreaView> : <SplashLoad/> }
      
      <StatusBar style="auto" />
      
    </View>
  );
  
  

}


const style = StyleSheet.create({

  container: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#080B1F'
  },

  photocontainer: {
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#080B1F'
  },
  loadText: {
    color: "#FFFFFF"
  }
});

=======
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { FlatList, Button, StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, Pressable, TouchableHighlight } from 'react-native';

export default function App() {
   //*************** render causing problems *****************
   // Since the breaking news is not part of the news list, it can be shown individually
    const [people, setPeople] = useState([
      { name: 'Sankalp', key: '1'},
      { name: 'Batman', key: '2'},
      { name: 'Superman', key: '3'},
      { name: 'Flash', key: '4'},
      { name: 'Spiderman', key: '5'},
      { name: 'Ironman', key: '6'},
      { name: 'Captain America', key: '7'}
    ]);

    return (
      <View style={styles.container}>
        <LinearGradient 
          colors={['#D0764E', '#13151E']} 
          style={styles.linearGradient}
          >

        <ScrollView>
          <View>
            <Text style={styles.topNews}> {people.name} </Text> 
          </View>

          { people.map(item => (
            <View key={item.key}>
              <TouchableOpacity onPress={() => pressHandler(item.key)} >
                <Text style={styles.item}> {item.name} </Text>
              </TouchableOpacity>
            </View>
        ))}
        </ScrollView>

        </LinearGradient>
      </View>

    );
}

const pressHandler = (key) => {            //print the key when an item is pressed
  console.log(key)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#D0764E',
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    backgroundColor: '#ff5733'
  },
  item: {
    overflow: 'hidden',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#E14616',
    fontSize: 20,
    borderColor: '#E14616',
    borderWidth: 1,
    borderRadius: 10,
  },
  topNews: {
    overflow: 'hidden',
    marginTop: 24,
    padding: 95,
    backgroundColor: '#E14616',
    fontSize: 20,
    borderColor: '#E14616',
    borderWidth: 1,
    borderRadius: 10,
  },
  linearGradient: {
    //borderRadius: 5,
    //alignItems: 'center',
    //justifyContent: 'center',
    height: 200,
    width: 350,
  }
});









//----------original App.js----------

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
>>>>>>> ss
