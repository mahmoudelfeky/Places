import React, {Component  } from "react";
import {View , Image , Button,StyleSheet} from "react-native";
import ImagePicker from "react-native-image-picker";

class PickImage extends Component{
    state = {
        pickedImage:null
    }

    pickedImageHandler = ()=>{
        ImagePicker.showImagePicker({title:"Pick an Image"},res=>{
            if(!(res.didCancel||res.error)){
                this.setState({
                    pickedImage:{
                        uri:res.uri
                    }
                })
                this.props.onImagePicked({uri:res.uri,base64:res.data});
            }
            else{
                alert(res.error)
            }
        })
        
    }

    render()
    {
        return (
            <View style = {styles.container}>
            <View style={styles.placeholder}>
            <Image  source = {this.state.pickedImage} style = {styles.previewImage}/></View>
            <View style ={styles.buttons} >
                <Button title="Pick Image" onPress = {this.pickedImageHandler} />
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        alignItems:"center"
     },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 300

    },
    buttons:{
        margin:8
    },
    previewImage:{
        width:"100%",
        height:"100%"
    }
})

export default PickImage;