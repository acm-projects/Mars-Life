import React from "react";
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';
import { getNews } from './server/getNews';

const {width, height} = Dimensions.get('window');

const NEWS_API = "https://api.spaceflightnewsapi.net/v3/articles/11331";

export default class NewsTile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount(){
        return fetch(NEWS_API)
        .then(res => res.json())
        .then(data => {
            data = {
                id: data.id,
                title: data.title,
                summary: data.summary,
                date: data.publishedAt,
                url: data.url,
                img_url: data.imageUrl,
            }    
            this.setState({
                isLoading: false,
                dataSource: data,
            })
        })
    }

    render() {
        let {dataSource, isLoading} = this.state;
        if (isLoading) {
            return (
                <Text style={styles.headerText}>loading</Text>
            );
        }
        else{
            return (
                <View style={styles.body}>
                    <Image source={{uri: dataSource.img_url}} style={{width: 100, height: 100}} />
                    <Text style={styles.articleTitle}>{dataSource.title}</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080B1F',
    },

    loadText: {
        color: "#FFFFFF"
    },

    top: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        margin: width*.1,
    },

    body: {
        flex: 0.2,
    },

    button: {
        overflow: 'hidden',
        color: 'white',
        backgroundColor: 'orange',
        padding: width*.01,
        borderColor: 'orange',
        borderRadius: 10,
        borderWidth: 2,
    },

    headerText: {
        color: 'white',
        fontSize: width*.1,
        marginHorizontal: width*.15,
        textAlign: 'center',
        justifyContent: 'center',
    },

    articleTitle: {
        flex: 1,
        flexWrap: 'wrap',
        color: 'white',
        fontSize: width*.05,
        textAlign: 'center',
    }
});