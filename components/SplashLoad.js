import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { useState } from "react";

export default function SplashLoad() {

    
    return (
        <View>
        
          <LottieView
            source={require("./loader.json")}
            style={styles.animation}
            autoPlay
           > 
           
            </LottieView>

            
                 <Text style={styles.loadingText}>launching off...</Text>
            </View>

   

   

      );

      
    }
    const styles = StyleSheet.create({
      animation: {
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
      },
      loadingText: {
        color: '#FFFFFF',
        fontSize: 30,
        marginTop: 20,
        fontWeight: '200',
        alignItems: 'center'
      }
    });
    