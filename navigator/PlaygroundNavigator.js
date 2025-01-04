import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Playground from "../screens/home/Playground";
import Arcade from "../screens/playground/Arcade";
import Dreamboard from "../screens/playground/dreamboard/Dreamboard";
import Laughs from "../screens/playground/Laughs";
import LetGo from "../screens/playground/letgo/LetGo";
import DreamOverview from "../screens/playground/dreamboard/DreamOverview";
import DreamDetailScreen from "../screens/playground/dreamboard/DreamDetailScreen";
import PhotoCollageScreen from "../screens/playground/dreamboard/PhotoCollageScreen";
import HomePageNavigator from "./HomePageNavigator"; // Import your bottom tab navigator
import UnhelpfulThoughtsScreen from "../screens/playground/letgo/UnhelpfulThoughtsScreen";
import BurnAsAshScreen from "../screens/playground/letgo/BurnAsAshScreen";
import ThrowAsTrashScreen from "../screens/playground/letgo/ThrowAsTrashScreen";
import SwiperScreen from "../screens/playground/letgo/SwiperScreen";

const Stack = createStackNavigator();

const PlaygroundNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Playground">
      <Stack.Screen
        name="Playground"
        component={Playground}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Arcade"
        component={Arcade}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Laughs"
        component={Laughs}
        options={{ headerShown: false }}
      />
      {/* let go part */}
      <Stack.Screen
        name="LetGo"
        component={LetGo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UnhelpfulThoughtsScreen"
        component={UnhelpfulThoughtsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BurnAsAshScreen"
        component={BurnAsAshScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ThrowAsTrashScreen"
        component={ThrowAsTrashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SwiperScreen"
        component={SwiperScreen}
        options={{ headerShown: false }}
      />


      {/* dreamboard part */}
      <Stack.Screen
        name="Dreamboard"
        component={Dreamboard}
        options={{
          headerShown: false, // Hide header
          // presentation: "modal", // Set modal presentation
        }}
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
