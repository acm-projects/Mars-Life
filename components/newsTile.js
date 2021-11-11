import React from "react";
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';

const {width, height} = Dimensions.get('window');

const NEWS_API = "https://api.spaceflightnewsapi.net/v3/articles/11333";

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