import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePageNavigator from "./HomePageNavigator"; // Import your bottom tab navigator
import PlaygroundNavigator from "./playground/PlaygroundNavigator"; // Import your stack navigator for Playground
import SOSNavigator from "./SOSNavigator"; // Import your stack navigator for Playground
import SettingsNavigator from "./routine/SettingsNavigator";

import { createDrawerNavigator } from "@react-navigation/drawer";
import RoutineNavigator from "./routine/RoutineNavigator";
import ReorderSettings from "../components/routine/ReorderSettings";
import DreamboardNavigator from "./discover/DreamboardNavigator";
import NotificationsPage from "../screens/discover/community/NotificationsPage";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
        options={{ headerShown: false, presentation: "modal" }} // Hide header for the Playground stack navigator
      />
      <Stack.Screen
        name="SOSNavigator"
        component={SOSNavigator}
        options={{ headerShown: false, presentation: "modal" }} // Hide header for the Playground stack navigator
      />
      <Stack.Screen
        name="SettingsNavigator"
        component={SettingsNavigator}
        options={{ headerShown: false }} // Hide header for the Playground stack navigator
      />
      <Stack.Screen
        name="RoutineNavigator"
        component={RoutineNavigator}
        options={{ headerShown: false, presentation: "modal" }} // Hide header for the Playground stack navigator
      />
      <Stack.Screen
        name="ReorderSettings"
        component={ReorderSettings}
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="DreamboardNavigator"
        component={DreamboardNavigator}
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsPage}
        options={{ headerShown: false, presentation: "modal" }}
      />

      {/* <Stack.Screen
        name="JournalDrawerNavigator"
        component={JournalDrawerNavigator}
        options={{ headerShown: false,
        }} // Hide header for the Playground stack navigator
      /> */}
      {/* <Stack.Screen
        name="JournalDrawerNavigatorWrapper"
        component={JournalDrawerNavigatorWrapper}
        options={{ headerShown: false,
        }} // Hide header for the Playground stack navigator
      /> */}
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
