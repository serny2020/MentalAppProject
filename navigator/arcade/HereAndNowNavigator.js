import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HereAndNowScreen from "../../screens/playground/arcade/here/HereAndNowScreen";
import HereAndNowHelpScreen from "../../screens/playground/arcade/here/HereAndNowHelpScreen";
import HereNowSettingsScreen from "../../screens/playground/arcade/here/HereNowSettingsScreen";

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

    </Stack.Navigator>
  );
};

export default HereAndNowNavigator;
