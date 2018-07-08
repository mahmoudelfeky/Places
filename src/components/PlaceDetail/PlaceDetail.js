import React from "react";
import { Modal, View, Image, Text, Button ,StyleSheet} from "react-native";
const PlaceDetail = props => {
    let modalContent = null;
    if(props.selectedPlace)
    {
        modalContent = <View>
             <Image source={props.selectedPlace.image} style = {styles.placeImage} />
            <Text>{props.selectedPlace.name}</Text>
        </View>
    }
    return(
    <Modal visible = {props.selectedPlace !== null} animationType = "slide">
        <View style = {styles.modalContainer}>
           {modalContent}
            <View>
                <Button title= "Delete" color= "red"/>
                <Button title ="Close" />
            </View>
        </View>
   </Modal>);

     }
     const styles = StyleSheet.create({
         modalContainer:{
           
         },
         placeImage:{
             width:"100%",
             height:300
         }
     });     
export default PlaceDetail;