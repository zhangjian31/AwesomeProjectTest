
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    RefreshControl,
} from 'react-native';

class ScrollViewDemo1 extends Component {
    _onScrollBeginDrag(){
        console.log("开始拖拽");
    }
    _onScrollEndDrag(){
        console.log("结束拖拽");
    }
    _onMomentumScrollBegin(){
        console.log("滑动开始----");
    }
    _onMomentumScrollEnd(){
        console.log("滑动结束----");
    }
    _onRefresh(){
        console.log("刷新");
    }
    render(){
        return (
            <View style={styles.container}>
                <ScrollView 
                    style={styles.scrollview}
                    showsVerticalScrollIndicator={false}
                    onScrollBeginDrag={this._onScrollBeginDrag}
                    onScrollEndDrag={this._onScrollEndDrag}
                    onMomentumScrollBegin={this._onMomentumScrollBegin}
                    onMomentumScrollEnd={this._onMomentumScrollEnd}
                    refreshControl={
                        <RefreshControl
                            refreshing={false}
                            tintColor="red"
                            title="正在刷新..."
                            onRefresh={this._onRefresh}
                        />
                    }
                    >
                    <View style={styles.view_1}></View>
                    <View style={styles.view_2}></View>
                    <View style={styles.view_3}></View>
                </ScrollView>
            </View>
        );
    };
}

const styles = StyleSheet.create({
  
    container:{
        flex:1,
        backgroundColor:"cyan",
    },
    scrollview:{
        marginTop:25,
        backgroundColor:"#cccccc"
    },
    view_1:{
        margin:15,
        flex:1,
        height:300,
        backgroundColor:"green"
    },
    view_2:{
        margin:15,
        flex:1,
        height:300,
        backgroundColor:"blue"
    },
    view_3:{
        margin:15,
        flex:1,
        height:300,
        backgroundColor:"yellow"
    }
})

export default ScrollViewDemo1;