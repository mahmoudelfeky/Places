import React , {Component} from "react";
import { View ,Text ,Button,TextInput , StyleSheet , ImageBackground,Dimensions} from "react-native";
import startMainTanbs from "../MainTabs/startMainTanbs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import bg from "../../assets/bootstrap_bg.png"

import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
class Authscreen extends Component
{
    state = {
        respStyles:{
            pwContainerDirection:"column",
            pwContainerJustifyContent:"flex-start",
            pwWrapperWidth:"100%"
        }
    }

    constructor(props)
    {
        super(props);
        Dimensions.addEventListener("change",dim=>{
            
            this.setState( {respStyles:{
                pwContainerDirection:Dimensions.get("window").height>500?"column":"row",
                pwContainerJustifyContent:Dimensions.get("window").height>500?"flex-start":"space-between",
                pwWrapperWidth:Dimensions.get("window").height>500?"100%":"45%"
            }})
        })
    }

    loginHandler = ()=>{
        startMainTanbs();
    }
    render(){
        let headingText = null;
        if(Dimensions.get("window").height>500)
        {
            headingText = (
                <MainText>
            <HeadingText >Please Login</HeadingText>
            </MainText>
            )
        }
        return(
        <ImageBackground source = {bg} style = {styles.background}>
        <View style = {styles.container}>
        {
            headingText
        }
            <ButtonWithBackground color = "transparent" onPress = {()=>alert("Login")}>Siwtch to Login</ButtonWithBackground> 
            <View style = {styles.inputContainer}>
            <DefaultInput placeholder = "Enter Your Eamil" style = {styles.input} />
            <View style = 
            {{flexDirection:this.state.respStyles.pwContainerDirection,
            justifyContent:this.state.respStyles.pwContainerJustifyContent}}>
            <View style = {{width:this.state.respStyles.pwWrapperWidth}}>
            <DefaultInput placeholder="Enter your Password"style = {styles.input}/>
            </View>
            <View style = {{width:this.state.respStyles.pwWrapperWidth}}>
            <DefaultInput placeholder = "Confirm Password" style = {styles.input}/>
            </View>
            </View>
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
        
    },
 
})

export default Authscreen;