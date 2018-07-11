import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView ,Image } from 'react-native';
import { connect } from 'react-redux';
import DrawerComponent, { } from "../../components/DrawerComponent/DrawerComponent";
import { addPlace } from '../../store/actions/index';
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import ImgPlaceHldr from "../../assets/beautiful-place.jpg";
class SharePlaceScreen extends DrawerComponent {



    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    }

    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                <MainText>
                    <HeadingText>Share a place with us </HeadingText>
                </MainText>
                   

                    <View style={styles.placeholder}>
                    <Image  source = {ImgPlaceHldr} style = {styles.previewImage}/></View>
                    <View style ={styles.buttons} >
                        <Button title="Pick Image" />
                    </View>
                    <View style={styles.placeholder}><Text>Map</Text></View>
                    <View style ={styles.buttons}>
                        <Button title="Locate Me" />
                    </View>
                    <DefaultInput style={{ color: "black" }} placeholder="Place Name" />
                    <View style ={styles.buttons}>
                        <Button title="Sahre the place" />
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