import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


// Import screens
import SettingsScreen from "../screens/playground/routine/SettingsScreen";
import Routine from "../screens/home/Routine";

// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const SettingsDrawerNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ drawerLabel: "Main Settings" }}
      />
    </Stack.Navigator>
  );
};

export default SettingsDrawerNavigator; 
