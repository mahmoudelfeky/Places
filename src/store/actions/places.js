import { ADD_PLACE, DELETE_PLACE } from './actionTypes';
import { uiStartLoading,uiStopLoading } from "./index";
export const addPlace = (placeName, location, image) => {
    return dispatch => {

        fetch("https://us-central1-places-210412.cloudfunctions.net/storeImage", {
            method: "POST",
            body: JSON.stringify({
                image: image.base64
            })
        })
            .catch(err => alert("error" + err))
            .then(res => res.json())
            .then(parsedRes => {
                const placeData = {
                    name: placeName,
                    location: location,
                    image: parsedRes.imageUrl
                };
                fetch("https://places-210412.firebaseio.com/places.json", {
                    method: "POST",
                    body: JSON.stringify(placeData)
                })
            })

            .catch(err => alert("error" + err))
            .then(res => res.json())
            .then(parsedRes => {
                alert(parsedRes + "data");
            });
    };
};
export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        key
    };
};
