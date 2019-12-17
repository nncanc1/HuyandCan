import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {},
      // now: new Date().toDateString(),
      day: new Date().toDateString(),
      coutdown: new Date('Jan 25, 2020 15:37:25').toDateString(),
    };
    this.timer = 0;
  }
  secondsToTime(secs) {
    // let now = this.state.now;
    let days = Math.floor(secs / (60 * 60 * 24));
    let divisor_for_hours = secs % (60 * 60 * 24);
    let hours = Math.floor(divisor_for_hours / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      // n: now,
      d: (days < 10 ? '0' : '') + days,
      h: (hours < 10 ? '0' : '') + hours,
      m: (minutes < 10 ? '0' : '') + minutes,
      s: (seconds < 10 ? '0' : '') + seconds,
    };
    return obj;
  }
  componentDidMount() {
    // let now = this.secondsToTime(this.state.now);
    this.clockCall = setInterval(() => {
      this.countDown();
      //   this.decrementClock();
    }, 1000);
  }
  countDown = () => {
    // Remove one second, set state so a re-render happens.
    // if (this.state.timer === 0) clearInterval(this.clockCall);
    // this.timer = setInterval(this.countDown, 1000);
    let now = new Date().getTime();
    let time = new Date('Jan 25, 2020 15:37:25').getTime();

    let seconds = time - now;
    console.log(seconds);

    this.setState({
      time: this.secondsToTime(seconds / 1000),
      seconds: seconds,
    });
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  };
  render() {
    return (
      <View style={CSS.view1}>
        <View style={CSS.container}>
          <Text style={CSS.test1}>
            HÔM NAY: {this.state.day} (Dương lịch) | {this.state.coutdown} (Âm
            lịch)
          </Text>
          <Text style={CSS.test2}>
            Sắp đến TẾT NGUYÊN ĐÁNG 2020 rồi! Chỉ còn...
          </Text>
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

  view1: {
    backgroundColor: '#00008b',
    borderRadius: 10,
    // position: 'absolute',
    width: width,
    height: height / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  test1: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test2: {
    top: 5,
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
