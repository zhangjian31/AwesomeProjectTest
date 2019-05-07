import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Header from './NewsHeader';

export default class 网易新闻 extends Component {
    render(){
        return (
            <View >
                <Header></Header>
            </View>
        );
    };
}

const styles = StyleSheet.create(
    {
        flex:{
            flex:1
    }
})