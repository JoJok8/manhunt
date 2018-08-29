import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import autoBind from 'react-autobind';

import { createStackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper'

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
const TabBarIcon = createIconSetFromIcoMoon(icoMoonConfig);

import DebugActions from './Content/Pages/DebugActions.js';
import Dashboard from './Content/Pages/Dashboard.js';
import Feed from './Content/Pages/Feed.js';
import CameraPage from './Content/Pages/Camera.js';

class MainSwiper extends React.Component {

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

  render() {
    return (
      <Swiper ref={component => this.swiper = component} index={this.state.SwiperIndex} onIndexChange={(idx) => this.setState({SwiperIndex: idx})} loop={false} showsButtons={this.state.SwiperShowsButtons} prevButton={this.state.SwiperPrevButton} nextButton={this.state.SwiperNextButton} showsPagination={false}>
        <Feed parent={this}/>
        <CameraPage parent={this}/>
        <Dashboard parent={this}/>
      </Swiper>
    )
  }
}

const App = createStackNavigator({
    MainSwiper: {
      screen: MainSwiper
    },
    Account: {
      screen: DebugActions
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default App
