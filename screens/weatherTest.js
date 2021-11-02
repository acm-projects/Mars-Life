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

 
export default function weatherTest(){

  const homeHandler = () => {
    navigation.navigate('home');
  }

   return (

       <View style = {style.body}>
        <View style = {style.header}>
          <Text style = {style.headerText}> Mars Life </Text>
        </View>

          <View style = {style.container}>


           <View style = {style.select}>
             <View style = {style.selectInner}>
              <TouchableOpacity onPress={homeHandler}>
                <View style = {style.selectHeader}>
                  <Text style = {style.selectText}>Weather</Text>
                </View>
              </TouchableOpacity>             
            </View>
           </View>    
 
          
            <View style = {style.select}>
              <View style = {style.selectInner}>
              <TouchableOpacity>
                <View style = {style.selectHeader}>
                  <Text style = {style.selectText}>Photos</Text>
                </View>
               </TouchableOpacity>              
              </View>
            </View>  
 
            <View style = {style.select}>
              <View style = {style.selectInner}>
              <TouchableOpacity>
                <View style = {style.selectHeader}>
                  <Text style = {style.selectText}>News</Text>
                </View>
               </TouchableOpacity>
              </View>
            </View>
 
            <View style = {style.select}>
              <View style = {style.selectInner}>
              <TouchableOpacity>
                <View style = {style.selectHeader}>
                  <Text style = {style.selectText}>Map</Text>
                </View>
                </TouchableOpacity>
              </View>
            </View>


         </View>
 
      </View>
   );
  }
 
 

 
const style = StyleSheet.create({
 
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
    height: '45%',
    width: '65%'
    },
  container:{
    width: '100%',
    height: '43%',
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
 