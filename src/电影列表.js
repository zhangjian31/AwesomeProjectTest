import React,{Component} from "react";
import {Image,Text,View,FlatList,StyleSheet} from "react-native";

var MOCKED_MOVIES_DATA = [
    {
        title:"标题",
        year:"2019",
        posters:{thumbnail:"http://pic30.nipic.com/20130622/11921802_224554002000_2.jpg"}
    }
];

var REQUEST_URL ="https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class HelloWorldApp extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            loaded:false,
        };
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData(){
        fetch(REQUEST_URL)
        .then((response)=>response.json())
        .then((responseData)=>{
                this.setState(
                    {
                        data:this.state.data.concat(responseData.movies),
                        loaded:true,
                    }
                )
            }
        );
    }
    render() {
        // var movie = MOCKED_MOVIES_DATA[0];
        // return (
        //     <View style={styles.container}>
        //         <Image style={styles.thumbnail} source={{uri:movie.poster.thumbnail}}/>
        //         <View style={styles.rightContainer}>
        //           <Text style={styles.title}>{movie.title}</Text>
        //           <Text style={styles.year}>{movie.year}</Text>
        //         </View>
        //     </View>
        // );
        if(!this.state.loaded){
            return this.renderLoadingView();
        }
        // var movie = this.state.movies[3];
        // return this.renderMovie(movie);
        return <FlatList
            data={this.state.data}
            renderItem={this.renderMovie}
            style={styles.list}
            keyExtractor={item=>item.id}
        />;
    }
    renderLoadingView(){
        return (
            <View>
                <Text>
                    正在加载电影数据...
                </Text>
            </View>
        );
    }
    renderMovie({item}){
        return (
            <View style={styles.container}>
                <Image source={{uri:item.posters.thumbnail}} style={styles.thumbnail} />
                <View style={styles.rightContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.year}>{item.year}</Text>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create(
    {
        container:{
            flex:1,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#F5FCFF"
        },
        rightContainer:{
            flex:1,
            backgroundColor:"#123456",
        },
        title:{
            fontSize:20,
            marginBottom:8,
            textAlign:"center",
            color:"#ff0000"
        },
        year:{
            color:"#00ff00",
            textAlign:'center'
        },
        thumbnail:{
            width:100,
            height:60
        },
        list: {
            paddingTop: 20,
            backgroundColor: '#F5FCFF',
        },
    }
);