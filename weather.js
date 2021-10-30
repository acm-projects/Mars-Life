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

 
export default class weather extends React.Component{
 
  render(){
   return (

   );
  }
}
const style = StyleSheet.create({
  body: {
    flex: 1,
  },
  header: {
    marginTop: 10,
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'nunito',
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
