import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";

const  PlaceInput = props => {
    return (
      <DefaultInput style={{ color: "black" }} 
      placeholder="Place Name"  value = {props.placeName}
       onChangeText={props.onChangeText}/>
    );
  }

export default PlaceInput;
