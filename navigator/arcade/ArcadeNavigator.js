import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Arcade from "../../screens/playground/arcade/Arcade";
import HereAndNowNavigator from "./HereAndNowNavigator";

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

    </Stack.Navigator>
  );
};

export default ArcadeNavigator;
