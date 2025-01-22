import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AffirmationCollection from "../screens/affirmation/AffirmationCollection";
import GuidedAffirmation from "../screens/affirmation/GuidedAffirmation";
import AffirmationOption1 from "../screens/affirmation/AffirmationOption1";
import UniqueAffirmation from "../screens/affirmation/UniqueAffirmation";
import WriteAffirmation from "../screens/affirmation/WriteAffirmation";
import AffirmationSwipePage from "../screens/affirmation/AffirmationSwipePage";
import AddAffirmationImages from "../screens/affirmation/AddAffirmationImages";
import ChangeBackgroundScreen from "../screens/affirmation/ChangeBackgroundScreen";
import AffirmationProvider from "../context/AffirmationContext";
import DeleteOrReplaceImagesScreen from "../screens/affirmation/DeleteOrReplaceImagesScreen";
import ConfirmAffirmationScreen from "../screens/affirmation/ConfirmAffirmationScreen";

const Stack = createStackNavigator();

const AffirmationNavigator = () => {
  return (
    <AffirmationProvider>
      <Stack.Navigator initialRouteName="AffirmationCollection">
        <Stack.Screen
          name="AffirmationCollection"
          component={AffirmationCollection}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DeleteOrReplaceImagesScreen"
          component={DeleteOrReplaceImagesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AffirmationOption1"
          component={AffirmationOption1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddAffirmationImages"
          component={AddAffirmationImages}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GuidedAffirmation"
          component={GuidedAffirmation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UniqueAffirmation"
          component={UniqueAffirmation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WriteAffirmation"
          component={WriteAffirmation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AffirmationSwipePage"
          component={AffirmationSwipePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfirmAffirmationScreen"
          component={ConfirmAffirmationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangeBackgroundScreen"
          component={ChangeBackgroundScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </AffirmationProvider>
  );
};

export default AffirmationNavigator;
