import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Button} from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselViewAnim, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselViewAnim.js';
//import RoverPhotosData from './RoverPhotosData';
import Mars_Image from '../server/Models/Mars_Image.js';
import { dataList } from '../server/Models/Mars_Image';

const RoverPhotos = () => {
  const clength = 10;
  const [index, setIndex] = React.useState(0)
  const [start, setStart] = React.useState(0)
  const isCarousel = React.useRef(null)
 
 // TODO: Fully implement refresh

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={dataList.slice(start, start+clength)}                         //changed to datalist
        renderItem={CarouselViewAnim}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={clength}            //changed to datalist
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
     
     <Button
      onPress={() => setStart(start + clength)}
      title="Refresh"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      />

    </View>

  )
}

export default RoverPhotos

