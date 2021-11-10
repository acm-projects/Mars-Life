import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Boxes extends React.Component{

    render() {
        return (
            <View style = {styles.container}>
                <View style= {styles.box}>
                    <View style = {styles.inner}>
                     <Text>Box1</Text>
                    </View>
                </View>
            
            </View>
        );

    }

}


const styles = StyleSheet({
    container: {
        width: '100%',
        height: '100%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box: {
        width: '50%',
        height: '50%',
        padding: 5,
    },
    inner: {
        flex: 1,
        backgroundColor: '#323547',
        alighItems: 'center',
    }
});