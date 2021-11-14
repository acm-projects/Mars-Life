import React from "react";
import {StyleSheet, View, Text, Dimensions, Image, ScrollView} from 'react-native';
import getWeather from '../tools/getWeather'
import SplashLoad from './SplashLoad';
import * as Font from 'expo-font';

const {width, height} = Dimensions.get('window');

const getCurrentDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    return date + ' ' + monthNames[month] + ' ' + year;
}

export default class WeatherTile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount(){
            
        getWeather().then(data => {
            this.setState({
                isLoading: false,
                dataSource: data,
            })
        });
    }

    render() {
        let {dataSource, isLoading} = this.state;
        if (isLoading) {
            return (
              <View style={style.anime}>
                  <SplashLoad/> {/* do we need a loading screen here? -Sydney*/}
              </View>
              
            );
        }
        
            return (
              <View>
                    <View style = {style.header}>
                      <Text style = {style.headerText}>Weather</Text>
                    </View>
                    <ScrollView style = {style.scroll}>
                      <Image
                        style = {style.mars}
                        source = {require('../assets/Mars.png')}>
                      </Image>
                      <View>
                        <View style = {style.solTemp}>
                            <Text style = {style.solTempText}>{(dataSource[0].min+dataSource[0].max)/2} C</Text>
                        </View>
                        
                        <View style = {style.sol}>
                            <Text style = {style.solText}>Sol {dataSource[0].sol} </Text>
                        </View>
                        
                        <View style = {style.date}>
                            <Text style = {style.dateText}> {getCurrentDate()} </Text>
                        </View>
                        <View style = {style.sideline}></View>

                        {/*Day 2*/}
                        <View style = {style.container}>
                            <View style = {style.week}>
                                <Text style = {style.weekText}> Sol {dataSource[1].sol}</Text>
                            </View>
                            <Image style = {style.sun} source = {require('../assets/sun.png')}></Image>
                            <View style = {style.week}>
                                <Text style = {style.weekText}>{(dataSource[1].min+dataSource[1].max)/2} C</Text>
                            </View>
                        </View>

                        {/*Day 3*/}
                        <View style = {style.container}>
                            <View style = {style.week}>
                                <Text style = {style.weekText}> Sol {dataSource[2].sol}</Text>
                            </View>
                            <Image style = {style.sun} source = {require('../assets/sun.png')}></Image>
                            <View style = {style.week}>
                                <Text style = {style.weekText}>{(dataSource[2].min+dataSource[2].max)/2} C</Text>
                            </View>
                        </View>

                        {/*Day 4*/}
                        <View style = {style.container}>
                            <View style = {style.week}>
                                <Text style = {style.weekText}> Sol {dataSource[3].sol}</Text>
                            </View>
                            <Image style = {style.sun} source = {require('../assets/sun.png')}></Image>
                            <View style = {style.week}>
                                <Text style = {style.weekText}>{(dataSource[3].min+dataSource[3].max)/2} C</Text>
                            </View>
                        </View>

                        {/*Day 5*/}
                        <View style = {style.container}>
                            <View style = {style.week}>
                                <Text style = {style.weekText}> Sol {dataSource[4].sol}</Text>
                            </View>
                            <Image style = {style.sun} source = {require('../assets/sun.png')}></Image>
                            <View style = {style.week}>
                                <Text style = {style.weekText}>{(dataSource[4].min+dataSource[4].max)/2} C</Text>
                            </View>
                        </View>

                        {/*Day 6*/}
                        <View style = {style.container}>
                            <View style = {style.week}>
                                <Text style = {style.weekText}> Sol {dataSource[5].sol}</Text>
                            </View>
                            <Image style = {style.sun} source = {require('../assets/sun.png')}></Image>
                            <View style = {style.week}>
                                <Text style = {style.weekText}>{(dataSource[5].min+dataSource[5].max)/2} C</Text>
                            </View>
                        </View>

                        {/*Day 7*/}
                        <View style = {style.container}>
                            <View style = {style.week}>
                                <Text style = {style.weekText}> Sol {dataSource[6].sol}</Text>
                            </View>
                            <Image style = {style.sun} source = {require('../assets/sun.png')}></Image>
                            <View style = {style.week}>
                                <Text style = {style.weekText}>{(dataSource[6].min+dataSource[6].max)/2} C</Text>
                            </View>
                        </View>

                        <View style = {style.fact}>
                            <Text style = {style.factText}> Fun fact, it's literally always sunny on Mars.</Text>
                        </View>
                        <View style = {style.sideline}/>

                        <View style = {style.minMaxOuter}>
                            <View style = {style.minMaxInner}>
                            <Text style = {style.atmospheric}>Minimum Temp:</Text>
                            <Text style = {style.atmosphericNumber}>{dataSource[0].min} C</Text>
                            </View>
                            <View style = {style.minMaxInner}>
                            <Text style = {style.atmospheric}>Maximum Temp:</Text>
                            <Text style = {style.atmosphericNumber}>{dataSource[0].max} C</Text>
                            </View>
                        </View>
                        <View style = {style.sideline}/>

                        <View style = {style.minMaxOuter}>
                            <View style = {style.minMaxInner}>
                            <Text style = {style.atmospheric}>Ground Minimum Temp:</Text>
                            <Text style = {style.atmosphericNumber}>{dataSource[0].ground_min} C</Text>
                            </View>
                            <View style = {style.minMaxInner}>
                            <Text style = {style.atmospheric}>Ground Maximum Temp:</Text>
                            <Text style = {style.atmosphericNumber}>{dataSource[0].ground_max} C</Text>
                            </View>
                        </View>
                        <View style = {style.sideline}></View>

                        <View style = {style.minMaxOuter}>
                            <View style = {style.atmosphericInner}>
                            <Text style = {style.atmospheric}>Ultraviolet Index:</Text>
                            <Text style = {style.atmosphericNumber}>{dataSource[0].uvIndex}</Text>
                            </View>
                        </View>
                        <View style = {style.sideline}/>


                        <View style = {style.minMaxOuter}>
                            <View style = {style.minMaxInner}>
                            <Text style = {style.atmospheric}>Sunrise Time:</Text>
                            <Text style = {style.atmosphericNumber}>{dataSource[0].sunrise}</Text>
                            </View>
                            <View style = {style.minMaxInner}>
                            <Text style = {style.atmospheric}>Sunset Time:</Text>
                            <Text style = {style.atmosphericNumber}>{dataSource[0].sunset}</Text>
                            </View>
                        </View>
                        <View style = {style.sideline}/>
                      </View>
                    </ScrollView>

                  </View>
            );
        
    }
}

const style = StyleSheet.create({

  anime: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
    backgroundColor: '#080B1F'
  },
    back:{
        flex: 1,
        backgroundColor: '#323547', 
    },
    
    background: {
      flex: 1,
      resizeMode: 'stretch',
      height: '100%',
      width: '100%'
    },
    body: {
      flex: 1,
    },

    header: {
      marginTop: 20,
      paddingVertical: 15,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      fontSize: 50,
      color: '#F1FAEE',
    //  fontFamily: 'Nunito'
    },
   
    mars:{
      justifyContent: 'center',
      alignSelf: 'center',
    },
    solTemp: {
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: '#080B1F',
      borderWidth: 8,
      borderRadius: 10,
      borderColor: '#080B1F',
      width: '40%',
      marginBottom: 10
    },
    solTempText: {
      fontSize: 55,
      color: '#F1FAEE',
    //  fontFamily: 'Nunito'
    },
    sol: {
      marginTop: 1,
      width: '40%',
      borderWidth: 8,
      borderRadius: 10,
      borderColor: '#080B1F',
      justifyContent: 'center',
      alignItems:'center',
      alignSelf: 'center',
      backgroundColor:'#080B1F',
    },
   
    solText: {
      fontSize: 30,
      color: '#F1FAEE',
      fontWeight: '800',
     // fontFamily: 'Nunito',
      justifyContent: 'center'
    },
   
    loadingText: {
      justifyContent: 'center',
      color: 'white',
      alignItems: 'center',
      fontSize: 30
    },
    container: {
      marginTop: 14,
      width:'70%',
      borderWidth: 8,
      borderRadius: 10,
      borderColor: '#080B1F',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: '#080B1F',
      flexDirection: 'row',
      flex: 1
    },
   
    solText:{
      fontSize: 30,
      color: '#F1FAEE',
    //  fontFamily: 'Nunito'
    },
    
    date: {
      marginTop: 20,
      borderWidth: 8,
      borderRadius: 10,
      borderColor: '#080B1F',
      borderStartColor: '#080B1F',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      width: '50%',
      backgroundColor: '#080B1F'
    },
    dateText: {
      fontSize: 20,
      justifyContent: 'center',
      color: '#F1FAEE',
    //  fontFamily: 'Nunito'
    },
    sun: {
      height: 35,
      width: '20%',
      justifyContent: 'center'
   
    },
    week: {
      width: '33.33%',
      alignItems: 'center',
      alignContent: 'center',
      alignSelf: 'center'
   
    },
    temp: {
      fontSize: 40,
      width:'33%',
      alignItems: 'center'
    },
   
    weekText: {
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      color: '#F1FAEE',
      fontSize: 20,
    //   fontFamily: 'Nunito'
    },
   
  
    sideline: {
      marginTop: 10,
      height: 1,
      width: '70%',
      backgroundColor: '#F1FAEE',
      justifyContent: 'center',
      alignSelf: 'center'
    },
   
    fact: {
      marginTop: 10,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      width: '90%',
    },
   
    factText: {
      fontSize: 20,
      justifyContent: 'center',
      color: '#F1FAEE',
    //   fontFamily: 'Nunito'
    },
   
    minMaxOuter:{
      paddingVertical: 5,
      width: '85%',
      borderWidth: 8,
      borderRadius: 5,
      borderColor: '#080B1F',
      borderStartColor: '#080B1F',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#080B1F',
      flexDirection: 'row',
      flex: 1,
      marginTop: 15,
    },
   
    minMaxInner: {
      width: '50%',
      height: '100%',
      marginLeft:5    
    },
   
    atmosphericInner: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
   
    atmospheric: {
      color: '#F1FAEE',
      fontSize: 20,
    //   fontFamily: 'Nunito'
    },
   
    atmosphericNumber:{
      color: '#F1FAEE',
      fontSize: 30,
    }
  });