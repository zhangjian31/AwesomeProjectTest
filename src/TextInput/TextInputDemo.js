import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';

class TextInputCom extends Component {
 
    constructor(props) {
        super(props);
        this.state = { inputText: "constructor" };
        // this.getContent = this.getContent.bind(this);
        this.clickBtn=this.clickBtn.bind(this);
    }  
    // componentDidMount(){
    //     this.setState({
    //         inputText:"componentDidMount"
    //     })
    // }
    // getContent(text){
    //     this.setState(() => {
    //         return {
    //             inputText: text
    //         };
    //     });
    // };

    getContent(text){
            this.setState((state)=>{
                return {inputText:text}
            }
        );
    }
    // getContent(text){
    //     this.setState({
    //         inputText:text
    //     });
    // }
    clickBtn(){
        alert(this.state.inputText);
    }


    render(){
        return (
            <View style={styles.container}>
                <View style={styles.flex}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="请输入内容..." 
                        returnKeyType="search" 
                        // onChangeText={this.getContent}
                        onChangeText={((text)=>this.getContent(text))}
                        >
                    </TextInput>
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

export default TextInputCom;