import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { getNews } from './server/getNews';
import NewsTile from './newsTile'

const {width, height} = Dimensions.get('window');

export default function ExpandedNews() {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.top}>
                    <Icons name={'arrow-back'} size={30} color='#000' style={styles.button}/>
                    <Text style={styles.headerText}>News</Text>
                    <Icons name={'menu'} size={30} color='#fff' style={styles.button}/>
                </View>
            </View>
            
            <NewsTile />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080B1F',
        flexDirection: 'column',
        alignContent: 'flex-start',
    },

    loadText: {
        color: "#FFFFFF"
    },

    top: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        margin: width*.05,
    },

    button: {
        overflow: 'hidden',
        color: 'white',
        backgroundColor: '#FD773B',
        padding: width*.01,
        borderColor: '#B35335',
        borderRadius: 10,
        borderWidth: 2,
    },

    headerText: {
        color: 'white',
        fontSize: width*.1,
        marginHorizontal: width*.15,
        textAlign: 'center',
    },
});

