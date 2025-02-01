import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HereAndNowScreen from "../../screens/playground/arcade/here/HereAndNowScreen";
import HereAndNowHelpScreen from "../../screens/playground/arcade/here/HereAndNowHelpScreen";
import HereNowSettingsScreen from "../../screens/playground/arcade/here/HereNowSettingsScreen";
import SettingsScreen from "../../screens/playground/arcade/here/SettingsScreen";
import BallColorScreen from "../../screens/playground/arcade/here/BallColorScreen";
import BallTypeScreen from "../../screens/playground/arcade/here/BallTypeScreen";

const Stack = createStackNavigator();

const HereAndNowNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HereAndNowScreen">
      <Stack.Screen
        name="HereAndNowScreen"
        component={HereAndNowScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HereAndNowHelpScreen"
        component={HereAndNowHelpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HereNowSettingsScreen"
        component={HereNowSettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BallColorScreen"
        component={BallColorScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BallTypeScreen"
        component={BallTypeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default HereAndNowNavigator;
