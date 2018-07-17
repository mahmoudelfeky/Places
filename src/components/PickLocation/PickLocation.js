import React, { Component } from "react";
import { View, Image, Button, StyleSheet, Text, Dimensions } from "react-native";
import MapView from "react-native-maps";

class PickLocation extends Component {
    state = {
        focusedLoaction: {
            latitude: 30.5965,
            longitude: 32.2715,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * .0122
        },
        locationChosen: false
    }
    getLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(pos => {
            const coordsEvent = {
                nativeEvent: {
                    coordinate: {
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude
                    }
                }
            }
            this.pickLocationHandler(coordsEvent)
        },
            err => {
                alert("Fetching Position Failed")
            });
    }
    pickLocationHandler = event => {
        const coords = event.nativeEvent.coordinate
        this.map.animateToRegion({
            ...this.state.focusedLoaction,
            latitude: coords.latitude,
            longitude: coords.longitude
        })
        this.setState(prevState => {
            return {
                focusedLoaction: {
                    ...prevState.focusedLoaction,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                },
                locationChosen: true
            }
        })
        this.props.onlocationPick({
            latitude: coords.latitude,
            longitude: coords.longitude
        })
    }
    render() {
        let marker = null;
        if (this.state.locationChosen) {
            marker = <MapView.Marker coordinate={this.state.focusedLoaction} />
        }
        return (
            <View style={styles.container}>
                <MapView
                    initialRegion={this.state.focusedLoaction}
                    style={styles.map}
                    onPress={this.pickLocationHandler}
                    ref={ref => this.map = ref}
                >
                    {marker}
                </MapView>
                <View style={styles.buttons}>
                    <Button title="Locate Me" onPress={this.getLocationHandler} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    map: {

        width: "100%",
        height: 250

    },
    buttons: {
        margin: 8
    },
    previewImage: {
        width: "100%",
        height: "100%"
    }
})

export default PickLocation;