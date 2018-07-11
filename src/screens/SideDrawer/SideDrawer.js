import React , { Component } from "react";
import { View,Text,Dimensions,StyleSheet } from "react-native";

class SiderDrawer extends Component{
    render()
    {
        console.log("side drawer");
        return <View style = {styles.container}>
            <Text>SiderDrawer Screen</Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container:{
    paddingTop:22,
    backgroundColor:"white",
    width:Dimensions.get("window").width*.8,
   flex:1
    }
    
})

export default SiderDrawer