
import React from "react";
import {StyleSheet, View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';

const {width, height} = Dimensions.get('window');

const NEWS_API = "https://api.spaceflightnewsapi.net/v3/articles/";

const pressHandler = (key) => {            //print the key when an item is pressed
    console.log(key)
  }

export default class NewsItem extends React.Component{

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
            let dataList=[];
            for(var i=0; i < data.length; i++){
                const article = {
                    key: data[i].id,
                    title: data[i].title,
                    summary: data[i].summary,
                    date: data[i].publishedAt,
                    url: data[i].url,
                    img_url: data[i].imageUrl,
                }
                dataList.push(article);
            }   
            this.setState({
                isLoading: false,
                dataSource: dataList,
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
                        <TouchableOpacity onPress={() => pressHandler(dataSource[0].key)}>
                            <View style={styles.topNews}> 
                                <Image style = {styles.topNewsImage} source={{uri: dataSource[0].img_url}}/>
                                <Text style={styles.topNewsText}>{dataSource[0].title} </Text>
                            </View> 
                        </TouchableOpacity>
                    </View>
                    <View>
                    {dataSource.map(article => (
                        <React.Fragment key={article.key}>
                            <TouchableOpacity onPress={() => pressHandler(article.key)}>
                                {article.key != dataSource[0].key? <View style={styles.item}><Image style={styles.newsImage} source={{uri: article.img_url}}/><Text style={styles.newsText}> {article.title} </Text></View>: <View></View>}
                                {/* <View style={styles.item}><Image style={styles.newsImage} source={{uri: article.img_url}}/><Text style={styles.newsText}> {article.title} </Text></View> */}
                            </TouchableOpacity>
                        </React.Fragment>
                    ))}
                    </View>
                </View>

            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D0764E',
      // paddingTop: 40,
      // paddingHorizontal: 20,
      // alignItems: 'center',
      // justifyContent: 'center',
      flex: 1,
      resizeMode: 'stretch',
      overflow: 'hidden',
    },
    item: {
      flexDirection: 'row',
      overflow: 'hidden',
      marginTop: 24,
      marginHorizontal: 20,
      backgroundColor: '#E14616',
      fontSize: 20,
      borderColor: '#E14616',
      borderWidth: 1,
      borderRadius: 10,
    },
    topNews: {
      flexDirection: 'row',
      alignContent: 'flex-start',
      justifyContent: 'space-evenly',
      overflow: 'hidden',
      marginTop: 50,
      backgroundColor: '#E14616',
      marginHorizontal: 20,
      fontSize: 20,
      borderColor: '#E14616',
      borderWidth: 1,
      borderRadius: 10,
    },
    topNewsImage: {
      marginTop: 20,
      marginBottom: 20,
      marginRight: 50,
      padding: 80,
      borderRadius: 10,
      height: 100,
      width: 100
    },
    topNewsText: {
      marginTop: 40,
      marginRight: 30
    },
    backButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      margin: width*.05,
    },
    arrowButton: {
      overflow: 'hidden',
      color: 'white',
      backgroundColor: '#FD773B',
      padding: width*.01,
      borderColor: '#B35335',
      borderRadius: 10,
      borderWidth: 2,
    }, 
    newsImage: {
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 9,
      padding: 10,
      borderRadius: 10,
      height: 65,
      width: 65
    },
    newsText: {
      marginTop: 10,
      marginLeft: 80,
    },
  });