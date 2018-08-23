import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import autoBind from 'react-autobind';

import { createStackNavigator, createBottomTabNavigator, createTabNavigator } from 'react-navigation';

import Swiper from 'react-native-swiper'

import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
const TabBarIcon = createIconSetFromIcoMoon(icoMoonConfig);

import DebugActions from './Content/Pages/DebugActions.js';
import MapTest from './Content/Pages/MapTest.js';
import IT_Feed from './Content/Pages/IT_Feed.js';

import CameraPage from './Content/Pages/Camera.js';

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

const IT_Tabs = createTabNavigator(
  {
    Feed: IT_Feed,
    Camera: CameraPage,
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
        else if (routeName === 'Camera') {
          return <TabBarIcon name={`define_location${focused ? '-dark' : ''}`} size={30} color={tintColor}/>
        }
        else if (routeName === 'Me') {
          return <TabBarIcon name={`user_male${focused ? '-dark' : ''}`} size={30} color={tintColor}/>
        }
        else {
          return <View></View>
        }
      },
      swipeEnabled: true
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'black',
      showLabel: false,
      visible: false,
      style: {
        backgroundColor: '#00000000'
      }
    },
  }
);


class App extends React.Component {

  constructor(props){
    super(props)
    autoBind(this)
  }

  state = {
    SwiperIndex: 1,
    SwiperShowsButtons: false,
    SwiperPrevButton: <View></View>,
    SwiperNextButton: <View></View>
  }
  componentDidMount(){
    // this.swiper.scrollBy(-1)
  }
  render() {
    return (
      <Swiper ref={component => this.swiper = component} index={this.state.SwiperIndex} onIndexChange={(idx) => this.setState({SwiperIndex: idx})} loop={false} showsButtons={this.state.SwiperShowsButtons} prevButton={this.state.SwiperPrevButton} nextButton={this.state.SwiperNextButton} showsPagination={false}>
        <IT_Feed parent={this}/>
        <CameraPage parent={this}/>
        <DebugActions parent={this}/>
      </Swiper>
    )
  }
}

export default App
