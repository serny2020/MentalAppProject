import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


// Import screens
import SettingsScreen from "../screens/playground/routine/SettingsScreen";
import Routine from "../screens/home/Routine";
import AffirmationPage from "../screens/check-in/Finish";
import AffirmationCollection from "../screens/affirmation/AffirmationCollection";
import GuidedAffirmation from "../screens/affirmation/GuidedAffirmation";
import AffirmationOption2 from "../screens/affirmation/AddAffirmationImages";
import AffirmationOption1 from "../screens/affirmation/AffirmationOption1";
import UniqueAffirmation from "../screens/affirmation/UniqueAffirmation";
import WriteAffirmation from "../screens/affirmation/WriteAffirmation";
import AffirmationSwipePage from "../screens/affirmation/AffirmationSwipePage";
import AddAffirmationImages from "../screens/affirmation/AddAffirmationImages";
import ChangeBackgroundScreen from "../screens/affirmation/ChangeBackgroundScreen";

// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const SettingsDrawerNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="AffirmationCollection">
      <Stack.Screen
        name="AffirmationCollection"
        component={AffirmationCollection}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="AffirmationOption1"
        component={AffirmationOption1}
        options={{headerShown: false}}
      />



      {/* Customized Affirmation option 2 */}
      <Stack.Screen
        name="AddAffirmationImages"
        component={AddAffirmationImages}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GuidedAffirmation"
        component={GuidedAffirmation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UniqueAffirmation"
        component={UniqueAffirmation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WriteAffirmation"
        component={WriteAffirmation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AffirmationSwipePage"
        component={AffirmationSwipePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangeBackgroundScreen"
        component={ChangeBackgroundScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SettingsDrawerNavigator; 
