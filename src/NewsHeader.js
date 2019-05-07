import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
class Header extends Component {
    render(){
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>
                    <Text style={styles.font_1}>网易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度</Text>
                </Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    flex:{
        marginTop:25,
        height:40,
        borderBottomWidth:1,
        borderBottomColor:"#FF0000",
        alignItems:"center",//交叉轴
    },
    font:{
        fontSize:25,
        fontWeight:"bold",
        textAlign:"center",
    },
    font_1:{
        color:"#CD1D1C",
    },
    font_2:{
        color:"#FFFFFF",
        backgroundColor:"yellow"
    },
})

// 都可以
// module.exports=Header;
export default Header;