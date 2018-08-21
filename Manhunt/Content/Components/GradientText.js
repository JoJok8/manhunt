import React from 'react';
import { StyleSheet, View} from 'react-native';

import Svg, {
 LinearGradient,
 Text,
 Defs,
 Stop,
 TSpan
} from 'react-native-svg';

export default class GradientText extends React.Component {
  render() {
    return (
        <Svg height={this.props.style.height} width={this.props.style.width}>
          <Defs>
            <LinearGradient id="rainbow" x1="0" x2="100%" y1="0" y2="0" gradientUnits="userSpaceOnUse" >
              <Stop stopColor="#FF0000" offset="0%" />
              <Stop stopColor="#0000ff" offset="50%" />
            </LinearGradient>
          </Defs>
          <Text fill="url(#rainbow)" y={this.props.style.fontSize} fontSize={this.props.style.fontSize} fontFamily={this.props.style.fontFamily} fontWeight={this.props.style.fontWeight}>snatched</Text>
        </Svg>
    );
  }
}

const styles = StyleSheet.create({});
