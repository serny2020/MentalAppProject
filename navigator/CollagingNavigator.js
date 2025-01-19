import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CollagingContextProvider } from '../context/CollagingContext'; // Adjust the path as needed
import CollagingDreamsScreen from '../screens/playground/dreamboard/Collaging/CollagingDreamsScreen';
import AlbumSelectionScreen from '../screens/playground/dreamboard/Collaging/AlbumSelectionScreen';
import RecommendationScreen from '../screens/playground/dreamboard/RecommendationScreen';
import SelectTemplateScreen from '../screens/playground/dreamboard/SelectTemplateScreen';
import DreamLifeCraftedScreen from '../screens/playground/dreamboard/DreamLifeCraftedScreen';


const Stack = createStackNavigator();

const CollagingNavigator = () => {
  return (
    <CollagingContextProvider>
      <Stack.Navigator initialRouteName="CollagingDreamsScreen">
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
    </CollagingContextProvider>
  );
};

export default CollagingNavigator;