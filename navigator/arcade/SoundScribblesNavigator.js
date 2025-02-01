import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SoundScribblesScreen from "../../screens/playground/arcade/soundScribbles/SoundScribblesScreen";
import SoundScribblesHelpScreen from "../../screens/playground/arcade/soundScribbles/SoundScribblesHelpScreen";

const Stack = createStackNavigator();

const SoundScribblesNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SoundScribblesScreen">
      <Stack.Screen
        name="SoundScribblesScreen"
        component={SoundScribblesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SoundScribblesHelpScreen"
        component={SoundScribblesHelpScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default SoundScribblesNavigator;
