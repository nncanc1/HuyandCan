import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
export default class Home extends React.Component {
  render() {
    return (
      <View style={CSS.container}>
        <Text style={CSS.title}>Đây là màn hình Profile</Text>
        <TouchableOpacity
          style={CSS.CustomButton}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={CSS.title}>Trở về</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
var CSS = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  CustomButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ffa500',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 7,
  },
});
