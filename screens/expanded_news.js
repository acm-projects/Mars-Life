import React from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import NewsTile from '../components/newsTile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

export default function ExpandedNews({navigation}) {
    
    const backHandler = () => {
        navigation.navigate('news');
    }

    const homeHandler = () => {
        navigation.navigate('home');
    }


    return (
        <View style={styles.container}>
            <View>
                <View style={styles.top}>
                    <Ionicons name={'arrow-back'} size={width*0.070} color='#000' style={styles.button} onPress={backHandler}/>
                    <Text style={styles.headerText}>News</Text>
                    <Ionicons name={"home"} size={width*0.070} color='#fff' style={styles.button} onPress={homeHandler}></Ionicons>
                </View>
            </View>  
            <NewsTile ID={navigation.getParam('key')}/>
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
        alignSelf: 'center',
    },

    button: {
        overflow: 'hidden',
        color: 'white',
        backgroundColor: '#FD773B',
        padding: width*.01,
        borderColor: '#B35335',
        borderRadius: 10,
        borderWidth: 2,
        alignContent: 'center',
    },

    headerText: {
        color: 'white',
        fontSize: width*.1,
        marginHorizontal: width*.15,
        textAlign: 'center',
        justifyContent: 'center'
    },
});

