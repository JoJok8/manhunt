import React from 'react';
import { Animated, Easing, StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

export default class SOCButton extends React.Component {
  componentWillMount(){
    this.animatedValue = new Animated.Value(1);
  }
  depressed(){
    // console.log('depressed');
    if(this.props.ShrinkCoefficient){
      var ShrinkDelta = 0.02 * this.props.ShrinkCoefficient;
      var toValue = 1 - ShrinkDelta;
    }
    else {
      var toValue = 0.98;
    }

    Animated.timing(this.animatedValue, {
      toValue:toValue,
      duration:100
    }).start();
  }
  unpressed(){
    // console.log('unpressed');
    Animated.timing(this.animatedValue, {
      toValue:1,
      duration:100
    }).start();
    this.props.onPress();
  }
  render() {
    let pressedStyle = {transform: [{scale:this.animatedValue}]};
    return (
        <TouchableWithoutFeedback onPressIn={this.depressed.bind(this)} onPressOut={this.unpressed.bind(this)} style={this.props.theStyle}>
          <Animated.View style={[pressedStyle, SOCStyles.ContentContainer]}>
            {this.props.children}
          </Animated.View>
        </TouchableWithoutFeedback>
    );
  }
}

const SOCStyles = StyleSheet.create({
  ContentContainer: {
    overflow: 'visible'
  }
});
