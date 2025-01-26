import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CheckInNavigator from "./CheckInNavigator";
import SOS from "../screens/home/SOS";
import SpinWheelPage from "../screens/playground/SOS/SpinWheelPage";
import EmergencyToolkitScreen from "../screens/playground/SOS/EmergencyToolkitScreen";
import CustomizeScreen from "../screens/playground/SOS/CustomizeScreen";
import SelectToolsPage from "../screens/playground/SOS/SelectToolsPage";
import LovedOnesPage from "../screens/playground/SOS/LovedOnesPage";
import CrisisHelpPage from "../screens/playground/SOS/CrisisHelpPage";
import CallPage from "../screens/playground/SOS/CallPage";
import ReorderSOS from "../screens/playground/SOS/ReorderSOS";

import { ToolsProvider } from "../context/ToolsContext";

const Stack = createStackNavigator();

const SOSNavigator = () => {
  return (
    <ToolsProvider>
        <Stack.Navigator initialRouteName="SOS">
          <Stack.Screen
            name="SOS"
            component={SOS}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ReorderSOS"
            component={ReorderSOS}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="SpinWheelPage"
            component={SpinWheelPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EmergencyToolkitScreen"
            component={EmergencyToolkitScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CustomizeScreen"
            component={CustomizeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectToolsPage"
            component={SelectToolsPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LovedOnesPage"
            component={LovedOnesPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CrisisHelpPage"
            component={CrisisHelpPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CallPage"
            component={CallPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CheckInNavigator"
            component={CheckInNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
    </ToolsProvider>
  );
};

export default SOSNavigator;
