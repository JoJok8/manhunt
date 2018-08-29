import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';

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
      <View style={CameraStyles.Container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {CameraStyles.Preview}
            type={RNCamera.Constants.Type.back}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera'}
        />
        <SafeAreaView style={CameraStyles.SafeArea}>
          <View style={CameraStyles.Target}>
            <Text style={CameraStyles.TargetLabel}>Your target:</Text>
            <Text style={CameraStyles.TargetName}>Sam Adcock</Text>
          </View>
          <View style={CameraStyles.BottomSection}>
             {/* EACH BUTTON USED TO HAVE: shadowOffset={{width: 0, height: 0}} shadowOpacity={0.3} shadowRadius={4}*/}
            <SOCButton onPress={this.ToFeed} ShrinkCoefficient={6} style={CameraStyles.BottomSectionButtonSOC}>
              <Image style={CameraStyles.FeedIcon} source={require('../Assets/Images/CameraPageFeedIcon.png')}/>
            </SOCButton>
            <SOCButton onPress={this.TakePhoto} ShrinkCoefficient={6} style={CameraStyles.BottomSectionButtonSOC}>
              <Image style={CameraStyles.TakeIcon} source={require('../Assets/Images/Take.png')}/>
            </SOCButton>
            <SOCButton onPress={this.ToDashboard} ShrinkCoefficient={6} style={CameraStyles.BottomSectionButtonSOC}>
              <Image style={CameraStyles.DashboardIcon} source={require('../Assets/Images/CameraPageDashboardIcon.png')}/>
            </SOCButton>
          </View>

        </SafeAreaView>
      </View>
    );
  }
}

const CameraStyles = StyleSheet.create({
  Container: {
    flex: 1
  },
  SafeArea: {
    flex: 1,
  },
  Preview: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 0
  },
  Target: {
    width: '100%',
    height: 60,
    top: 0,
    margin: 15
  },
  TargetLabel: {
    fontFamily: 'System',
    color: '#3F3A3A',
    fontSize: 14,
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4
  },
  TargetName: {
    fontFamily: 'System',
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4
  },
  BottomSection: {
    width: '100%',
    height: 90,
    padding: 10,
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  BottomSectionButtonSOC: {
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
    left: 8,
    bottom: 10,
  }
});
