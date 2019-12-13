/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default class test extends React.Component {
  render() {
    return (
      <View style={CSS.view}>
        <Text style={{color: 'white', textAlign: 'center'}}>
          {this.props.tennguoidung} - {this.props.namsinh}
        </Text>
      </View>
    );
  }
}

var CSS = StyleSheet.create({
  view: {
    width: width - 20,
    height: 20,
    backgroundColor: 'red',
  },
});
