import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../HomeScreen.js";
import News from '../screens/News';
import weather from '../screens/weather.js'
import Photos from "../screens/photos.js";

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
    photos : {
        screen: Photos
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: false
    }
})

export default createAppContainer(HomeStack);