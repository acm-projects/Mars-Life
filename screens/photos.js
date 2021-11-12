/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 *
 */

import  React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Dimensions, Modal,} from 'react-native';
import RoverPhotos from '../components/RoverPhotos';

const {width, height} = Dimensions.get('window');

export default function Photos(navigation) {
    return (
        <RoverPhotos />
    )
}