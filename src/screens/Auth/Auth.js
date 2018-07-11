import React , {Component} from "react";
import { View ,Text ,Button,TextInput , StyleSheet , ImageBackground} from "react-native";
import startMainTanbs from "../MainTabs/startMainTanbs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import bg from "../../assets/bootstrap_bg.png"

import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
class Authscreen extends Component
{
    loginHandler = ()=>{
        startMainTanbs();
    }
    render(){
        return(
        <ImageBackground source = {bg} style = {styles.background}>
        <View style = {styles.container}>
        <MainText>
            <HeadingText >Please Login</HeadingText>
            </MainText>
            <ButtonWithBackground color = "transparent" onPress = {()=>alert("Login")}>Siwtch to Login</ButtonWithBackground> 
            <View style = {styles.inputContainer}>
            <DefaultInput placeholder = "Enter Your Eamil" style = {styles.input} />
            <DefaultInput placeholder="Enter your Password"style = {styles.input}/>
            <DefaultInput placeholder = "Confirm Password" style = {styles.input}/>
            </View>
            <ButtonWithBackground color = "transparent" onPress = {this.loginHandler} > Siwtch to Login</ButtonWithBackground>
        </View>
        </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
    },
    inputContainer:{
        width:"80%"
    },
    background:{
        width:"100%",
        flex:1
    },
    input:{
        backgroundColor:"transparent",
        borderColor:"black"
        
    }
})

export default Authscreen;