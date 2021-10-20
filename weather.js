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

 <script>
  var a;
  

 </script>
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
      {sol.map((item) =>
        {return (
          <View></View>


        )}
      
      )}

      </View>

     </View>

   );
  }
}
const style = StyleSheet.create({
  
});


const [sol, setSol] = useState([
  { solNum: xfe, key: '-1' },
  { solNum: xfe, key: '-2' },
  { solNum: xfe, key: '-3' },
  { solNum: xfe, key: '-4' },
  { solNum: xfe, key: '-5' },
  { solNum: xfe, key: '-6' },
  { solNum: xfe, key: '-7' },
]);