import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePageNavigator from './HomePageNavigator'; // Import your bottom tab navigator
import PlaygroundNavigator from './PlaygroundNavigator'; // Import your stack navigator for Playground
import DreamOverview from '../screens/playground/dreamboard/DreamOverview'; // Import your stack navigator for Playground

const Stack = createStackNavigator();

const MainPageOverviewNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomePageNavigator">
      {/* Home Page Navigator (Bottom Tab Navigator) */}
      <Stack.Screen
        name="HomePageNavigator"
        component={HomePageNavigator}
        options={{ headerShown: false }} // Hide header for the tab navigator
      />
      
      {/* Playground Navigator (Stack Navigator) */}
      <Stack.Screen
        name="PlaygroundNavigator"
        component={PlaygroundNavigator}
        options={{ headerShown: false,
            presentation: 'modal'
        }} // Hide header for the Playground stack navigator
      />
      {/* <Stack.Screen
        name="DreamOverview"
        component={DreamOverview}
        options={{ headerShown: false,
            presentation: 'modal'
        }} // Hide header for the Playground stack navigator
      /> */}
      
    </Stack.Navigator>
  );
};

export default MainPageOverviewNavigator;
