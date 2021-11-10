import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import weatherTest from '../screens/weatherTest.js';
import HomeScreen from "../HomeScreen.js";
import News from '../News';

const screens = {

    home: {
        screen: HomeScreen
    },
    weatherScreen: {
        screen: weatherTest
    },
    news: {
        screen: News
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: false
    }
})

export default createAppContainer(HomeStack);