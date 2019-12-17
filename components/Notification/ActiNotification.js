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
const {width} = Dimensions.get('window');
export default class AcNotificaton extends React.Component {
  render() {
    return (
      <CardView style={CSS.cardView1}>
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
              <Text style={CSS.textnetword13}>10 quyển sách chỉ 500k</Text>
              <Text style={CSS.textnetword12}>16/02/2019</Text>
              <Text style={CSS.titlehuyen1}>
                10 quyển sách chỉ 500k - Nhập mã gì đó vào đi hạn{' '}
              </Text>
            </View>
            {/* <View style={{flex:1, position:'absolute', top:80}}>
              <Text style={CSS.titlehuyen1}>Giảm ngay 300k khi mua ĐH trên 1,500 triệu. Số lượng cực kỳ có hạn </Text>
            </View> */}
          </View>
        </View>
      </CardView>
    );
  }
}
var CSS = StyleSheet.create({
  cardView1: {
    // width: width - 30,
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
    height: 30,
    width: 30,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 30,
  },
  chiaflexlay2phan: {
    width: 400,
    height: 200,
    flex: 10,
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
    top: 30,
    right: 25,
    color: '#696969',
    fontWeight: 'bold',
  },
});
