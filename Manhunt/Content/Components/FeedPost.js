import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import autoBind from 'react-autobind'

import Image from 'react-native-scalable-image';
import SOCButton from './SOCButton.js'
// import { LinearTextGradient } from 'react-native-text-gradient';

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
            <Image style={FeedPostStyles.Image} width={Dimensions.get('window').width - 60} source={require('../Assets/Images/ColePlaceholder.png')}/>
            <Text style={FeedPostStyles.MainText}>Cole got snatched by Jack</Text>
          </View>
        </SOCButton>
      </View>
    );
  }
}

const FeedPostStyles = StyleSheet.create({
  Container: {
    paddingHorizontal: 15
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
    fontSize: 36,
    marginTop: 20
  },
  Verb: {
  }
});
