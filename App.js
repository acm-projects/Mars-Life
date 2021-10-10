/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import  React from 'react';
 import Realm from 'realm';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   useColorScheme,
   View,
   Image,
 } from 'react-native';
 
 
 
 function App() {
 
 
 
 
   return (
     <PaperProvider>
       <View style={style.body}>
        <Text style= {style.headerText}>HOME</Text>
        <View style ={style.textWrapper}>
         <Text style={style.newsText }>News</Text>
           <Text style={style.photosText }>Photos</Text>
           <Text style={style.weatherText }>Weather</Text>
          <Text style={style.mapText }>Map</Text>
        </View>
       </View>
     </PaperProvider>
   );
 };
 
 const style = StyleSheet.create({
 body:{
   backgroundColor: '#171A2C',
   flex :1
 },
 headerText:{
   marginTop: 10,
   color: '#F1FAEE',
   fontSize: 60,
 
   alignSelf: 'center'
 },
 textWrapper: {
   marginTop: 350,
   marginBottom: 20,
   marginLeft: 10,
   marginRight: 10,
   flex:1,
   justifyContent: 'center',
   flexDirection:'row'
 
 },
 newsText:{
   flex:1,
   backgroundColor: '#323547',
 
   margin:2,
   color: '#F1FAEE',
   fontSize: 20
 },
 photosText:{
   backgroundColor: '#323547',
   flex:1,
   margin:2,
   color: '#F1FAEE',
   fontSize: 20
 },
 weatherText:{
   backgroundColor: '#323547',
   flex: 1,
   margin:2,
   color: '#F1FAEE',
   fontSize: 20
 },
 mapText:{
   backgroundColor: '#323547',
   flex: 1,
   margin: 2,
   color: '#F1FAEE',
   fontSize: 20
 },
 
 
 });
 
 export default App;
 
 