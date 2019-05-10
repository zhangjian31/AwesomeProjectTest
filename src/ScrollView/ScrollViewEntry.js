import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import ScrollViewDemo1 from './ScrollViewDemo1';
import ScrollViewDemo2 from './ScrollViewDemo2';

export class ScrollViewCom1 extends Component {
    render(){
        return (
            <View style={styles.container}>
                <ScrollViewDemo1/>
            </View>
        );
    };
}

export class ScrollViewCom2 extends Component {
    render(){
        return (
            <View  style={styles.container}>
                 <ScrollViewDemo2 style={styles.container}/>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }

})

// export default ScrollViewCom1;
