/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 *
 */
 
 import  React, { useState } from 'react';
 import { StyleSheet, Text, View, Image, ImageBackground, ScrollView} from 'react-native';

export default class weather extends React.Component{
 


  render(){
   return (
    <ImageBackground
      style = {style.background}
      source = {require('./assets/HomeBack.png')}>
      <ScrollView>
      <View style = {style.body}>
        <View style = {style.header}>
          <Text style = {style.headerText}> Weather</Text>
        </View>

          <Image
            style = {style.mars}
            source = {require('./assets/Mars.png')}></Image>
            
            <View style = {style.sol}>
              <Text style = {style.solText}> Sol XXXX  </Text>
            </View>
            
            <View style = {style.date}>
              <Text style = {style.dateText}> 21 October 2021 </Text>
            </View>
            
            <View style = {style.sideline}></View>
            <View style = {style.container}>
              <View style = {style.week}>
                <Text style = {style.weekText}> Sol XXXX-1</Text>
              </View>
              <Image style = {style.sun} source = {require('./assets/sun.png')}></Image>
              <View style = {style.upline}></View>
              <View style = {style.temp}>
                <Text style = {style.tempText}></Text>
              </View>
            </View>

            <View style = {style.sideline}></View>
            <View style = {style.container}>
              <View style = {style.week}>
                <Text style = {style.weekText}> Sol XXXX-2</Text>
              </View>
              <Image style = {style.sun} source = {require('./assets/sun.png')}></Image>
              <View style = {style.upline}></View>
              <View style = {style.temp}>
                <Text style = {style.tempText}></Text>
              </View>
            </View>

            <View style = {style.sideline}></View>
            <View style = {style.container}>
              <View style = {style.week}>
                <Text style = {style.weekText}> Sol XXXX-3</Text>
              </View>
              <Image style = {style.sun} source = {require('./assets/sun.png')}></Image>
              <View style = {style.upline}></View>
              <View style = {style.temp}>
                <Text style = {style.tempText}></Text>
              </View>
            </View>

            <View style = {style.sideline}></View>
            <View style = {style.container}>
              <View style = {style.week}>
                <Text style = {style.weekText}> Sol XXXX-4</Text>
              </View>
              <Image style = {style.sun} source = {require('./assets/sun.png')}></Image>
              <View style = {style.upline}></View>
              <View style = {style.temp}>
                <Text style = {style.tempText}></Text>
              </View>
            </View>

            <View style = {style.sideline}></View>
            <View style = {style.container}>
              <View style = {style.week}>
                <Text style = {style.weekText}> Sol XXXX-5</Text>
              </View>
              <Image style = {style.sun} source = {require('./assets/sun.png')}></Image>
              <View style = {style.upline}></View>
              <View style = {style.temp}>
                <Text style = {style.tempText}></Text>
              </View>
            </View>

            <View style = {style.sideline}></View>
            <View style = {style.container}>
              <View style = {style.week}>
                <Text style = {style.weekText}> Sol XXXX-6</Text>
              </View>
              <Image style = {style.sun} source = {require('./assets/sun.png')}></Image>
              <View style = {style.upline}></View>
              <View style = {style.temp}>
                <Text style = {style.tempText}></Text>
              </View>
            </View>

            <View style = {style.sideline}></View>
            <View style = {style.container}>
              <View style = {style.week}>
                <Text style = {style.weekText}> Sol XXXX-7</Text>
              </View>
              <Image style = {style.sun} source = {require('./assets/sun.png')}></Image>
              <View style = {style.upline}></View>
              <View style = {style.temp}>
                <Text style = {style.tempText}></Text>
              </View>
            </View>
            <View style = {style.sideline}></View>

            <View style = {style.fact}>
              <Text style = {style.factText}> Fun fact, it's almost always sunny on Mars.</Text>
            </View>
            <View style = {style.sideline}></View>
            <View style = {style.solData}>
              <View style = {style.sunRise}>

              </View>
            </View>





          </View>
      </ScrollView>
    </ImageBackground>

   );
  }
}
const style = StyleSheet.create({
    background:{
    flex: 1,
    resizeMode: 'stretch'
  },
  body: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    height: '10%',
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
    height : '20%',
    width: '20%'
    
  },
  sol: {
    marginTop: '14',
    width: '40%',
    height: '8%',
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    borderStartColor: '#323547',
    justifyContent: 'center',
    alignItems:'center',
    alignSelf: 'center',
    backgroundColor:'#323547',
  },
  solText: {
    fontSize: 30,
    color: '#F1FAEE',
    fontWeight: '800'
  },


  container: {
    marginTop: '14',
    width:'90%',
    height:'60%',
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    borderStartColor: '#323547',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#323547',
    flexDirection: 'row',
  },
  solHeader: {
    height: '20%',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  solText:{
    fontSize: 30,
    justifyContent: 'center',
    color: '#F1FAEE',
  },
  line: {
    width: '90%',
    height: '1%',
    backgroundColor: '#F1FAEE',

  },
  containerInner: {
    margin:1,
    width: '90%',
    height: '13%',
  },
  innerText: {
    fontSize: 10,
    justifyContent: 'center',
    color: '#F1FAEE',

  },
  date: {
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    borderStartColor: '#323547',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height:'15%',
    width: '70%'
  },
  dateText: {
    fontSize: 20,
    justifyContent: 'center',
    color: '#F1FAEE',
  },
  solData: {

  },
  sunRise: {}

});
