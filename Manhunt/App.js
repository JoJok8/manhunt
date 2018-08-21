import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import DebugActions from './Content/Pages/DebugActions.js';
import MapTest from './Content/Pages/MapTest.js';
import IT_Feed from './Content/Pages/IT_Feed.js';

export default createStackNavigator({
  IT_Feed : {
    screen: IT_Feed
  },
  MapTest: {
    screen: MapTest
  },
  DebugActions: {
    screen: DebugActions
  }
});
