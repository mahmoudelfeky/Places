import React from "react";
import { TextInput,StyleSheet } from "react-native";

const DefaultInput = (props)=>{
    return <TextInput
     underlineColorAndroid = "transparent" 
     {...props}
     style = {[styles.input,props.style]}/>
}

const styles = StyleSheet.create({
      input:{
        width:"100%",
        borderWidth:1,
        borderColor:"#eee",
        padding:5,
        marginBottom:8,
        marginTop:8,
        borderRadius:10,
        color:"white"
    }
})
export default DefaultInput;