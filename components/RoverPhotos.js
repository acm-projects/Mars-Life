import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselViewAnim, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselViewAnim';
import RoverPhotosData from './RoverPhotosData';
import Header from '../Shared/header';

const RoverPhotos = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)
 

  return (
    <View>
      <CarouselCardItem
        layout="default"
        layoutCardOffset={10}
        ref={isCarousel}
        data={RoverPhotosData}
        renderItem={CarouselViewAnim}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={RoverPhotosData.length}
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
    </View>
  )
}

export default RoverPhotos

const styles = StyleSheet.create({
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
})
