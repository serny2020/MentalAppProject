import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DontLaughChallengeScreen from "../../screens/playground/arcade/dontLaugh/DontLaughChallengeScreen";
import HelpScreen from "../../screens/playground/arcade/here/HereAndNowHelpScreen";
import DontLaughHelpScreen from "../../screens/playground/arcade/dontLaugh/DontLaughHelpScreen";

const Stack = createStackNavigator();

const DontLaughNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="DontLaughChallengeScreen">
      <Stack.Screen
        name="DontLaughChallengeScreen"
        component={DontLaughChallengeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DontLaughHelpScreen"
        component={DontLaughHelpScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default DontLaughNavigator;
