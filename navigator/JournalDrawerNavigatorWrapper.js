import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, StyleSheet } from "react-native";


// Import screens
import SettingsScreen from "../screens/playground/routine/SettingsScreen";
import Journal from "../screens/home/Journal";
import JournalSummaryScreen from "../screens/home/JournalSummaryScreen";
import HomePageNavigator from "./HomePageNavigator";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Nested Stack Navigator for Settings
const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomePageNavigator">
      {/* <Stack.Screen
        name="Journal"
        component={Journal}
        options={{ headerShown: true }}
      /> */}
      <Stack.Screen
        name="HomePageNavigator"
        component={HomePageNavigator}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

// Custom Drawer Content to directly render a screen
const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Directly render JournalSummaryScreen */}
      <JournalSummaryScreen navigation={navigation} />
    </View>
  );
};

// Drawer Navigator
const JournalDrawerNavigator = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="SettingsStack"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#f7ffcc", // Background color of the drawer
          // width: 370, // Set the width of the drawer (default is ~240)
        },
        headerStyle: {
          backgroundColor: "#f7ffcc", // Header background color
          shadowColor: "transparent", // Remove shadow if needed
        },
        headerTintColor: "#4f4f4f", // Header text color
        headerTitleAlign: "left", // Align title to the left
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: "bold",
          color: "#4f4f4f", // Customize header title color
        },
      }}
    >
      <Drawer.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: true,
        }}
      />
            {/* <Drawer.Screen
        name="HomePageNavigator"
        component={HomePageNavigator}
        options={{ headerShown: false }}
      /> */}
            {/* <Drawer.Screen
        name="Journal"
        component={Journal}
        options={{ headerShown: false }}
      /> */}


    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
  },
});

export default JournalDrawerNavigator;
