/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 *
 */
 
 import  React, { useState } from 'react';
 import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

export default class weather extends React.Component{
 


  render(){
   return (
     <View style = {style.body}>
      <View style = {style.header}> 
        <Text style = {style.headerText}>Weather</Text>
      </View>
      <Image 
        style = {style.mars}
        source = {require('./assets/Mars.png')}>
      </Image>

      <View style = {style.container}>
        <View>

        </View> 
      </View>



      <View>
      

      </View>

     </View>

   );
  }
}
const style = StyleSheet.create({
  
});


const [sol, setSol] = useState([
  { solNum: '-1', key: '1' },
  { solNum: '-2', key: '2' },
  { solNum: '-3', key: '3' },
  { solNum: '-4', key: '4' },
  { solNum: '-5', key: '5' },
  { solNum: '-6', key: '6' },
  { solNum: '-7', key: '7' },
]);