import React, {Component  } from "react";
import {View , Image , Button,StyleSheet,Text} from "react-native";


class PickLocation extends Component{
    render()
    {
        return (
             <View style = {styles.container}>
            <View style={styles.placeholder}><Text>Map</Text></View>
                    <View style ={styles.buttons}>
                        <Button title="Locate Me" onPress = {()=> alert("pick Location")} />
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

export default PickLocation;