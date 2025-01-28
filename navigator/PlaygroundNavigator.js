import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CheckInNavigator from "./CheckInNavigator";
import Playground from "../screens/home/Playground";
import Arcade from "../screens/playground/Arcade";
import Laughs from "../screens/playground/Laughs";
import DreamboardNavigator from "./DreamboardNavigator";
import LetGoNavigator from "./LetgoNavigator"
import ProductivityNavigator from "./ProductivityNavigator";

const Stack = createStackNavigator();

const PlaygroundNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Playground">
      <Stack.Screen
        name="Playground"
        component={Playground}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Arcade"
        component={Arcade}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Laughs"
        component={Laughs}
        options={{ headerShown: false }}
      />
      {/* let go part */}
      <Stack.Screen
        name="LetGo"
        component={LetGoNavigator}
        options={{ headerShown: false }}
      />

      {/* dreamboard part */}
      <Stack.Screen
        name="Dreamboard"
        component={DreamboardNavigator}
        options={{
          headerShown: false, // Hide header
          // presentation: "modal", // Set modal presentation
        }}
      />
      <Stack.Screen
        name="Productivity"
        component={ProductivityNavigator}
        options={{
          headerShown: false, // Hide header
          // presentation: "modal", // Set modal presentation
        }}
      />

      <Stack.Screen name="CheckInNavigator" component={CheckInNavigator} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default PlaygroundNavigator;
