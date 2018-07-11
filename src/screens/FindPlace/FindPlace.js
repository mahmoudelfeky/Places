import React ,{ Component } from "react";
import { View,Text } from "react-native";
import PlaceList, { } from "../../components/PlaceList/PlaceList";
import { connect } from "react-redux";
import DrawerComponent, { } from "../../components/DrawerComponent/DrawerComponent";


class FindPlaceScreen extends DrawerComponent{
    itemSelectedHandler = key=>{
        const selPlace = this.props.places.find(place=>{
            return place.key === key
        });
        this.props.navigator.push({
            screen:"awesome-places.PlaceDetail",
            title:selPlace.name,
            passProps:{
                selectedPlace:selPlace
            }
        })
    };
    render()
    {
        return(
            <View>
               <PlaceList places = {this.props.places} onItemSelected = {this.itemSelectedHandler}/>
            </View>
        )
    }
}
const mapStateToProps = state=>{
    return{
        places:state.places.places
    }
}
export default connect(mapStateToProps,null)(FindPlaceScreen);