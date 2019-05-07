import React,{Component} from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
} from 'react-native';
export default class 组件 extends Component{
    render(){
        return (
            <View style={[styles.container,styles.horizontal,{backgroundColor:"red"}]}>
                <ActivityIndicator  size="large" color="#0000ff" animating={false} />
                <ActivityIndicator size="small" color="#00ff00"/>
                <ActivityIndicator size="large" color="#0000ff"/>
                <ActivityIndicator size="small" color="#00ff00"/>
            </View>
        )
    }
}

const styles =StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center'
        },
        horizontal:{
            flexDirection:'row',
            justifyContent:'space-around',
            padding:10
        }
    }

)