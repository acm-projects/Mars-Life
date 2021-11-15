import { stringify } from "querystring";
import React from "react";
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';
import SplashLoad from "./SplashLoad";

const {width, height} = Dimensions.get('window');

const NEWS_API = "https://api.spaceflightnewsapi.net/v3/articles/";

export default class NewsTile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            ID: this.props.ID,
        }
    }

    

    componentDidMount(){
        return fetch(NEWS_API+this.state.ID)
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
                <View style={styles.anime}> 
                <SplashLoad/> 
                </View>
            );
        }
        else{
            return (
                <View style={styles.body}>
                    <View>
                        <Image source={{uri: dataSource.img_url}} style={styles.image} />
                    </View>
                    <View style={styles.articleDetails}>
                        <Text style={styles.articleTitle}>{dataSource.title}</Text>
                        <Text style={styles.captionText}>{"Date: " + dataSource.date}</Text>
                        <Text style={styles.articleSummary}>{dataSource.summary}</Text>
                    </View>
                </View>

            );
        }
    }
}

const styles = StyleSheet.create({
    anime: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'stretch',
        backgroundColor: '#080B1F',
        width: width,
        height: height,
    },
    
    body: {
        flex: 1,
        flexDirection: 'column',
        margin: width*.1,
    },

    image: {
        alignSelf: 'center',
        width: width*0.80,
        height: width*0.50,
        borderRadius: 10, 
    },  

    articleTitle: {
        color: 'white',
        fontSize: width*.05,
        textAlign: 'center',
        padding: width*0.01,
    },

    articleSummary: {
        color: 'white',
        backgroundColor: '#B35335',
        paddingBottom: height*.1,
        paddingHorizontal: width*0.02,
        justifyContent: 'center',
        alignSelf:'center',
    },

    captionText: {
        color: 'white',
        fontSize: width*.025,
        textAlign: 'right',
        padding: width*0.01,
    },

    articleDetails: {
        backgroundColor: '#FD773B',
        borderRadius: 5,
        overflow: 'hidden',
        marginVertical: height*.02,
    },

});