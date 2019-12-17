import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import CardView from 'react-native-cardview';
import {ScrollView} from 'react-native-gesture-handler';
import Menu from '../components/Menu.js';
import ListMenu from '../components/ListMenu.js';
import Login from '../components/Login.js';
import CountTetday from '../components/CountTetday.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ContentNotification from '../components/ContentNotification.js';

import Content from '../components/Content.js';

const {width, height} = Dimensions.get('window');
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
  }
  onClick = () => {
    this.setState({status: !this.state.status});
  };
  // focusedInput = () => {
  //   this.textInput.setNativeProps({
  //     style: { backgroundColor: 'green' }
  //   })
  // }

  // blurredInput = () => {
  //   this.textInput.setNativeProps({
  //     style: { backgroundColor: 'yellow' }
  //   })
  // }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={CSS.container}>
        {/* <ScrollView> */}
        {/* <View style={CSS.flex}>
            <View style={CSS.flex1}>
              <View style={CSS.flex11}>
                <Text style={CSS.title}>Ưu đãi mới</Text>
              </View>
              <View style={CSS.flex11}>
                <TouchableOpacity onPress={this.onClick}>
                  <Image
                    style={CSS.Icon}
                    source={
                      this.state.status
                        ? require('../src/Image/iconimage1.png')
                        : require('../src/Image/iconimage2.png')
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
            {this.state.status ? <Menu /> : <ListMenu />}
          </View> */}
        {/* <Login navigate={navigate} /> */}
        {/* <CountTetday/> */}
        {/* </ScrollView> */}
        <View style={{justifyContent: 'flex-start'}}>
          <Header />
        </View>
        {/* <View style={{top:20, flex: 1, position: 'absolute'}}>
          <Content />
        </View> */}
        <View style={{flex: 1}}>
          <ContentNotification />
        </View>
        <View style={{justifyContent: 'flex-end'}}>
          <Footer />
        </View>
      </View>
    );
  }
}
var CSS = StyleSheet.create({
  container: {
    flex: 1,
    // position: 'relative',
  },
});
