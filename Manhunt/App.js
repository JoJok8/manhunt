import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

// import Ionicon from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import DebugActions from './Content/Pages/DebugActions.js';
import MapTest from './Content/Pages/MapTest.js';
import IT_Feed from './Content/Pages/IT_Feed.js';

const MiscPages = createStackNavigator({
  IT_Feed : {
    screen: IT_Feed
  },
  MapTest: {
    screen: MapTest
  },
  DebugActions: {
    screen: DebugActions
  }
});

const TabTintColor = "#03F"

const IT_Tabs = createBottomTabNavigator(
  {
    Feed: IT_Feed,
    Catch: MapTest,
    Me: DebugActions
  },
  {
    navigationOptions: ({ navigation }) => ({
      // tabBarIcon: ({ focused, tintColor }) => {
      //   const { routeName } = navigation.state;
      //   if (routeName === 'Feed') {
      //     return <Ionicon name="ios-today" size={30} color={tintColor}/>
      //   }
      //   else if (routeName === 'Catch') {
      //     return <FontAwesome name="camera" size={40} color={tintColor}/>
      //   }
      //   else if (routeName === 'Me') {
      //     return <MaterialIcon name="account-circle" size={30} color={tintColor}/>
      //   }
      //   else {
      //     return <View></View>
      //   }
      // },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'black',
      showLabel: false
    },
  }
);

export default IT_Tabs
