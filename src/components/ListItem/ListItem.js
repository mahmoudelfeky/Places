import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
  <View style = {styles.container}>
    <View style={styles.listItem}>
      <Image resizeMode="cover" source={props.placeImage} style={styles.placeImage} />
      <Text style ={styles.placeText}>{props.placeName}</Text>
    </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  listItem: {
    width: "95%",
    margin: 5,
    padding: 10,
    backgroundColor: "#DCDCDC",
    flexDirection: "row",
    alignItems: "center",
    borderRadius:5
  },
  placeText:{
    fontSize:18,
    color:"black"
  },
  placeImage: {
      marginRight: 8,
      height: 50,
      width: 50,
      borderRadius:10
  }
});

export default listItem;
