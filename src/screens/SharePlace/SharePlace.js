import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView ,Image } from 'react-native';
import { connect } from 'react-redux';
import DrawerComponent, { } from "../../components/DrawerComponent/DrawerComponent";
import { addPlace } from '../../store/actions/index';
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

import PickLocation from "../../components/PickLocation/PickLocation";
import PickImage from "../../components/PickImage/PickImage";
class SharePlaceScreen extends DrawerComponent {

    state = {
        placeName:""
    }

    placeAddedHandler = () => {
       if(this.state.placeName.trim()!=="")
       {
        this.props.onAddPlace(this.state.placeName);
       }
    }
    
    placeNameChangedHandler = val => {
        this.setState({
          placeName: val
        });
      };

    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                <MainText>
                    <HeadingText>Share a place with us </HeadingText>
                </MainText>
                   <PickImage/>
                   
                   <PickLocation/>

                    <PlaceInput placeName = {this.state.placeName} onChangeText = {this.placeNameChangedHandler}/>
                    <View style ={styles.buttons}>
                        <Button title="Sahre the place" onPress = {this.placeAddedHandler} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
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
const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);