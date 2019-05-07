import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
class TouchableOpacityCom extends Component {
    clickBtn(){
        alert("点击了搜索按钮");
    };
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.flex}>
                    <View style={styles.input}>
                    </View>
                </View>
                <TouchableOpacity style={styles.btn} onPress={this.clickBtn}>
                        <Text style={styles.search}>搜索</Text>
                </TouchableOpacity>
            
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        height:45,
        marginTop:25
    },
    flex:{
        flex:1,
    },
    input:{
        height:45,
        borderWidth:1,
        marginLeft:5,
        paddingLeft:5,
        borderColor:"#CCC",
        borderRadius:4,
    },
    btn:{
        width:45,
        marginLeft:5,
        marginRight:5,
        backgroundColor:"#23BEFF",
        height:45,
        justifyContent:"center",
        alignItems:"center",
    },
    search:{
        color:"#FFF",
        fontSize:15,
        fontWeight:"bold",
    }

})

export default TouchableOpacityCom;