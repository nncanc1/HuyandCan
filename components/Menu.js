import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import CardView from 'react-native-cardview';
const {width} = Dimensions.get('window');
export default class Menu extends React.Component {
  render() {
    return (
      <View>
        <View>
          <View style={CSS.flex2}>
            <TouchableOpacity style={{justifyContent: 'flex-end'}}>
              <Image
                style={CSS.Image}
                source={{
                  uri:
                    'https://www.saga.vn/uploads/%E1%BA%A2nh%20Minh%20H%E1%BB%8Da/buy2get1.jpg',
                }}
              />
              <Image
                style={CSS.Image1}
                source={{
                  uri:
                    'https://balodaithang.com/images/product/combo-mua-2-vali-tang-1-vali-8.png',
                }}
              />
              <Text style={CSS.titlehuyen}>[2711] Huyền Merchant </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity>
          <CardView
            cardElevation={5}
            cardMaxElevation={5}
            cornerRadius={5}
            style={CSS.cardView}>
            <Text style={CSS.textnetword}>[2911] Share 2 - Netword redeem</Text>
            <Text style={CSS.textnetword1}>Share to Eam</Text>
          </CardView>
        </TouchableOpacity>
      </View>
    );
  }
}
var CSS = StyleSheet.create({
  flex2: {
    justifyContent: 'flex-end',
    flex: 5,
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
  Image1: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50,
    bottom: 20,
    left: 20,
  },
  titlehuyen: {
    position: 'absolute',
    bottom: 35,
    left: 80,
    color: 'white',
    fontWeight: 'bold',
  },
  cardView: {
    left: 10,
    width: width - 20,
    height: 70,
  },
  textnetword: {
    left: 10,
    top: 10,
  },
  textnetword1: {
    left: 10,
    top: 20,
    color: '#a9a9a9',
  },
});
