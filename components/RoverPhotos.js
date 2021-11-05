import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, RefreshControl, Dimensions, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselViewAnim, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselViewAnim.js';
import Mars_Image from '../server/Models/Mars_Image.js';
import { dataList } from '../server/Models/Mars_Image';
import Constants from 'expo-constants';

const RoverPhotos = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  const[Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    // INSERT HOW TO HANDLE REFRESH 
    setRefreshing(false);
  }
  return (
  
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
        data={dataList}                         //changed to datalist
        renderItem={CarouselViewAnim}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        
        
      />
      <Pagination
        dotsLength={dataList.length}            //changed to datalist
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
  }
})