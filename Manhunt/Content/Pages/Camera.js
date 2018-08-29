import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import SOCButton from '../Components/SOCButton.js';

import autoBind from 'react-autobind';

import { RNCamera, FaceDetector } from 'react-native-camera';

export default class Camera extends Component {
  constructor(props){
    super(props)
    autoBind(this)
  }

  ToFeed(){
    this.props.parent.swiper.scrollBy(-1)
  }

  ToDashboard(){
    this.props.parent.swiper.scrollBy(1)
  }

  TakePhoto(){

  }

  OnFacesDetected(e){
    console.log(e.faces)
  }

  captureFace = async (faceArray) => {
    console.log(faceArray)
  };

  render() {
    return (
      <View>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {CameraStyles.Preview}
            type={RNCamera.Constants.Type.back}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera'}
        />
      <View style={CameraStyles.BottomSection}>
        <SOCButton onPress={this.ToFeed} ShrinkCoefficient={6}>
          <Image style={CameraStyles.FeedIcon} source={require('../Assets/Images/CameraPageFeedIcon.png')} shadowColor="rgb(0,0,0)" shadowOffset={{width: 0, height: 0}} shadowOpacity={0.3} shadowRadius={4}/>
        </SOCButton>
        <SOCButton onPress={this.TakePhoto} ShrinkCoefficient={6}>
          <Image style={CameraStyles.TakeIcon} source={require('../Assets/Images/Take.png')} shadowColor="rgb(0,0,0)" shadowOffset={{width: 0, height: 0}} shadowOpacity={0.3} shadowRadius={4}/>
        </SOCButton>
        <SOCButton onPress={this.ToDashboard} ShrinkCoefficient={6}>
          <Image style={CameraStyles.DashboardIcon} source={require('../Assets/Images/CameraPageDashboardIcon.png')} shadowColor="rgb(0,0,0)" shadowOffset={{width: 0, height: 0}} shadowOpacity={0.3} shadowRadius={4}/>
        </SOCButton>
      </View>
      </View>
    );
  }
}

const CameraStyles = StyleSheet.create({
  Preview: {
    height: '100%',
    width: '100%'
  },
  BottomSection: {
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  DashboardIcon: {
    resizeMode: 'contain',
    height: 35,
  },
  FeedIcon: {
    resizeMode: 'contain',
    height: 35,
  },
  TakeIcon: {
    resizeMode: 'contain',
    height: 60,
  }
});
