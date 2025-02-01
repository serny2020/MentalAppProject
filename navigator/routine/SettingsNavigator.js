import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


// Import screens
import SettingsScreen from "../../screens/routine/SettingsScreen";
import AffirmationNavigator from "../playground/dreamboard/AffirmationNavigator";

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

export default SettingsDrawerNavigator; 
