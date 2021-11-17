import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Platform } from "react-native"
export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
// comment
const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
    
      <Image
        source={{uri: item.img_src}}
        style={styles.image}
      />
      <Text style={styles.header}>{item.camera_name}</Text> 
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'white',         //this is the image tile from white to blue
    backgroundColor: '#080B1F',
    borderRadius: 8,
    borderTopEndRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 30,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: Platform.OS === 'ios' ? 400 : 300,
    borderTopLeftRadius: 8, // round edges
    borderTopRightRadius: 8 // round edges

  },
  header: {
    //color: "#222",                  //text of the image tile from grey to white
    color: 'white',
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  }
})

export default CarouselCardItem