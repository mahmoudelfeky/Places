import React from "react";
import { View,Text,StyleSheet,TouchableOpacity,Image } from "react-native";

const ListItem = (props)=>
{
    return(
        <TouchableOpacity onPress = {props.onItemPressed}>
        <View style = {styles.ListItem}>
        <Image style = {styles.placeImage} 
        source = {props.placeImage}/>
            <Text>{props.placeName}</Text>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    ListItem:{
        width:"100%",
        padding:10,
        marginBottom:5,
        backgroundColor:"#eee",
        flexDirection:"row",
        alignItems:"center"
    },
    placeImage:{
        marginRight:8,
        width:30,
        height:30
    }
})

export default ListItem;