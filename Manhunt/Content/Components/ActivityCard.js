import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';

import autoBind from 'react-autobind'

import ScalableImage from 'react-native-scalable-image';
import SOCButton from './SOCButton.js'
import ActivityItem from './ActivityItem.js'

export default class ActivityCard extends Component {

  constructor(props){
    super(props)
    autoBind(this)
  }

  onTargetPress(){

  }

  state = {
    Activity: [
      {
        Timestamp: Date.now(),
        Type: 1,
        Verb: 'Caught',
        OtherUser: 'cclay131',
        Delta: 1
      },
      {
        Timestamp: Date.now() + 1,
        Type: 1,
        Verb: 'Nabbed',
        OtherUser: 'jojok',
        Delta: 5
      },
      {
        Timestamp: Date.now() + 2,
        Type: 0,
        Verb: 'Got got',
        OtherUser: 'jojok',
        Delta: -5
      }
    ]
  }

  render() {
    return (
      <View style={ActivityCardStyles.Container}>
        <SOCButton onPress={this.onTargetPress}>
          <View style={ActivityCardStyles.Card} shadowColor="rgb(0,0,0)" shadowOffset={{width: 0, height: 0}} shadowOpacity={0.12} shadowRadius={10}>
            <Text style={ActivityCardStyles.CardHeader}>Activity:</Text>
            <FlatList data={this.state.Activity} renderItem={({ item }) => (<ActivityItem ItemData={item}/>)} keyExtractor={(item, index) => index.toString()}/>
          </View>
        </SOCButton>
      </View>
    );
  }
}

const ActivityCardStyles = StyleSheet.create({
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
  }
});
