import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dreamboard from "../screens/playground/dreamboard/Dreamboard";
import DreamOverview from "../screens/playground/dreamboard/DreamOverview";
import DreamDetailScreen from "../screens/playground/dreamboard/DreamDetailScreen";
import PhotoCollageScreen from "../screens/playground/dreamboard/PhotoCollageScreen";
import CollagingNavigator from './CollagingNavigator';

const Stack = createStackNavigator();

const DreamboardNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dreamboard">
      <Stack.Screen
        name="Dreamboard"
        component={Dreamboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DreamOverview"
        component={DreamOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DreamDetailScreen"
        component={DreamDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PhotoCollageScreen"
        component={PhotoCollageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CollagingNavigator"
        component={CollagingNavigator}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default DreamboardNavigator;
