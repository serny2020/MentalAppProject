import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "./screens/main/WelcomePage";
import HomePage from "./screens/main/HomePage";
import CheckInNavigator from "./navigator/CheckInNavigator";
import AuthNavigator from "./navigator/AuthNavigator";
import { MusicProvider } from "./context/MusicContext";
import { CheckInProvider } from './context/CheckInContext';
import { AuthProvider } from "./context/AuthContext";

const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Welcome" component={WelcomePage} options={{ headerShown: false }} />
//         <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
//         <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
//         <Stack.Screen name="CheckIn" component={CheckInNavigator} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <AuthProvider>
    <CheckInProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* Wrap only WelcomePage and HomePage with MusicProvider */}
          <Stack.Screen name="Welcome" options={{ headerShown: false }}>
            {(props) => (
              <MusicProvider>
                <WelcomePage {...props} />
              </MusicProvider>
            )}
          </Stack.Screen>
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {(props) => (
              <MusicProvider>
                <HomePage {...props} />
              </MusicProvider>
            )}
          </Stack.Screen>
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
        </Stack.Navigator>
      </NavigationContainer>
    </CheckInProvider>
    </AuthProvider>
  );
}