import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
const TabBarIcon = createIconSetFromIcoMoon(icoMoonConfig);

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
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Feed') {
          if(focused){
            var name = 'today_apps-dark'
          }
          return <TabBarIcon name={`today_apps${focused ? '-dark' : ''}`} size={30} color={tintColor}/>
        }
        else if (routeName === 'Catch') {
          return <TabBarIcon name={`define_location${focused ? '-dark' : ''}`} size={30} color={tintColor}/>
        }
        else if (routeName === 'Me') {
          return <TabBarIcon name={`user_male${focused ? '-dark' : ''}`} size={30} color={tintColor}/>
        }
        else {
          return <View></View>
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'black',
      showLabel: false,
      style: {
        backgroundColor: '#00000000'
      }
    },
  }
);

export default IT_Tabs
