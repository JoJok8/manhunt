import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

export default class IT_Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.StatusBarBackground}/>
        <ScrollView style={styles.ScrollBox}>
          <View style={styles.HeaderContainer}>
            <Text style={styles.HeaderText}>The Latest:</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    paddingTop: 30
  },
  HeaderText: {
    fontFamily: 'System',
    fontWeight: '800',
    fontSize: 36,
    textAlign: 'left',
    margin: 10,
  },
});
