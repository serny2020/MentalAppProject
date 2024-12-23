import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpPage from "../screens/auth/SignUpPage";
import LoginPage from "../screens/auth/LoginPage";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
