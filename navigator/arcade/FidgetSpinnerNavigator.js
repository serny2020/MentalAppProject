import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FidgetSpinnerScreen from "../../screens/playground/arcade/fidgetSpinner/FidgetSpinnerScreen";
import FidgetSpinnerHelpScreen from "../../screens/playground/arcade/fidgetSpinner/FidgetSpinnerHelpScreen";

const Stack = createStackNavigator();

const FigetSpinnerNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="FidgetSpinnerScreen">
      <Stack.Screen
        name="FidgetSpinnerScreen"
        component={FidgetSpinnerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FidgetSpinnerHelpScreen"
        component={FidgetSpinnerHelpScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default FigetSpinnerNavigator;
