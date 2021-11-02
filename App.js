import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {Icon, Button, StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, Pressable, TouchableHighlight } from 'react-native';

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

    const headNum = '0.0';

    return (
      <View style={styles.container}>

      <Button
        // buttonStyle={                  back arrow button in creation

        // }
        icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />
        }
        title="B"
      />

        {/* <ImageBackground
          style = {styles.container}
          source = {require('./assets/NewsBackgroundImg.png')}> */}

        <LinearGradient 
          colors={['#D0764E', '#13151E']} 
          style={styles.linearGradient}
          >
        

        <ScrollView>
          <View>
            <TouchableOpacity onPress={() => pressHandler(headNum)} >
              <Text style={styles.topNews}> {people.name} </Text> 
            </TouchableOpacity>
          </View>

          { people.map(item => (
            <View key={item.key}>
              <TouchableOpacity onPress={() => pressHandler(item.key)} >
                <Text style={styles.item}> {item.name} </Text>
              </TouchableOpacity>
            </View>
        ))}
        </ScrollView>

        {/* </ImageBackground> */}
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
    backgroundColor: '#D0764E',
    // paddingTop: 40,
    // paddingHorizontal: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
    flex: 1,
    resizeMode: 'stretch',
    overflow: 'hidden',
  },
  item: {
    overflow: 'hidden',
    marginTop: 24,
    marginHorizontal: 20,
    padding: 30,
    backgroundColor: '#E14616',
    fontSize: 20,
    borderColor: '#E14616',
    borderWidth: 1,
    borderRadius: 10,
  },
  topNews: {
    overflow: 'hidden',
    marginTop: 50,
    padding: 95,
    backgroundColor: '#E14616',
    marginHorizontal: 20,
    fontSize: 20,
    borderColor: '#E14616',
    borderWidth: 1,
    borderRadius: 10,
  },
  linearGradient: {
    //check to see if we need to change the percentage of the color fade background
    //borderRadius: 5,
    //alignItems: 'center',
    //justifyContent: 'center',
    //height: 200,
    //width: 350,
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