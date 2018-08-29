import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';

import FeedPost from '../Components/FeedPost.js'

export default class Feed extends Component {
  render() {
    return (
      <View style={FeedStyles.container}>
        <View style={FeedStyles.StatusBarBackground}/>
        <ScrollView style={FeedStyles.ScrollBox}>
          <View style={FeedStyles.HeaderContainer}>
            <Text style={FeedStyles.HeaderText}>The Latest:</Text>
          </View>
          <FeedPost/>
          <FeedPost/>
        </ScrollView>
      </View>
    );
  }
}

const FeedStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  StatusBarBackground: {
    backgroundColor: 'rgba(255,255,255,0.0)',
    width: '100%',
    height: 20,
    zIndex: 100
  },
  ScrollBox: {
    height: '100%',
    width: '100%',
    top: -20
  },
  HeaderContainer: {
    backgroundColor: 'white',
    width: '100%',
    paddingTop: 30
  },
  HeaderText: {
    fontFamily: 'System',
    fontWeight: '800',
    fontSize: 36,
    textAlign: 'left',
    margin: 15,
  },
  PostList: {
  },
  Post: {
    backgroundColor: 'white',
    width: '100%',
    minHeight: 300,
    borderRadius: 25
  }
});
