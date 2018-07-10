import React , {Component} from "react";
import { View ,Text ,Button} from "react-native";
import startMainTanbs from "../MainTabs/startMainTanbs";
class Authscreen extends Component
{
    loginHandler = ()=>{
        startMainTanbs();
    }
    render(){
        return <View>
            <Text> Auth Screen </Text>
            <Button title = "Login" onPress = {this.loginHandler} />
        </View>
    }
}

export default Authscreen;