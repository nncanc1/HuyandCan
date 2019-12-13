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
import Content from '../components/Content.js';

const {width} = Dimensions.get('window');
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
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          <Header />
        </View>
        
        <Content />

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Footer />
        </View>
      </View>
    );
  }
}
var CSS = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  chiaflexlay2phan: {
    width: 400,
    height: 200,
    flex: 3,
  },
  chiaflex1: {
    flex: 1,
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
    flexDirection: 'row',
  },
  flex11: {
    flex: 1,
    borderColor: 'white',
    borderLeftWidth: 1,
  },
  flex2: {
    justifyContent: 'flex-end',
    flex: 5,
  },
  title: {
    fontSize: 20,
    top: 20,
    left: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleuudai: {
    color: 'white',
    marginTop: 10,
    fontSize: 15,
    marginLeft: 10,
  },
  Image: {
    height: 250,
    width: width - 20,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  Imagetest: {
    height: 95,
    width: 95,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  Image12: {
    height: 250,
    width: width - 20,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  Image1: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50,
    bottom: 20,
    left: 20,
  },
  Image111: {
    position: 'relative',
    width: 30,
    height: 30,
    borderRadius: 50,
    bottom: 30,
    left: 20,
  },
  titlehuyen: {
    position: 'absolute',
    bottom: 35,
    left: 80,
    color: 'white',
    fontWeight: 'bold',
  },
  titlehuyen1: {
    position: 'relative',
    bottom: 55,
    left: 60,
    color: '#696969',
    fontWeight: 'bold',
  },
  cardView: {
    left: 10,
    width: width - 20,
    height: 70,
  },
  cardView1: {
    margin: 10,
    width: width - 20,
    height: 110,
  },
  textnetword: {
    left: 10,
    top: 10,
  },
  textnetword13: {
    left: 20,
    top: 10,
  },
  textnetword1: {
    left: 10,
    top: 20,
    color: '#a9a9a9',
  },
  textnetword12: {
    top: 20,
    left: 20,
    color: '#a9a9a9',
  },
  Icon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    right: 10,
    left: 150,
    top: 15,
  },
});
