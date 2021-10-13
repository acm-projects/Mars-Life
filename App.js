/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * 
 */

 import  React from 'react';
 import { StyleSheet, Text, View } from 'react-native';
 
 import header from './Shared/header';
 import boxes from './Shared/boxes'
 
 
export default class App extends React.Component{

  render(){
   return (
      <View style= {style.container}>
        <header />
        <boxes />
      </View>

   );
  }
} 
 const style = StyleSheet.create({
   container: {
     flex: 1
   }
   
  });

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   main:{
//      backgroundColor: '#171A2C',
//      flex: 1,
//    },

//    header:{
//     flex: 1,
//     marginTop:10,
//     color: '#F1FAEE',
//     fontFamily: 'nunito',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     fontSize: 60
//   },

//   textWrapper: {
//     marginTop: 350,
//     marginBottom: 20,
//     marginLeft: 10,
//     marginRight: 10,
//     flex:1,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     flexDirection:'row'
//   },

//    selections:
//    {
//     backgroundColor: '#323547', 
//     fontSize: 20,
//     margin: 2,
//     flex: 1,
//    },
//    selectionsText:{
//     fontFamily: 'nunito',
//     color: '#F1FAEE',
//    },
  








//  body:{
//   fontFamily: 'nunito-bold',
//    backgroundColor: '#171A2C',
//    flex :1
//  },
//  headerText:{
//    marginTop: 10,
//    color: '#F1FAEE',
//    fontSize: 60,
//    justifyContent: 'center',

//    alignSelf: 'center'
//  },

//  newsText:{
//    flex:1,
//    margin:2,
//    color: '#F1FAEE',
//    fontSize: 20
//  },
//  photosText:{
//    backgroundColor: '#323547',
//    flex:1,
//    margin:2,
//    color: '#F1FAEE',
//    fontSize: 20
//  },
//  weatherText:{
//    backgroundColor: '#323547',
//    flex: 1,
//    margin:2,
//    color: '#F1FAEE',
//    fontSize: 20
//  },
//  mapText:{
//    backgroundColor: '#323547',
//    flex: 1,
//    margin: 2,
//    color: '#F1FAEE',
//    fontSize: 20
//  },
 
 
 
//  export default App;
