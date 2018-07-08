import React from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
export default class App extends React.Component {
  state =
    {
      placeName: "",
      places: [],
      selectedPlace: null
    }
  placeNameChangedHandler = value => {

    this.setState({
      placeName: value
    });
  }
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {

      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: prevState.placeName,
          image: {
            uri: "http://pngimagesfree.com/NATURE/Tree/thumb/Bright_green_tree_png-image.png"
          }
        })
      }
    })

  }
  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      }
    })
    // this.setState(prevState=>{
    //   return {
    //     places:prevState.places.filter((place)=>{
    //       return key !== place.key;
    //     })
    //   }
    // })
  }
  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };
  render() {

    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler} />
        <PlaceInput title="Add" value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          onPress={this.placeSubmitHandler} />
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
