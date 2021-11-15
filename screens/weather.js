/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 *
 */
 
import  React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions, Modal} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Font from 'expo-font';
import WeatherTile from '../components/weatherTile';
import ModalTile from '../components/modalTile'; 
import Icons from 'react-native-vector-icons/MaterialIcons';
//import Ionicons from 'react-native-vector-icons/MaterialIcons';

import Ionicons from 'react-native-vector-icons/Ionicons';

import SplashLoad from '../components/SplashLoad';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

export default function Weather({navigation}) {
   
  const homeHandler = () => {
    navigation.navigate('home');
  }

  const newsHandler = () => {
    navigation.navigate('news')
  }

  const photoHandler = () => {
    navigation.navigate('photos')
  }

  const weatherHandler = () => {
    navigation.navigate('weather')
  }
  
  const[modalOpen, setModalOpen] = useState(false);

  const [loaded] = Font.useFonts({
    Nunito: require('../assets/Nunito.ttf')
  });
 
  // if(!loaded){
  //   return <SplashLoad style={justifyContent='center'}/>
  // }

  return (
    <View style={style.container2}>
    <LinearGradient style={style.background} colors={['#D0764E', '#080B1F']}>
      <View style = {style.body}>
        <ScrollView>
        <WeatherTile />
         
          </ScrollView>

          <View style  = {style.bottomBar}>
            <View style = {style.bottomInner}>
            <Ionicons name={'home'} size={width*0.095, height*0.05} color='#080B1F' style={style.button}  onPress={homeHandler}/>
              {/* <Text style = {style.bottomText}>adsfasdfasdf</Text> */}
            </View>
            <View style = {style.bottomInner}>
            <Ionicons name={'image'} size={width*0.075, height*0.055} color='#080B1F' style={style.button} onPress={photoHandler}/>
              {/* <Text style = {style.bottomText}>adsfasdfasdf</Text> */}
            </View>
            <View style = {style.bottomInner}>
                <Ionicons name={'cloud'} size={width*0.075, height*0.055} color='#080B1F' style={style.button} onPress={weatherHandler}/>
              {/* <Text style = {style.bottomText}>adsfasdfasdf</Text> */}
            </View>
            
            <View style = {style.bottomInner}>
              <Ionicons name={'newspaper'} size={width*0.075, height*0.05} color='#000' style={style.button} onPress = {newsHandler}/>
              {/* <Text style = {style.bottomText}>adsfasdfasdf</Text> */}
            </View>
          </View>
      </View>
    </LinearGradient>
    </View>
   );
  }
const style = StyleSheet.create({
  bottomBar:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
     marginTop: height*0.035,
     marginBottom: height * 0.035,
    //backgroundColor: 'white'
    opacity:1
  },
  bottomInner:{
    width: '20%',
   // backgroundColor: 'white',
    marginHorizontal: '2%',

  },
  scroll: {
    marginBottom: height * 0.055,
  },


  background: {
    flex: 1,
    resizeMode: 'stretch',
    height: '100%',
    width: '100%'
  },
  body: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    paddingVertical: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    //flex:1,
  },



  
  headerText: {
    fontSize: 50,
    color: '#F1FAEE',
  //  fontFamily: 'Nunito'
  },

  animation: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    
  },
 
  mars:{
    justifyContent: 'center',
    alignSelf: 'center',
  },
  solTemp: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#323547',
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    width: '40%',
    marginBottom: 10
  },
  solTempText: {
    fontSize: 55,
    color: '#F1FAEE',
   fontFamily: 'Nunito'
  },
  sol: {
    marginTop: 1,
    width: '40%',
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    justifyContent: 'center',
    alignItems:'center',
    alignSelf: 'center',
    backgroundColor:'#323547',
  },
 
  solText: {
    fontSize: 30,
    color: '#F1FAEE',
    fontWeight: '800',
   // fontFamily: 'Nunito',
    justifyContent: 'center'
  },
 
 
  container: {
    marginTop: 14,
    width:'70%',
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#323547',
    flexDirection: 'row',
    flex: 1
  },
 
  container2: {
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

  solText:{
    fontSize: 30,
    color: '#F1FAEE',
   fontFamily: 'Nunito'
  },
 
  date: {
    marginTop: 20,
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    borderStartColor: '#323547',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '50%',
    backgroundColor: '#323547'
  },
  dateText: {
    fontSize: 20,
    justifyContent: 'center',
    color: '#F1FAEE',
   fontFamily: 'Nunito'
  },
  sun: {
    height: 35,
    width: '20%',
    justifyContent: 'center'
 
  },
  week: {
    width: '33.33%',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center'
 
  },
  temp: {
    fontSize: 40,
    width:'33%',
    alignItems: 'center'
  },
 
  weekText: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    color: '#F1FAEE',
    fontSize: 20,
    fontFamily: 'Nunito'
  },
 

  sideline: {
    marginTop: 10,
    height: 1,
    width: '70%',
    backgroundColor: '#F1FAEE',
    justifyContent: 'center',
    alignSelf: 'center'
  },
 
  fact: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
  },
 
  factText: {
    fontSize: 20,
    justifyContent: 'center',
    color: '#F1FAEE',
    fontFamily: 'Nunito'
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
 
  minMaxInner: {
    width: '50%',
    height: '100%',
    marginLeft:5    
  },
 
  atmosphericInner: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  atmospheric: {
    color: '#F1FAEE',
    fontSize: 20,
    fontFamily: 'Nunito'
  },
 
  atmosphericNumber:{
    color: '#F1FAEE',
    fontSize: 30,
  },
  button: {
    overflow: 'hidden',
    color: 'white',
    //backgroundColor: '#080B1F',
    padding: width*.01,
    //borderColor: '#080B1F',
    borderRadius: 10,
    //borderWidth: 2,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});