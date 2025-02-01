import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CheckInNavigator from "../CheckInNavigator";
import Playground from "../../screens/home/Playground";
import Laughs from "../../screens/playground/laughs/Laughs";
import DreamboardNavigator from "../discover/DreamboardNavigator";
import LetGoNavigator from "./letgo/LetgoNavigator"
import ProductivityNavigator from "./dreamboard/ProductivityNavigator";
import ArcadeNavigator from "../arcade/ArcadeNavigator";

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
        name="ArcadeNavigator"
        component={ArcadeNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Laughs"
        component={Laughs}
        options={{ headerShown: false }}
      />
      {/* let go part */}
      <Stack.Screen
        name="LetGoNavigator"
        component={LetGoNavigator}
        options={{ headerShown: false }}
      />

      {/* dreamboard part */}
      <Stack.Screen
        name="DreamboardNavigator"
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
