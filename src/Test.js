import React from 'react';
import { Component } from 'react';
import { Text, View } from 'react-native';

//属性来定制
class Greeting extends Component {
  render() {
    return (
      //View 常用作其他组件的容器，来帮助控制布局和样式
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}
export    default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        < Greeting name='Valeera' />
      </View>
    );
  }
}
