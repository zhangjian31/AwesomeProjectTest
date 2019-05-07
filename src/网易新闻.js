import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Header from './NewsHeader';
import Body from './NewsBody';

export default class 网易新闻 extends Component {
    render(){
        var news = [
            "1、测试",
            "2、语文",
            "3、英语"
        ];
        return (
            <View >
                <Header></Header>
                <Body news={news}></Body>
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