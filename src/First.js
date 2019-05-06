import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import {firstStyles} from '../static/first';

export default class LotsOfStyles extends Component {
    render() {
      return (
        <View>
          <Text style={firstStyles.red}>just red</Text>
          <Text style={firstStyles.bigBlue}>just bigBlue</Text>
          <Text style={[firstStyles.bigBlue, firstStyles.red]}>bigBlue, then red</Text>
          <Text style={[firstStyles.red, firstStyles.bigBlue]}>red, then bigBlue</Text>
        </View>
      );
    }
  }