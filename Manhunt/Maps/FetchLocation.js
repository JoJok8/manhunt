//got this from a youtube tutorial
//shoutout to academind

import React from 'react';
import {Button} from 'react-native'

const fetchLocation = function(props) {
  return (
    <Button title = "Save your location" onPress={props.onGetLocation}/>
  );
};

export default fetchLocation;
