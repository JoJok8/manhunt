import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';

import autoBind from 'react-autobind'

export default class Delta extends Component {

  constructor(props){
    super(props)
    autoBind(this)
    console.log(this.props.data)
  }

  componentWillMount(){
    this.setState({Value: this.props.Value})
    if(this.props.Value > 0){
      this.setState({Color: '#70FF57', Plus: '+'})
    }
  }

  state = {
    Color: '#FF5757',
    Plus: ''
  }

  render() {
    return (
      <View style={[DeltaStyles.Container, {backgroundColor: this.state.Color}]}>
        <Text style={DeltaStyles.Text}>{this.state.Plus + this.state.Value}</Text>
      </View>
    );
  }
}

const DeltaStyles = StyleSheet.create({
  Container: {
    // padding: 10,
    borderRadius: 4
  },
  Text: {
    marginHorizontal: 5,
    marginVertical: 3,
    fontFamily: 'Courier',
    color: 'white',
    fontWeight: '900',
    fontSize: 14
  }
});
