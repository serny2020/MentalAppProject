import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "./screens/main/WelcomePage";
import HomePage from "./screens/main/HomePage";
import CheckInNavigator from "./navigator/CheckInNavigator";
import AuthNavigator from "./navigator/AuthNavigator";
import { MusicProvider } from "./context/MusicContext";
import { CheckInProvider } from "./context/CheckInContext";
import { AuthProvider } from "./context/AuthContext";
import OtherPage from "./components/OtherPage";
import HomePageNavigator from "./navigator/HomePageNavigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <CheckInProvider>
        <MusicProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
              <Stack.Screen
                name="Welcome"
                component={WelcomePage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={HomePage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Auth"
                component={AuthNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CheckIn"
                component={CheckInNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Main"
                component={HomePageNavigator}
                options={{ headerShown: false }}
              />
              
            </Stack.Navigator>
          </NavigationContainer>
        </MusicProvider>
      </CheckInProvider>
    </AuthProvider>
  );
}
