import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import VibrationScribblesScreen from "../../screens/playground/arcade/vibrationScribbles/VibrationScribblesScreen";

const Stack = createStackNavigator();

const VibrationScribblesNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="VibrationScribblesScreen">
      <Stack.Screen
        name="VibrationScribblesScreen"
        component={VibrationScribblesScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="SoundScribblesHelpScreen"
        component={SoundScribblesHelpScreen}
        options={{ headerShown: false }}
      /> */}

    </Stack.Navigator>
  );
};

export default VibrationScribblesNavigator;
