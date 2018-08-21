import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';

import autoBind from 'react-autobind'

import ScalableImage from 'react-native-scalable-image';
import SOCButton from './SOCButton.js'
import SvgUri from 'react-native-svg-uri'

export default class FeedPost extends Component {

  constructor(props){
    super(props)
    autoBind(this)
  }

  onPostPress(){

  }

  state = {

  }

  render() {
    return (
      <View style={FeedPostStyles.Container}>
        <SOCButton onPress={this.onPostPress}>
          <View style={FeedPostStyles.Post} shadowColor="rgb(0,0,0)" shadowOffset={{width: 0, height: 0}} shadowOpacity={0.12} shadowRadius={10}>
            <ScalableImage style={FeedPostStyles.Image} width={Dimensions.get('window').width - 60} source={require('../Assets/Images/ColePlaceholder.png')}/>
            <Text style={FeedPostStyles.MainText}>Cole got <Image style={FeedPostStyles.Verb} source={require('../Assets/Images/Verbs/Snatched.png')}/> by Jack</Text>
            <View style={FeedPostStyles.BottomSection}>
              <Text style={FeedPostStyles.Timestamp}>August 21st, 7:32pm</Text>
              <View style={FeedPostStyles.Delta}>
                <Text style={FeedPostStyles.DeltaText}>+5</Text>
              </View>
            </View>
          </View>
        </SOCButton>
      </View>
    );
  }
}

const FeedPostStyles = StyleSheet.create({
  Container: {
    paddingHorizontal: 15,
    marginVertical: 15
  },
  Post: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 25,
    padding: 15,
  },
  Image: {
    borderRadius: 15,
    overflow: 'hidden'
  },
  MainText: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 38,
    marginTop: 20
  },
  Verb: {
    resizeMode: 'cover',
    height: 54,
    width: 182,
    marginBottom: -12,
    // backgroundColor: 'black'
  },
  BottomSection: {
    height: 30,
    width: '100%',
    // backgroundColor: 'black',
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  Timestamp: {
    color: '#aaaaaa',
    alignSelf: 'flex-end'
  },
  Delta: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
    backgroundColor: '#70FF57',
  },
  DeltaText: {
    color: 'white',
    fontFamily: 'Courier',
    fontSize: 17,
    fontWeight: '600'
  }
});
