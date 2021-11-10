/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 *
 */
 
 import  React from 'react';
 import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';

 
export default function HomeScreen({navigation}){
 
  const weatherHandler = () => {
    navigation.navigate('weatherScreen');
  }

  const newsHandler = () => {
    navigation.navigate('news')
  }

  const photoHandler = () => {
    navigation.navigate('photos')
  }
  

   return (
    <ImageBackground
    style = {style.background}
    source = {require('C:/Users/12148/Mars-Life/assets/HomeBack.png')}>
       <View style = {style.body}>
        <View style = {style.header}>
          <Text style = {style.headerText}> Mars Life </Text>
        </View>
 
         <Image
          style = {style.mars}
          source = {require('./assets/Mars.png')}></Image>


          <View style = {style.container}>


           <View style = {style.select}>
             <View style = {style.selectInner}>
              <TouchableOpacity onPress={weatherHandler}>
                <View style = {style.selectHeader}>
                  <Text style = {style.selectText}>Weather</Text>
                </View>
                <Image
                style = {style.selectIcon}
                source = {require('./assets/Weather.png')}></Image>
              </TouchableOpacity>             
            </View>
           </View>    
 
          
            <View style = {style.select}>
              <View style = {style.selectInner}>
              <TouchableOpacity onPress = {photoHandler}>
                <View style = {style.selectHeader}>
                  <Text style = {style.selectText}>Photos</Text>
                </View>
                <Image
                style = {style.selectIcon}
                source = {require('./assets/Rover.png')}></Image>
               </TouchableOpacity>              
              </View>
            </View>  
 
            <View style = {style.select}>
              <View style = {style.selectInner}>
              <TouchableOpacity onPress = {newsHandler}>
                <View style = {style.selectHeader}>
                  <Text style = {style.selectText}>News</Text>
                </View>
                <Image
                style = {style.selectIcon}
                source = {require('./assets/News.png')}
                ></Image>
               </TouchableOpacity>
              </View>
            </View>
 
            <View style = {style.select}>
              <View style = {style.selectInner}>
              <TouchableOpacity>
                {/* <View style = {style.selectHeader}> */}
                  {/* <Text style = {style.selectText}>Map</Text> */}
                {/* </View> */}
                <Image
                style = {style.selectIcon}
                source = {require('./assets/Map.png')}
                ></Image>
                </TouchableOpacity>
              </View>
            </View>


         </View>
 
      </View>
    </ImageBackground>
   );
  }
 
 

 
const style = StyleSheet.create({
 
  body: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    height: '15%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  headerText: {
    fontSize: 50,
    color: '#F1FAEE',
  },
  mars:{
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    // height: '45%',
    // width: '65%'
    },
  container:{
    width: '100%',
    height: '21.5%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
 
  },

  container2:{
    width: '100%',
    height: '21.5%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  select:{
    width: '47%',
    height: '48%',
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    borderStartColor: '#323547',
    margin: 5,
  },
  selectInner:{
    flex: 1,
    backgroundColor: '#323547',
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectHeader:{
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectText: {
    fontSize: 30,
    color: '#F1FAEE',
    fontWeight: '800'
  },
  selectIcon:{
    marginTop: 5,
    height: '75%',
    resizeMode: 'contain'
  },
  background:{
    flex: 1,
    resizeMode: 'stretch'
  },
});
 