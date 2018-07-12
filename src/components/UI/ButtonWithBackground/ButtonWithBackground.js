import React from "react";
import { TouchableOpacity, TouchableNativeFeedback, View, Text, StyleSheet, Platform } from "react-native";

const ButtonWithBackground = props => {
    const content = (<View {...props}
        style={[styles.button, { backgroundColor: props.color }]}>
        <Text>{props.children}</Text>
    </View>
    );
    if (Platform.OS == "android") {
        return (
            <TouchableNativeFeedback onPress={props.onPress}>
                {content}
            </TouchableNativeFeedback>
        )
    }
    return <TouchableOpacity onPress={props.onPress}>
        {content}
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black"
    }
})
export default ButtonWithBackground;