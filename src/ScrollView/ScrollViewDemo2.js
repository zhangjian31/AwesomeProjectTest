
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';

//从文件兑取数据，执行require方法自动执行JSON.parse()方法，将json格式的字符串转换为json格式的对象。
var data = require("../../movie.json");
var movies = data.movies;

export default class ScrollViewDemo2 extends Component {

    render(){
        //创建列表组件
        var movieRows=[];
        for(var i in movies){
            var movie = movies[i];
            var row =(
                <View style={styles.row } key={i}>
                    <Image  style={styles.thumbnail } source={{uri:movie.posters.thumbnail}}/>
                    <View style={styles.rightContainer }>
                        <Text style={styles.title }>{movie.title}</Text>
                        <Text style={styles.year }>{movie.year}</Text>
                    </View>
    
                </View>
            );
            movieRows.push(row);
        }
        return (
            <View  style={styles.container } >
                <ScrollView style={styles.scrollview } >
                    {
                        movieRows
                    }
                </ScrollView>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    scrollview:{
        flex:1,
        marginTop:25,
        backgroundColor:"#cccccc"
    },
    row:{
        flexDirection:"row",
        padding:5,
        alignItems:"center",
        backgroundColor:"yellow",
    },
    thumbnail:{
        width:100,
        height:60,
        backgroundColor:"gray",
    },
    rightContainer:{
        marginLeft=10,
        flex:1,
    },
    title:{
        fontSize:18,
        marginTop:3,
        marginBottom:3,
        textAlign:"center",
    },
    year:{
        marginBottom:3,
        textAlign:"center",
    }
})