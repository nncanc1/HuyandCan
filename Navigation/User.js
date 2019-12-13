import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Login from '../components/Login.js';
import Data from '../Navigation/data.json';
export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  componentWillMount() {
    const {navigation} = this.props;
    const a = navigation.getParam('_id');
    const user = Data.find(item => item.id == a);
    this.setState(user);
    // console.log(user)
  }

  // componentDidMount(){
  //     console.log ("DID")

  // }
  render() {
    // console.log ("RENDER")

    const {navigate} = this.props.navigation;
    return (
      <View style={CSS.container}>
        <Text style={CSS.title}>{this.state.username}</Text>
        <Text style={CSS.title}>{this.state.password}</Text>

        <TouchableOpacity
          style={CSS.CustomButton}
          onPress={() => this.props.navigation.navigate('Login')}>
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
