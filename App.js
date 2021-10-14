/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 *
 */
 
 import  React from 'react';
 import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
 
 import header from './Shared/header';
         // <View style = {style.container}>
        //         <Text>a</Text>
        //   <Image 
        //   style = {style.mars}
        //   source = {require('./assets/Mars.png')}></Image>
        //   <Image
        //     source = {require('./assets/favicon.png')}
        //   />
        //   <Text>a</Text>
        //   <Text>ab</Text>
 
        // </View>
 
export default class App extends React.Component{
 
  render(){
   return (



<ImageBackground style = {style.background} source = {(require('./assets/HomeBack.png'))}>
    <View style = {style.body}>
       

      <View style = {style.header}>
        <Text style= {style.headerText}>Mars-Life</Text>
      </View>
      <Image 
      style = {style.mars}
      source = {require('./assets/Mars.png')} ></Image>
      <View style = {style.container}>
        <View style = {style.select}>
          <View style= {style.selectInner}>
            <Text style = {style.selectText}>Weather</Text>
            <Image 
            style = {style.selectIcon}
            source = {require('./assets/Weather.png')}></Image>
            </View></View>

        <View style = {style.select}>
          <View style= {style.selectInner}>
            <Text style = {style.selectText}>Rover Photos</Text>
            <Image 
            style = {style.selectIcon}
            source = {require('./assets/Rover.png')}></Image>
            </View></View>
     
          <View style = {style.select}>
        <View style= {style.selectInner}>
            <Text style = {style.selectText}>News</Text>
            <Image 
             style = {style.selectIcon}
            source = {require('./assets/News.png')}></Image>
            </View></View>

          <View style = {style.select}>
        <View style= {style.selectInner}>
           <Text style = {style.selectText}>Map</Text>
           <Image 
            style = {style.selectIcon}
            source = {require('./assets/Map.png')}></Image>
           </View></View>   
      </View>
    </View>
</ImageBackground>

   );
  }
}
const style = StyleSheet.create({
  body:{},
  header:{

  },
  headerText:{},
  mars:{
    width: '100%',
    height: '10%'
  },
  container:{},
  select:{},
  selectInner:{},
  selectText:{},
  selectIcon:{},
  background:{
    resizeMode: 'stretch'
  },
});
//  const style = StyleSheet.create({
//    body: {
//      flex: 1,
//      alignItems: 'center',

//    },
//    header: {
//      width: '100%',
//      height: '10%',
//      justifyContent: 'center',
//      alignItems: 'center',

//    },
//    headerText: {
//     color: '#F1FAEE',
//     fontSize: 60,
//    },
//    mars: {
//      padding: '33%'

//    },
//    container: {
//      width: '100%',
//      height: '50%',
//      padding: 5,
//      flexDirection: 'row',
//      flexWrap: 'wrap',
//      borderStyle: 'dashed',
//      alignContent: 'center'

//    },
//    select: {
//      width: '47%',
//      height: '48%',
//      borderWidth: 8,
//      borderRadius: 10,
//      borderColor: '#323547',
//      borderStartColor: '#323547',
//      margin: 5,


//    },
//    selectInner: {
//      flex: 1,
//      backgroundColor: '#323547',
//      alignItems: 'center',
//      padding: 10,

//    },
//    selectText: {
//      fontSize: 30,
//      color: '#F1FAEE',
//      fontWeight: '600'
//    },

//   selectIcon: {
//     marginTop: 10,
//     padding: '30%',

//   },
//   background: {
    
//   }
   
   
//   });