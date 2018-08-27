import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import autoBind from 'react-autobind';

import Swiper from 'react-native-swiper'

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
const TabBarIcon = createIconSetFromIcoMoon(icoMoonConfig);

import DebugActions from './Content/Pages/DebugActions.js';
// import MapTest from './Content/Pages/MapTest.js';
import IT_Feed from './Content/Pages/IT_Feed.js';
import CameraPage from './Content/Pages/Camera.js';

class App extends React.Component {

  constructor(props){
    super(props)
    autoBind(this)
  }

  state = {
    SwiperIndex: 0,
    SwiperShowsButtons: false,
    SwiperPrevButton: <View></View>,
    SwiperNextButton: <View></View>
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
