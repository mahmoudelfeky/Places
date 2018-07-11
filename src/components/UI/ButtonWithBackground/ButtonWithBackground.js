import React from "react";
import { TouchableOpacity,View , Text,StyleSheet } from "react-native";

const ButtonWithBackground = props=>{
return <TouchableOpacity onPress = {props.onPress}>
  <View 
  {...props}
  style = {[styles.button,{backgroundColor:props.color}]}>
      <Text>{props.children}</Text>
  </View>
</TouchableOpacity>
}

const styles = StyleSheet.create({
    button:{
        padding:10,
        margin:5,
        borderRadius:5,
        borderWidth:1,
        borderColor:"black"
    }
})
export default ButtonWithBackground;