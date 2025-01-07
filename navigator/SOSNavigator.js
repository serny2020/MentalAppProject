import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CheckInNavigator from "./CheckInNavigator";
import SpinWheelPage from "../screens/playground/SOS/SpinWheelPage";
import SOS from "../screens/home/SOS";

const Stack = createStackNavigator();

const SOSNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SOS">
      <Stack.Screen
        name="SOS"
        component={SOS}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SpinWheelPage"
        component={SpinWheelPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CheckInNavigator" component={CheckInNavigator} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default SOSNavigator;
