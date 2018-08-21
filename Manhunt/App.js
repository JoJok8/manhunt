import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import DebugActions from './Content/Pages/DebugActions.js';

import FetchLocation from './Maps/FetchLocation.js';

type Props = {};
export default class App extends Component<Props> {
  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position = () => {
      console.log(position);
    }, err => console.log(error);)
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

export default createStackNavigator({
  DebugActions: {
    screen: DebugActions
  },
});

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

  };
});
