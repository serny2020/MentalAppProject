import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HereAndNowScreen from "../../screens/playground/arcade/here/HereAndNowScreen";
import HelpScreen from "../../screens/playground/arcade/here/HelpScreen";

const Stack = createStackNavigator();

const ArcadeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HereAndNowScreen">
      <Stack.Screen
        name="HereAndNowScreen"
        component={HereAndNowScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default ArcadeNavigator;
