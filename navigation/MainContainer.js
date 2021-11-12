import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from "../HomeScreen.js";
import News from '../screens/News';
import Weather from '../screens/weather.js'
import Photos from "../screens/photos.js";

// Screen names
const homeName = 'Home';
const newsName = 'News';
const weatherName = 'Weather';
const photosName = 'Photos';

const Tab = createBottomTabNavigator();


export default function MainContainer(){
    return(
       
       <NavigationContainer>
           <Tab.Navigator
           initialRouteName={newsName}
           screenOptions={({route}) => ({
               headerShown: false,
               tabBarIcon: ({focused, color, size}) => {
                   let iconName;
                   let rn = route.name;

                   if(rn === homeName) {
                       iconName = focused ? 'home' : 'home-outline'
                   }
                   else if ( rn === newsName) {
                       iconName = focused ? 'newspaper' : 'newspaper-outline'      
                   } else if (rn === weatherName) {
                       iconName = focused ? 'cloud' : 'cloud-outline'
                   } else if (rn === photosName) {
                       iconName = focused ? 'camera' : 'camera-outline'
                   }

                   return <Ionicons name={iconName} size={size} color={color}/>

               },

           })}

           tabBarOptions={{
               activeTintColor: 'tomato',
               inactiveTintColor: 'grey',
               labelStyle: { paddingBottom: 5, fontSize: 10 },
               style: {padding: 20, height: 70}
           }}

           > 
           
           {/* Shows the tabs of the nav bar on the bottom */}
           <Tab.Screen name={homeName} component={HomeScreen}/>
           <Tab.Screen name={newsName} component={News}/>
           <Tab.Screen name={weatherName} component={Weather}/>
           <Tab.Screen name={photosName} component={Photos}/>
           </Tab.Navigator>
        </NavigationContainer>
       
    );
}