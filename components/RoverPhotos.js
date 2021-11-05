import React from 'react';
import {SafeAreaView, ScrollView, RefreshControl, View, StyleSheet, Dimensions, Text, Image, TouchableOpacity, Button} from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
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

 // TODO: Fully implement refresh

  return (
    //<View>        //this view is not causing the error
      <SafeAreaView style={styles.body}>
        <ScrollView contentContainerStyle={styles.scrollView} // Think this is what is causing viewing issues
          refreshControl = {
            <RefreshControl
            refreshing={Refreshing}
            onRefresh={onRefresh}
            colors={["#FFA500"]}
            tintColor={'#FFA500'}
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
          dotsLength={carouselLength}            //changed to datalist
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
      
      <Button                         //ss way to refresh. Not needed anymore
        onPress={() => setStart(start + carouselLength)}
        title="Refresh"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />

        </ScrollView>
      </SafeAreaView>
    //</View>

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
  }
})