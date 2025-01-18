import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dreamboard from "../screens/playground/dreamboard/Dreamboard";
import DreamOverview from "../screens/playground/dreamboard/DreamOverview";
import DreamDetailScreen from "../screens/playground/dreamboard/DreamDetailScreen";
import PhotoCollageScreen from "../screens/playground/dreamboard/PhotoCollageScreen";
import CollagingDreamsScreen from "../screens/playground/dreamboard/CollagingDreamsScreen"
import AlbumSelectionScreen from "../screens/playground/dreamboard/AlbumSelectionScreen";
import CommonTopicsScreen from "../screens/playground/dreamboard/CommonTopicsScreen";
import RecommendationScreen from "../screens/playground/dreamboard/RecommendationScreen"
import SelectTemplateScreen from "../screens/playground/dreamboard/SelectTemplateScreen";
import DreamLifeCraftedScreen from "../screens/playground/dreamboard/DreamLifeCraftedScreen";

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
        name="CollagingDreamsScreen"
        component={CollagingDreamsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AlbumSelectionScreen"
        component={AlbumSelectionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CommonTopicsScreen"
        component={CommonTopicsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecommendationScreen"
        component={RecommendationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectTemplateScreen"
        component={SelectTemplateScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DreamLifeCraftedScreen"
        component={DreamLifeCraftedScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default DreamboardNavigator;
