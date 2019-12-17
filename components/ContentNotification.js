import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import HomeNotification from './Notification/HomeNotification.js';
import ActiNotification from './Notification/ActiNotification.js';
// import {createBottomTabNavigator} from'react-navigation;
const {width, heigh} = Dimensions.get('window');
export default class ContentNotification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
  }
  btnClick = () => {
    this.setState({status: !this.state.status});
  };
  render() {
    return (
      <View style={CSS.Container}>
        <View style={{ backgroundColor: '#dcdcdc'}}>
          <TouchableOpacity
            onPress={this.btnClick}
            style={{
              // width: width/7,
              // height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={CSS.Icon}
              source={require('../src/Image/iconimage4.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.btnClick}
            style={{
              top: 1,
              // width: 50,
              // height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={CSS.Icon}
              source={require('../src/Image/iconimage5.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
          {this.state.status ? <HomeNotification /> : <ActiNotification />}
        </View>
      </View>
    );
  }
}


var CSS = StyleSheet.create({
  Container: {
    // position:'absolute',
    flex: 1,
    flexDirection: 'row',
  },
  Icon: {
    width: 50,
    resizeMode: 'cover',
    height: 50,
  },
});
