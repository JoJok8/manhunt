import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import FetchLocation from '../../Maps/FetchLocation.js';

type Props = {};

export default class MapTest extends Component<Props> {
  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition( function(position) {
      console.log(position);
    }, err => console.log(error))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to MANHUNT!</Text>
        <FetchLocation onGetLocation = {this.getUserLocationHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FF0000',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title: {

  }
});
