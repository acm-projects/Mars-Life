
import React from "react";
import {StyleSheet, View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { withNavigation } from 'react-navigation';
import SplashLoad from "./SplashLoad";

const {width, height} = Dimensions.get('window');

const NEWS_API = "https://api.spaceflightnewsapi.net/v3/articles/";

// import { Button } from 'react-native';
// const GoToButton = (screenName) => {
//   const navigation = useNavigation();

//   return (
//     <Button
//       title={`Go to ${screenName}`}
//       onPress={() => navigation.navigate(screenName)}
//     />
//   );
// }

class NewsItem extends React.Component{

  pressHandler(article_id){
    this.props.navigation.navigate('expanded',article_id)
    // const navigation = useNavigation();
    // navigation.navigate('home')
  }

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
              <View style={styles.anime}>
                <SplashLoad/> 
              </View>
            );
        }
        else{
            return (
                <View style={styles.body}>
                    <View>
                        <TouchableOpacity onPress={()=> this.pressHandler(dataSource[0])}>
                            <View style={styles.topNews}> 
                                <Image style = {styles.topNewsImage} source={{uri: dataSource[0].img_url}}/>
                                <Text style={styles.topNewsText}>{dataSource[0].title} </Text>
                            </View> 
                        </TouchableOpacity>
                    </View>
                    <View>
                    {dataSource.map(article => (
                        <React.Fragment key={article.key}>
                            <TouchableOpacity onPress={() => this.pressHandler(article)}>
                                {article.key != dataSource[0].key? <View style={styles.item}><Image style={styles.newsImage} source={{uri: article.img_url}}/><Text style={styles.newsText}>{article.title} </Text></View>: <View></View>}
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
  anime: {
      flex : 1,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'stretch',
      backgroundColor: '#080B1F',
      width: width,
      height: height,
  },  
  
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
      marginRight: 40,
      marginLeft: 15,
      padding: 80,
      borderRadius: 10,
      height: 100,
      width: 100
    },
    topNewsText: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 20,
      marginRight: 30,
      marginBottom: 10,
      fontWeight: "bold",
      fontSize: 20,
      
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
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 10,
      marginLeft: 35,
      marginRight: 10,
      fontSize: 15
    },
  });

export default withNavigation(NewsItem);