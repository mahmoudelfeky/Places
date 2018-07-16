import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Dimensions ,KeyboardAvoidingView,Keyboard ,TouchableWithoutFeedback} from "react-native";
import startMainTanbs from "../MainTabs/startMainTanbs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import bg from "../../assets/bootstrap_bg.png"
import validate from "../../Utitlity/validation"

import { connect } from "react-redux";
import { tryAuth } from "../../store/actions/index";

import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
class Authscreen extends Component {
    state = {
        viewMode: Dimensions.get("window").height > 500 ? "protrait" : "landscape",
        authMode:"login",
        controls: {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched:false
            },
            password: {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 6
                },
                touched:false
            },
            confirmPassword: {
                value: "",
                valid: false,
                validationRules: {
                    equalTo: "password"
                },
                touched:false
            }
        }
    }

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyle)
    }
    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyle)
    }

    updateStyle = dim => {
        this.setState({
            viewMode: dim.window.height > 500 ? "protrait" : "landscape"
        })
    }
    switchAuthModeHandler = ()=>{
        this.setState(prevState=>{
            return{
                authMode:prevState.authMode === "login"?"signup":"login"
            }
        })
    }
    

    loginHandler = () => {
        const authData = {
            email:this.state.controls.email.value,
            password:this.state.controls.password.value
        }
        this.props.onLogin(authData);
        startMainTanbs();
    }


    updateInputState = (key, value) => {
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
          const equalControl = this.state.controls[key].validationRules.equalTo;
          const equalValue = this.state.controls[equalControl].value;
          connectedValue = {
            ...connectedValue,
            equalTo: equalValue
          };
        }
        if (key === "password") {
          connectedValue = {
            ...connectedValue,
            equalTo: value
          };
        }
        this.setState(prevState => {
          return {
            controls: {
              ...prevState.controls,
              confirmPassword: {
                ...prevState.controls.confirmPassword,
                valid:
                  key === "password"
                    ? validate(
                        prevState.controls.confirmPassword.value,
                        prevState.controls.confirmPassword.validationRules,
                        connectedValue
                      )
                    : prevState.controls.confirmPassword.valid
              },
              [key]: {
                ...prevState.controls[key],
                value: value,
                valid: validate(
                  value,
                  prevState.controls[key].validationRules,
                  connectedValue
                ),
                touched:true
              }
            }
          };
        });
      };

    render() {
        let headingText = null;
        let viewMode = this.state.viewMode;
        let PasswordContainerStyle = PasswordWrapperStyle = null

        let confirmPasswordControl = null;
       
        if (viewMode === "protrait") {
            headingText = (
                <MainText style={{ marginBottom: 30 }}>
                    <HeadingText >Please Login</HeadingText>
                </MainText>
            )
            PasswordContainerStyle = styles.portraitPasswordContainer;
            PasswordWrapperStyle = styles.protraitPasswordWrapper;
        }
        else if(this.state.authMode === "login"){
            PasswordContainerStyle = styles.portraitPasswordContainer;
            PasswordWrapperStyle = styles.protraitPasswordWrapper;
        }
        else{
            PasswordContainerStyle = styles.landscapePasswordContainer;
            PasswordWrapperStyle = styles.landscapePasswordWrapper;
        }
        if(this.state.authMode === "signup") {
            confirmPasswordControl =  ( <View style={PasswordWrapperStyle}>
            <DefaultInput placeholder="Confirm Password" style={styles.input}
                value={this.state.controls.confirmPassword.value}
                onChangeText={val => {
                    this.updateInputState("confirmPassword", val);
                }}
                touched = {this.state.controls.confirmPassword.touched}
                valid = {this.state.controls.confirmPassword.valid}
                secureTextEntry
                />
        </View>);
        }


        return (
            <ImageBackground source={bg} style={styles.background}>
                <KeyboardAvoidingView style={styles.container} behavior = "padding">
                    {
                        headingText
                    }
                    <ButtonWithBackground color="transparent" onPress={this.switchAuthModeHandler}>Siwtch to {this.state.authMode === "login"?"signup":"login"}</ButtonWithBackground>
                   <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Enter Your Eamil" style={styles.input}
                            value={this.state.controls.email.value}
                            onChangeText={val => {
                                this.updateInputState("email", val);
                            }}
                            touched = {this.state.controls.email.touched}
                            valid = {this.state.controls.email.valid}
                            autoCapitalize = "none"
                            keyboardType = "email-address"
                        />
                        <View style={PasswordContainerStyle}>
                            <View style={PasswordWrapperStyle}>
                                <DefaultInput placeholder="Enter your Password" style={styles.input}
                                    value={this.state.controls.password.value}
                                    onChangeText={val => {
                                        this.updateInputState("password", val);
                                    }}
                                    touched = {this.state.controls.password.touched}
                                    valid = {this.state.controls.password.valid}
                                    secureTextEntry
                                />
                            </View>
                           {confirmPasswordControl}
                        </View>
                    </View>
                    </TouchableWithoutFeedback>
                    <ButtonWithBackground
                    disabled = {!this.state.controls.email.valid||!this.state.controls.password.valid||!this.state.controls.confirmPassword.valid&&this.state.authMode === "signup"}
                    color="transparent" onPress={this.loginHandler} > Siwtch to Login</ButtonWithBackground>
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    inputContainer: {
        width: "80%"
    },
    background: {
        width: "100%",
        flex: 1
    },
    input: {
        backgroundColor: "transparent",
        borderColor: "black"

    },
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    landscapePasswordWrapper: {
        width: "45%"
    },
    protraitPasswordWrapper: {
        width: "100%"
    },

})
const mapDispatchToProps = dispatch=>{
    return{
        onLogin:authData=>dispatch(tryAuth(authData))
    }
}

export default connect(null,mapDispatchToProps)( Authscreen);