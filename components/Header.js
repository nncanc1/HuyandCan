import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
export default class Header extends React.Component {
  render() {
    return (
      <View style={CSS.Header}>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: 'white',
              top: 50,
              left: 10,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Thông báo
          </Text>
        </View>

        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <TouchableOpacity style={{width: 50, height: 50, top: 50}}>
            <Image
              style={CSS.Icon}
              source={require('../src/Image/iconimage3.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
var CSS = StyleSheet.create({
  Header: {
    backgroundColor: '#00bfff',
    height: height / 8,
    flexDirection: 'row',
  },
  container: {
    // flexDirection: 'row',
    flex: 1,
  },
  textNotication: {
    color: 'white',
    fontSize: 15,
    top: 50,
    left: 10,
    right: 10,
  },
  Icon: {
    width: 30,
    height: 30,
  },
  custom: {
    left: 0,
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
});
