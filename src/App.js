import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    // let pic={//js 变量或表达式
    //   uri: 'http://pic40.nipic.com/20140413/12524762_163417225134_2.jpg'
    // };
    return (
      // <Image source={pic} style={{width=200,height=100}}/>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Hello, world!</Text>
        </View>
    );
  }
}

