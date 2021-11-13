import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../HomeScreen.js";
import News from '../screens/News.js';
import weather from '../screens/weather.js'
import Photos from "../screens/photos.js";
import ExpandedNews from "../screens/expanded_news.js";
import NewsItem from "../components/newsItem.js";

const screens = {

    home: {
        screen: HomeScreen
    },
    weatherScreen: {
        screen: weather
    },
    news: {
        screen: News
    },
    photos: {
        screen: Photos
    },
    expanded: {
        screen: ExpandedNews
    },
    newsItem:{
        screen: NewsItem
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: false
    }
})

export default createAppContainer(HomeStack);