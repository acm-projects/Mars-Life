import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, Pressable, TouchableHighlight } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Sankalp', key: '1'},
    { name: 'Batman', key: '2'},
    { name: 'Superman', key: '3'},
    { name: 'Flash', key: '4'},
    { name: 'Spiderman', key: '5'},
    { name: 'Ironman', key: '6'},
    { name: 'Captain America', key: '7'}
  ]);

  //TouchableOpacity or TouchableHighlight (and withoutFeedback) can be used for clickable view

  //------TO DO----------
  // fix the border of each view so that it is aligned properly and overlaps 
  // view. (to overlap just make the border bigger and rounder so make the view size smaller??)
  // If statements don't work in JSX? Conditional rendering!

  return (
    <View style={styles.container}>

      <ScrollView>
        { people.map(item => (
          <View key={item.key}>
            <TouchableOpacity onPress={null} >
              <Text style={styles.item}> {item.name} </Text>
            </TouchableOpacity>
          </View>
       ))}
      </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0764E',
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
    //make the top article big
  },
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