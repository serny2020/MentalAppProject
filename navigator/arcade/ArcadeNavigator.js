import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Arcade from "../../screens/playground/arcade/Arcade";
import HereAndNowNavigator from "./HereAndNowNavigator";
import DontLaughNavigator from "./DontLaughNavigator";
import SoundScribblesNavigator from "./SoundScribblesNavigator";
import FidgetSpinnerNavigator from "./FidgetSpinnerNavigator";
import VibrationScribblesNavigator from "./VibrationScribblesNavigator";

const Stack = createStackNavigator();

const ArcadeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Arcade">
      <Stack.Screen
        name="Arcade"
        component={Arcade}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HereAndNowNavigator"
        component={HereAndNowNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DontLaughNavigator"
        component={DontLaughNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SoundScribblesNavigator"
        component={SoundScribblesNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FidgetSpinnerNavigator"
        component={FidgetSpinnerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VibrationScribblesNavigator"
        component={VibrationScribblesNavigator}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default ArcadeNavigator;
