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
   body: {
     flex: 1,
//     backgroundColor: '#171A2C',
     alignItems: 'center',

   },
   header: {
     width: '100%',
     height: '10%',
     justifyContent: 'center',
     alignItems: 'center',

   },
   headerText: {
    color: '#F1FAEE',
    fontFamily: 'nunito',
    fontSize: 60,
   },
   mars: {
     padding: '33%'
    //  width: '62%',
    //  height: '40%'
   },
   container: {
     width: '100%',
     height: '50%',
     padding: 5,
     flexDirection: 'row',
     flexWrap: 'wrap',
     borderStyle: 'dashed',
     alignContent: 'center'

   },
   select: {
     width: '47%',
     height: '48%',
     borderWidth: 8,
     borderRadius: 10,
     borderColor: '#323547',
     borderStartColor: '#323547',
     margin: 5,


   },
   selectInner: {
     flex: 1,
     backgroundColor: '#323547',
     alignItems: 'center',
     padding: 10,

   },
   selectText: {
     fontFamily: 'nunito',
     fontSize: 30,
     color: '#F1FAEE',
     fontWeight: '600'
   },

  selectIcon: {
    marginTop: 10,
    padding: '30%',

  },
  background: {
    stretch: 'fill'
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
 

