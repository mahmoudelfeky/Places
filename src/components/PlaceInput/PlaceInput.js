import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const PlaceInput = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.placeInput}
                placeholder="Enter Your Place here"
                value={props.value}
                onChangeText={props.onChangeText} />

            <Button
                onPress={props.onPress}
                style={styles.placeButton}
                title={props.title} />
        </View>);
}
const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    }
})

export default PlaceInput;