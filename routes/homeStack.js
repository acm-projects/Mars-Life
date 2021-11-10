import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import weatherTest from '../screens/weatherTest.js';
import HomeScreen from "../HomeScreen.js";
import News from '../News';
import weather from '../screens/weather.js'
import RoverPhotos from "../components/RoverPhotos.js";

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
        screen: RoverPhotos
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: false
    }
})

export default createAppContainer(HomeStack);