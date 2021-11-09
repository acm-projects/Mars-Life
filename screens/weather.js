/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 *
 */
 
import  React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Dimensions, Modal,} from 'react-native';
import * as Font from 'expo-font';
import WeatherTile from '../components/weatherTile'; 
import Icons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

export default function Weather() {
  const[modalOpen, setModalOpen] = useState(false);

  const [loaded] = Font.useFonts({
    Nunito: require('../assets/Nunito.ttf')
  });
 
  if(!loaded){
    return null;
  }

  return (
    <ImageBackground
      style = {style.background}
      source = {require('../assets/HomeBack.png')}>



      <Modal visible = {modalOpen}>
        <View style = {style.modal}>
          <ImageBackground style = {style.background}  source = {require('../assets/HomeBack.png')}>
          <View style = {style.body}>
          <Text> test</Text>
            <Icons name={'menu'} size={width*0.075} color='#fff' style={style.button} onPress = {() => setModalOpen(false)}/>
            <View style = {style.asdf}>
              <Text>Photos</Text>
            </View>
            <View>
              <Text>Weather</Text>
            </View>
            <View>
              <Text>News</Text>
            </View>
            <View>
              <Text>Map</Text>
            </View>
          </View>

          </ImageBackground>
        </View>
      </Modal>

      <View style = {style.body}>
 
        <View style = {style.header}>
          <TouchableOpacity>
            <Icons name={'arrow-back'} size={width*0.075} color='#000' style={style.button}/>
                      <WeatherTile />

          </TouchableOpacity>

          <Text style = {style.headerText}>Weather</Text>
          <TouchableOpacity>
            <Icons name={'menu'} size={width*0.075} color='#fff' style={style.button} onPress = {() => setModalOpen(true)}/>
          </TouchableOpacity>
        </View>
        <ScrollView>
 
          <Image
            style = {style.mars}
            source = {require('../assets/Mars.png')}>
          </Image>

          <WeatherTile />

          </ScrollView>
      </View>
    </ImageBackground>
   );
  }
const style = StyleSheet.create({
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
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 50,
    color: '#F1FAEE',
  //  fontFamily: 'Nunito'
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
    backgroundColor: '#FD773B',
    padding: width*.01,
    borderColor: '#B35335',
    borderRadius: 10,
    borderWidth: 2,
  },
  asdf:{
    backgroundColor: '#FD7773B',
    padding: 5
  }
});