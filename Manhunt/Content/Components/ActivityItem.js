import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';

import autoBind from 'react-autobind'

import Delta from './Delta.js'

export default class ActivityItem extends Component {

  constructor(props){
    super(props)
    autoBind(this)
    console.log(this.props.data)
  }

  componentWillMount(){
    this.setState({ItemData: this.props.ItemData})
  }

  state = {
    ItemData: {
      Delta: 0,
      Type: null
    },
    By: [' by ', ' '],
    DeltaColor: '#FF5757'
  }

  render() {
    return (
      <View style={ActivityItemStyles.Container}>
        <Text numberOfLines={1} style={ActivityItemStyles.MainText}>{this.state.ItemData.Verb + this.state.By[this.state.ItemData.Type] + this.state.ItemData.OtherUser}</Text>
        <View style={ActivityItemStyles.Delta}>
          <Delta Value={this.state.ItemData.Delta}/>
        </View>
      </View>
    );
  }
}

const ActivityItemStyles = StyleSheet.create({
  Container: {
    marginHorizontal: 25,
    paddingVertical: 15,
    width: '90%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#EDEDED',
    paddingRight: 25,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  MainText: {
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: '500',
  },
  Delta: {
    marginLeft: 'auto'
  }
});
