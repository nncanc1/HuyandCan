import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import {getValues} from 'jest-validate/build/condition';
import {valueToNode} from '@babel/types';
import Data from '../Navigation/data.json';
import AppNavigator from '../AppNavigator';
import User from '../Navigation/User.js';
const {width, height} = Dimensions.get('window');
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isFocused: false};
    this.state = {
      inputTextValue: '',
      ErrorStatus: true,
      username: '',
      password: '',
    };
  }
  _login = async () => {
    const user = Data.find(
      item =>
        item.username === this.state.username &&
        item.password === this.state.password,
    );
    if ((this.state.username === '' && this.state.password === '') || !user) {
      this.setState({ErrorStatus: false});
    } else {
      await AsyncStorage.setItem('isLogin', '1');
      this.props.navigation.navigate('User');
    }
  };
  componentWillMount() {
    this._isLogged();
  }
  _isLogged = async () => {
    const isLoggedin = await AsyncStorage.getItem('isLogin');
    console.log(isLoggedin);
    this.props.navigate(isLoggedin !== '1' ? 'Login' : 'User');
  };
  onEnterText = inputTextValue => {
    if (inputTextValue.trim() !== 0) {
      this.setState({inputTextValue: inputTextValue, ErrorStatus: true});
    } else {
      this.setState({inputTextValue: inputTextValue, ErrorStatus: false});
    }
  };
  // buttonClickListener = () => {
  //   const user = Data.find(
  //     item =>
  //       item.username === this.state.username &&
  //       item.password === this.state.password,
  //   );
  //   if ((this.state.username === '' && this.state.password === '') || !user) {
  //     this.setState({ErrorStatus: false});
  //   } else {
  //     this.props.navigate('User', {_id: user.id});
  //     // this.props.navigate('User')
  //     // navigation('User')
  //     // this.setState({ErrorStatus: true});
  //     // alert('Ban co muon dang nhap?');
  //   }
  // };
  // onFocusChange = () => {
  //   this.setState({isFocused: true});
  // };
  render() {
    return (
      <View>
        <Image
          style={CSS.Image}
          source={{
            uri:
              'https://www.saga.vn/uploads/%E1%BA%A2nh%20Minh%20H%E1%BB%8Da/buy2get1.jpg',
          }}
        />
        <View style={CSS.view1}>
          <TextInput
            onChangeText={inputTextValue =>
              this.setState({username: inputTextValue})
            }
            value={this.state.username}
            onFocus={this.onFocusChange}
            placeholder="User name"
            // style={this.state.isFocused ? CSS.font1 : CSS.font2}
            underlineColorAndroid={this.state.ErrorStatus ? 'blue' : 'red'}
          />
          <TextInput
            onChangeText={inputTextValue =>
              this.setState({password: inputTextValue})
            }
            value={this.state.password}
            onFocus={this.onFocusChange}
            placeholder="Password"
            // style={this.state.isFocused ? CSS.font1 : CSS.font2}
            underlineColorAndroid={this.state.ErrorStatus ? 'blue' : 'red'}
          />
          <TouchableOpacity style={CSS.button} onPress={this._login}>
            <Text style={CSS.button1}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
var CSS = StyleSheet.create({
  Image: {
    height: 250,
    width: width - 20,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  TextInput: {
    left: 20,
    height: 40,
    width: width - 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ffa500',
  },
  button: {
    height: height / 15,
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
  button1: {
    fontSize: 20,
    color: '#fff',
    borderRadius: 50,
    borderColor: '#fff',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  font1: {
    fontStyle: 'normal',
    color: 'red',
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    padding: 10,
  },
  font2: {
    fontStyle: 'italic',
    color: 'white',
    padding: 10,
  },
  view1: {
    paddingHorizontal: 10,
  },
  errorMessage: {
    fontSize: 20,
    color: 'red',
    marginLeft: -80,
  },
});
