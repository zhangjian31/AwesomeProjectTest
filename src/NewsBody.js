import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
class Body extends Component {
    show(content){
        alert(content);
    };
    render(){
        var newsComponents=[];
        for(var i in this.props.news){
            var text=(
                <Text style={styles.news_item}  numberOfLines={2} key={i} onPress={this.show.bind(this,this.props.news[i])}>
                    {this.props.news[i]}
                </Text>
            );
            newsComponents.push(text);
        }
        return (
            <View style={styles.flex}>
               <Text style={styles.news_title}>今日要闻</Text>
                {newsComponents}
            </View>
        );
    };
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    news_title:{
        fontSize:20,
        fontWeight:"bold",
        color:"#CD1D1C",
        marginLeft:10,
        marginTop:15,
    },
    news_item:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        fontSize:15,
        lineHeight:30,
    }
})

export default Body;