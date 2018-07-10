import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import FindPlace from "./src/screens/FindPlace/FindPlace";
import PlaceDetail from "./src/screens/PlaceDetail/PlaceDetail";
import SharePlace from "./src/screens/SharePlace/SharePlace";
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();
// Register Screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen,store,Provider);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlace,store,Provider);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlace,store,Provider);
Navigation.registerComponent("awesome-places.PlaceDetail",()=>PlaceDetail,store,Provider)

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
});