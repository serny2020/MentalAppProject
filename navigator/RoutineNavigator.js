import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


// Import screens
import SettingsScreen from "../screens/playground/routine/SettingsScreen";
import AffirmationNavigator from "./AffirmationNavigator";
import Routine from "../screens/home/Routine";
// import ReorderSettings from "../components/routine/ReorderSettings";

// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const RoutineNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Routine">
      <Stack.Screen
        name="Routine"
        component={Routine}
        // options={{ drawerLabel: "Main Settings" }}
      />
      {/* <Stack.Screen
        name="ReorderSettings"
        component={ReorderSettings}
        // options={{ drawerLabel: "Main Settings" }}
      /> */}
      {/* <Stack.Screen
        name="AffirmationCollection"
        component={AffirmationCollection}
        options={{headerShown: false,presentation: 'modal' }}
      /> */}
      <Stack.Screen
        name="AffirmationNavigator"
        component={AffirmationNavigator}
        options={{headerShown: false, presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};

export default RoutineNavigator; 
