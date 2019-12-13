import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
export default class Header extends React.Component {
  render() {
    return <View style={CSS.Header} />;
  }
}
var CSS = StyleSheet.create({
  Header: {
    backgroundColor: 'red',
    width: width,
    height: height / 8,
  },
});
