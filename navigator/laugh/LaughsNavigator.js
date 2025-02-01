import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LaughsScreen from "../../screens/playground/laughs/Laughs";
import SavedVideosScreen from "../../screens/playground/laughs/SavedVideosScreen";

const Stack = createStackNavigator();

const LaughsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LaughsScreen">
      <Stack.Screen
        name="LaughsScreen"
        component={LaughsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SavedVideosScreen"
        component={SavedVideosScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default LaughsNavigator;
