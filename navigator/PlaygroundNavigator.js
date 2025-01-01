import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Playground from '../screens/home/Playground';
import Arcade from '../screens/playground/Arcade';
import Dreamboard from '../screens/playground/dreamboard/Dreamboard';
import Laughs from '../screens/playground/Laughs';
import LetGo from '../screens/playground/letgo/LetGo';
import DreamOverview from '../screens/playground/dreamboard/DreamOverview';
import DreamDetailScreen from '../screens/playground/dreamboard/DreamDetailScreen';
import PhotoCollageScreen from '../screens/playground/dreamboard/PhotoCollageScreen';
import HomePageNavigator from './HomePageNavigator'; // Import your bottom tab navigator


const Stack = createStackNavigator();

const PlaygroundNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Playground">
      <Stack.Screen
        name="Playground"
        component={Playground}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Arcade"
        component={Arcade}
        options={{ headerShown: false }}
      />
    <Stack.Screen
      name="Dreamboard"
      component={Dreamboard}
      options={{
        headerShown: false, // Hide header
        // presentation: "modal", // Set modal presentation
      }}
    />
      <Stack.Screen
        name="Laughs"
        component={Laughs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LetGo"
        component={LetGo}
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
    </Stack.Navigator>
  );
};

export default PlaygroundNavigator;
