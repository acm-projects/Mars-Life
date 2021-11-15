import React from 'react';
import {SafeAreaView, ScrollView, RefreshControl, View, StyleSheet, Dimensions, Text, Image, TouchableOpacity, Button, Platform} from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {LinearGradient} from 'expo-linear-gradient';
import CarouselViewAnim, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselViewAnim.js';
import WeatherTile from '../components/weatherTile';
import ModalTile from '../components/modalTile'; 
import {dataList} from '../server/Models/Mars_Image.js';
import Constants from 'expo-constants';
import Icons from 'react-native-vector-icons/MaterialIcons';


const {width, height} = Dimensions.get('window') // define width and height
export default function RoverPhotos({navigation}) {

  const carouselLength = 10;
  const [index, setIndex] = React.useState(0)
  const [start, setStart] = React.useState(0)
  const isCarousel = React.useRef(null)
 
  const[Refreshing, setRefreshing] = React.useState(false);         //for refreshing
  const onRefresh = () => {
    setRefreshing(true);
    // INSERT HOW TO HANDLE REFRESH 
    setStart(start + carouselLength)    //handles the refresh now. Done. Need anything more??
    setRefreshing(false);
  }
  const homeHandler = () => {
    navigation.navigate('home');
  }

  const newsHandler = () => {
    navigation.navigate('news')
  }

  const photoHandler = () => {
    navigation.navigate('photos')
  }

  const weatherHandler = () => {
    navigation.navigate('weatherScreen')
  }
  
  return (
   
      <SafeAreaView style={styles.body}>
        <LinearGradient
          colors={['#D0764E', '#080B1F']} 
          >
          
          <ScrollView contentContainerStyle={styles.scrollView}
            refreshControl = {
              <RefreshControl
              refreshing={Refreshing}
              onRefresh={onRefresh}         //refresh color from orange to blue
              colors={["#080B1F"]}
              tintColor={'#080B1F'}
              />
            }>

            <View style={styles.header}> 
            <Text style={styles.headerText}>Rover Photos</Text>
            </View>
          <Carousel
            layout="default"
            layoutCardOffset={9}
            ref={isCarousel}
            data={dataList.slice(start, start+carouselLength)}                         //changed to datalist
            renderItem={CarouselViewAnim}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={(index) => setIndex(index)}
            useScrollView={true}
          />
          <Pagination
            dotsLength={carouselLength}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              marginBottom: 50,
              backgroundColor: '#fff'
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
            
          />

          </ScrollView>


          <View style = {styles.bottomBar}>
            <View style = {styles.bottomInner}>
            <Icons name={'home'} size={width*0.075, height*0.075} color='#000' style={styles.button}  onPress={homeHandler}/>
              {/* <Text style = {style.bottomText}>adsfasdfasdf</Text> */}
            </View>
            <View style = {styles.bottomInner}>
            <Icons name={'camera-alt'} size={width*0.075, height*0.075} color='#000' style={styles.button} onPress={photoHandler}/>
              {/* <Text style = {style.bottomText}>adsfasdfasdf</Text> */}
            </View>
           
            <View style = {styles.bottomInner}>
              <Icons name={'cloud'} size={width*0.075, height*0.075} color='#000' style={styles.button} onPress = {weatherHandler}/>
              {/* <Text style = {style.bottomText}>adsfasdfasdf</Text> */}
            </View>
            
            <View style = {styles.bottomInner}>
              <Icons name={'menu-book'} size={width*0.075, height*0.075} color='#000' style={styles.button} onPress = {newsHandler}/>
              {/* <Text style = {style.bottomText}>adsfasdfasdf</Text> */}
            </View>
          </View>
        </LinearGradient>
      </SafeAreaView>
      
  )
}


const styles = StyleSheet.create({

  background: {
    flex: 1,
    resizeMode: 'stretch',
    height: '100%',
    width: '100%'
  },

  bottomBar:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? 30 : (height * 0.055)

    
  },
  bottomInner:{
    width: '20%',
    marginHorizontal: '2%'

  },

  body: {
    flex: 1,
    backgroundColor: '#D0764E',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'stretch',
    overflow: 'hidden',
  
 },

  button: {
    overflow: 'hidden',
    color: 'white',
    backgroundColor: '#e36b35',
    padding: width*0.01,
    borderColor: '#B35335',
    borderRadius: 10,
    borderWidth: 2,
    alignSelf: 'center',
    justifyContent: 'center'
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
    justifyContent: 'center',
    alignContent: 'center',
    
   
  //  fontFamily: 'Nunito'
  },

  scroll: {
    marginBottom: (height * 0.055),
  },

  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  container: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#080B1F'
  },

  photocontainer: {                        //how do I remove the that blue bar from top???
    //backgroundColor: "#fff",             //background photo of the image carousel
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    //backgroundColor: '#080B1F'
  },
  loadText: {
    color: "#FFFFFF"
  },
  button: {
    overflow: 'hidden',
    color: 'white',
    backgroundColor: '#e36b35',
    padding: width*.01,
    borderColor: '#B35335',
    borderRadius: 10,
    borderWidth: 2,
    alignSelf: 'center',
    justifyContent: 'center'
  },
})