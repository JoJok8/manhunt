import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import autoBind from 'react-autobind';

import TargetCard from '../Components/TargetCard.js'
import ActivityCard from '../Components/ActivityCard.js'

export default class Dashboard extends Component {

  constructor(props){
    super(props)
    autoBind(this)
  }

  GoToAccount(){
    this.props.parent.props.navigation.navigate('Account')
  }

  render() {
    return (
      <View style={DashboardStyles.container}>
        <View style={DashboardStyles.StatusBarBackground}/>
        <ScrollView style={DashboardStyles.ScrollBox}>
          <View style={DashboardStyles.HeaderContainer}>
            <Text style={DashboardStyles.HeaderText}>Dashboard</Text>
            <TouchableOpacity style={DashboardStyles.AccountButton} onPress={this.GoToAccount}>
              <Image style={DashboardStyles.AccountButtonImage} source={require('../Assets/Images/AccountIcon.png')}/>
            </TouchableOpacity>
          </View>
          <TargetCard/>
          <ActivityCard/>
        </ScrollView>
      </View>
    );
  }
}

const DashboardStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  StatusBarBackground: {
    backgroundColor: 'rgba(255,255,255,0)',
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
