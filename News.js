import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {Icons, Button, StyleSheet, Dimensions, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, Pressable, TouchableHighlight } from 'react-native';

const {width, height} = Dimensions.get('window')

export default function News() {
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

        {/* <View style={styles.backButton}>
          <Icons name={'arrow-back'} size={width*0.075} color='#000' style={styles.arrowButton} />
            <Text style={styles.headerText}>News</Text>
          <Icons name={'menu'} size={width*0.075} color='#fff' style={styles.arrowButton} />
        </View> */}

      {/* <Button
        // buttonStyle={                  back arrow button in creation

        // }
        icon={
          <Icons
            name="arrow-right"
            size={15}
            color="white"
          />
        }
        title="B"
      /> */}

        <LinearGradient 
          colors={['#D0764E', '#13151E']} 
          style={styles.linearGradient}
          >
        

        <ScrollView>
        <View>
            <TouchableOpacity onPress={() => pressHandler(headNum)}>
              <View style={styles.topNews}> 
                <Image style = {styles.newsImage} source = {require('./assets/NewsBackgroundImg.png')}/>
                <Text style={styles.topNewsText}>{"people.name"} </Text>
              </View> 
            </TouchableOpacity>
          </View>

          { people.map(item => (
            <TouchableOpacity onPress={() => pressHandler(item.key)} >
                <View key={item.key} style={styles.item}>
                    <Text> {item.name} </Text>
                </View>
            </TouchableOpacity>
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
    backgroundColor: '#D0764E',
    // paddingTop: 40,
    // paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
    resizeMode: 'stretch',
    overflow: 'hidden',
  },
  
  // textItem: {
  //   alignContent: 'center',
  // },

  item: {
    overflow: 'hidden',
    marginTop: 24,
    marginHorizontal: 20,
    padding: 40,
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
    // padding: 95,
    backgroundColor: '#E14616',
    marginHorizontal: 20,
    fontSize: 20,
    borderColor: '#E14616',
    borderWidth: 1,
    borderRadius: 10,
  },
  topNewsText: {
    marginTop: 40,
    marginRight: 30
  },
  linearGradient: {
    //check to see if we need to change the percentage of the color fade background
    //borderRadius: 5,
    //alignItems: 'center',
    //justifyContent: 'center',
    //height: 200,
    //width: 350,
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
    marginTop: 20,
    marginBottom: 20,
    // marginHorizontal: 20,
    //marginLeft: 30,
    marginRight: 50,
    padding: 80,
    //borderWidth: 1,
    borderRadius: 10,
    height: 100,
    width: 100
  }
});






