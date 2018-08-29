import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';

import autoBind from 'react-autobind'

import ScalableImage from 'react-native-scalable-image';
import FastImage from 'react-native-fast-image'
import SOCButton from './SOCButton.js'

export default class TargetCard extends Component {

  constructor(props){
    super(props)
    autoBind(this)
  }

  onTargetPress(){

  }

  state = {

  }

  render() {
    return (
      <View style={TargetCardStyles.Container}>
        <SOCButton onPress={this.onTargetPress}>
          <View style={TargetCardStyles.Card} shadowColor="rgb(0,0,0)" shadowOffset={{width: 0, height: 0}} shadowOpacity={0.12} shadowRadius={10}>
            <Text style={TargetCardStyles.CardHeader}>Your target:</Text>
            <ScalableImage style={TargetCardStyles.Image} width={Dimensions.get('window').width - 60} source={require('../Assets/Images/BenPlaceholder.png')}/>
            <View style={TargetCardStyles.BottomSection}>
              <View style={TargetCardStyles.BottomSectionText}>
                <Text style={TargetCardStyles.Name}>Ben Kalina</Text>
                <View style={TargetCardStyles.Subname}>
                  <Text style={TargetCardStyles.Distance}>within 0.5 miles</Text>
                </View>
              </View>
              <TouchableOpacity style={TargetCardStyles.Arrow}>
                <Image style={TargetCardStyles.ArrowImage} source={require('../Assets/Images/GoArrow.png')}/>
              </TouchableOpacity>
            </View>
          </View>
        </SOCButton>
      </View>
    );
  }
}

const TargetCardStyles = StyleSheet.create({
  Container: {
    paddingHorizontal: 15,
    marginBottom: 15
  },
  Card: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 25,
    padding: 15,
  },
  CardHeader: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 30,
    marginHorizontal: 10,
    marginBottom: 15
  },
  Image: {
    borderRadius: 15,
    overflow: 'hidden'
  },
  BottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Name: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 36,
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom: 5
  },
  Subname: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  Distance: {
    color: '#aaaaaa',
    fontWeight: '700'
  },
  Arrow: {
    height: 60,
    alignSelf: 'center',
    marginTop: 15
  },
  ArrowImage: {
    height: '100%',
    resizeMode: 'contain'
  }
});
