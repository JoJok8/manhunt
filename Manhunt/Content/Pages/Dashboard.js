import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';

import FastImage from 'react-native-fast-image'
import TargetCard from '../Components/TargetCard.js'

export default class Dashboard extends Component {
  render() {
    return (
      <View style={DashboardStyles.container}>
        <View style={DashboardStyles.StatusBarBackground}/>
        <ScrollView style={DashboardStyles.ScrollBox}>
          <View style={DashboardStyles.HeaderContainer}>
            <Text style={DashboardStyles.HeaderText}>Dashboard</Text>
            <TouchableOpacity style={DashboardStyles.AccountButton}>
              <FastImage style={DashboardStyles.AccountButtonImage} source={require('../Assets/Images/AccountIcon.png')}/>
            </TouchableOpacity>
          </View>
          <TargetCard/>
        </ScrollView>
      </View>
    );
  }
}

const DashboardStyles = StyleSheet.create({
  container: {
  },
  StatusBarBackground: {
    backgroundColor: 'rgba(255,255,255,0.99)',
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
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  HeaderText: {
    fontFamily: 'System',
    fontWeight: '800',
    fontSize: 36,
    textAlign: 'left',
    margin: 15,
  },
  AccountButton: {
    height: 35,
    width: 35,
    alignSelf: 'center',
    marginRight: 25,
  },
  AccountButtonImage: {
    height: '100%',
    width: '100%'
  }
});
