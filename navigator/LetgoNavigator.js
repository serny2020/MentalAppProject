import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LetGo from "../screens/playground/letgo/LetGo";
import UnhelpfulThoughtsScreen from "../screens/playground/letgo/UnhelpfulThoughtsScreen";
import BurnAsAshScreen from "../screens/playground/letgo/BurnAsAshScreen";
import ThrowAsTrashScreen from "../screens/playground/letgo/ThrowAsTrashScreen";
import SwiperScreen from "../screens/playground/letgo/SwiperScreen";
import BrainDumpScreen from "../screens/playground/letgo/BrainDumpScreen";
import IdentifyThoughtsScreen from "../screens/playground/letgo/IdentifyThoughtsScreen";
import IdentifyWithModal from "../screens/playground/letgo/IdentifyWithModal"


const Stack = createStackNavigator();

const SOSNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LetGo">
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
      <Stack.Screen
        name="BrainDumpScreen"
        component={BrainDumpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IdentifyThoughtsScreen"
        component={IdentifyThoughtsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IdentifyWithModal"
        component={IdentifyWithModal}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SOSNavigator;
