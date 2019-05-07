import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
class ImageCom extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.net}>
                    <Image 
                        style={styles.netImage} 
                        source={{uri:"http://pic30.nipic.com/20130622/11921802_224554002000_2.jpg"}}
                        />
                </View>
                <View style={styles.local}>
                    <Image 
                        style={styles.localImage}
                        source={require("../../img/a.jpg")}
                    /> 
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
        container:{
            flex:1,
            margin:25,
            alignItems:"center",
        },
        net:{
            marginTop:30,
            width:300,
            height:240,
             justifyContent:"center",
             alignItems:"center",
             backgroundColor:"cyan",
        },
        netImage:{
            width:280,
            height:200,
            backgroundColor:"gray",
        },
        local:{
            marginTop:30,
            width:300,
            height:200,
             justifyContent:"center",
             alignItems:"center",
             backgroundColor:"yellow",
        },
        localImage:{
            width:180,
            height:180,
            backgroundColor:"gray",
        },
})

export default ImageCom;