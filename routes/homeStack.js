import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import weatherTest from '../screens/weatherTest.js';
import HomeScreen from "../HomeScreen.js";

const screens = {
    weatherScreen: {
        screen: weatherTest
    },
    home: {
        screen: HomeScreen
    },

}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);