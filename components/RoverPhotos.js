import React from 'react';
import {SafeAreaView, ScrollView, RefreshControl, View, StyleSheet, Dimensions, Text, Image, TouchableOpacity, Button} from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {LinearGradient} from 'expo-linear-gradient';
import CarouselViewAnim, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselViewAnim.js';
//import RoverPhotosData from './RoverPhotosData';
import Mars_Image from '../server/Models/Mars_Image.js';
import { dataList } from '../server/Models/Mars_Image';
import Constants from 'expo-constants';

const RoverPhotos = () => {
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

  return (
      <SafeAreaView style={styles.body}>
        <LinearGradient 
          colors={['#D0764E', '#080B1F']} 
          >
          <ScrollView contentContainerStyle={styles.scrollView}
            refreshControl = {
              <RefreshControl
              refreshing={Refreshing}
              onRefresh={onRefresh}
              //colors={["#FFA500"]}              //refresh color from orange to blue
              colors={["#080B1F"]}
              //tintColor={'#FFA500'}
              tintColor={'#080B1F'}
              />
            }>
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
              backgroundColor: '#fff'
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
          />

          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
  )
}

export default RoverPhotos

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
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
    //backgroundColor: '#fff'
  },
  loadText: {
    color: "#FFFFFF"
  }
})