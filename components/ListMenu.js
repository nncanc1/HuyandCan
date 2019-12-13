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
const {width} = Dimensions.get('window');
export default class ListMenu extends React.Component {
  render() {
    return (
      <CardView
        cardElevation={5}
        cardMaxElevation={5}
        cornerRadius={5}
        style={CSS.cardView1}>
        <View style={CSS.chiaflex1}>
          <View style={CSS.flex}>
            <Image
              style={CSS.Imagetest}
              source={{
                uri:
                  'https://www.saga.vn/uploads/%E1%BA%A2nh%20Minh%20H%E1%BB%8Da/buy2get1.jpg',
              }}
            />
          </View>
          <View style={CSS.chiaflexlay2phan}>
            <View style={CSS.flex}>
              <Text style={CSS.textnetword13}>
                [2911] Share 2 - Netword redeem
              </Text>
              <Text style={CSS.textnetword12}>Share to Eam</Text>
            </View>
            <View style={CSS.flex}>
              <Image
                style={CSS.Image111}
                source={{
                  uri:
                    'https://balodaithang.com/images/product/combo-mua-2-vali-tang-1-vali-8.png',
                }}
              />
              <Text style={CSS.titlehuyen1}>[2711] Huyền Merchant </Text>
            </View>
          </View>
        </View>
      </CardView>
    );
  }
}
var CSS = StyleSheet.create({
  cardView1: {
    margin: 10,
    width: width - 20,
    height: 110,
  },
  chiaflex1: {
    flex: 1,
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
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
  chiaflexlay2phan: {
    width: 400,
    height: 200,
    flex: 3,
  },
  textnetword13: {
    left: 20,
    top: 10,
  },
  textnetword12: {
    top: 20,
    left: 20,
    color: '#a9a9a9',
  },
  Image111: {
    position: 'relative',
    width: 30,
    height: 30,
    borderRadius: 50,
    bottom: 30,
    left: 20,
  },
  titlehuyen1: {
    position: 'relative',
    bottom: 55,
    left: 60,
    color: '#696969',
    fontWeight: 'bold',
  },
});
