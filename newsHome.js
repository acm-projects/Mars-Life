import  React from 'react';
 import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

 export default class newsHome extends React.Component{

    render(){
        return(
            <View style = {style.body}>
                <View style = {style.header}>
                    <Text>Testing</Text>
                </View>
            </View>

        );
    }
 }

 style = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#171A2C',
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
 });