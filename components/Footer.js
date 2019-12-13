import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
export default class Footer extends React.Component {
  render() {
    return <View style={CSS.Footer} />;
  }
}
var CSS = StyleSheet.create({
  Footer: {
    backgroundColor: 'red',
    width: width,
    height: height / 12,
  },
});