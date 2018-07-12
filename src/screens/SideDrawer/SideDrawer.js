import React , { Component } from "react";
import { View,Text,Dimensions,StyleSheet,TouchableOpacity ,Platform} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class SiderDrawer extends Component{
    render()
    {
        return <View style = {styles.container}>
      <TouchableOpacity>
          <View style = {styles.drawerItem}>
          <Icon 
          style = {styles.drawerItemIcon}
          name={Platform.OS ==="android"?"md-log-out": "ios-log-out"}
              size={30}
              color="#aaa"></Icon>
              <Text style = {styles.drawerItemText}>Sign Out</Text>
          </View>
      </TouchableOpacity>
      
     
     
        </View>
    }
}
const styles = StyleSheet.create({
    container:{
    paddingTop:22,
    backgroundColor:"#272525",
    width:Dimensions.get("window").width*.8,
   flex:1
    },
    drawerItem: {
        flexDirection:"row",
        padding: 10,
        alignItems:"center",
        borderWidth:1,
        borderColor:"white",
        borderRadius:10,
        margin:10
    },
    drawerItemText:{
        color:"white"
    },
    drawerItemIcon:{
        marginRight:10
    }
    
})

export default SiderDrawer