import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
export default class Content extends React.Component {
  render() {
    return (
      <View style={CSS.view1}>
        <View style={CSS.container}>
          <View style={CSS.container}>
            <Text style={CSS.test1}>
              HÔM NAY: Thứ sáu ngày 13/12/2019 (Dương lịch) | 18/11/2019 (Âm
              lịch)
            </Text>
          </View>
          <View style={CSS.container}>
            <Text style={CSS.test2}>
              Sắp đến TẾT NGUYÊN ĐÁNG 2020 rồi! Chỉ còn...
            </Text>
          </View>
        </View>

        <View style={CSS.container}>
          <View style={CSS.container}>
            <Text style={CSS.test3}>42</Text>
          </View>
          <View style={CSS.container}>
            <Text style={CSS.test4}>NGÀY</Text>
          </View>
        </View>
        <View style={CSS.container1}>
          <View style={CSS.container}>
            <Text style={CSS.test2}>09</Text>
            <Text style={CSS.test2}>Giờ</Text>
          </View>
          <View style={CSS.container}>
            <Text style={CSS.test2}>09</Text>
            <Text style={CSS.test2}>Phút</Text>
          </View>
          <View style={CSS.container}>
            <Text style={CSS.test2}>09</Text>
            <Text style={CSS.test2}>Giây</Text>
          </View>
        </View>
      </View>
    );
  }
}
var CSS = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    top: 10,
  },
  view: {
    backgroundColor: 'red',
    height: height / 5,
  },
  view2: {
    backgroundColor: 'red',
    height: height / 10,
    bottom: 0,
  },
  view1: {
    backgroundColor: '#00008b',
    width: width - 20,
    height: height / 3.5,
    borderRadius: 10,
    position: 'absolute',
    top: 35,
    left: 10,
    shadowColor: '#000', // IOS
    shadowOffset: {height: 0, width: 1}, // IOS
    shadowOpacity: 0.18, // IOS
    shadowRadius: 1.0, //IOS
    elevation: 1,
  },
  test1: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  test2: {
    top: 10,
    fontSize: 15,
    color: 'yellow',
    textAlign: 'center',
  },
  test3: {
    top: 5,
    fontSize: 28,
    color: 'yellow',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  test4: {
    top: 10,
    fontSize: 28,
    color: 'yellow',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
