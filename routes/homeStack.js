import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import App from './screens/App.js';
import weatherTest from './screens/weatherTest';

const screens = {
    homeScreen: {
        screen: App
    },
    weatherScreen: {
        screen: weatherTest
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);