import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Discover from "../screens/home/Discover";
import CommunityNavigator from "./CommunityNavigator";

const Tab = createMaterialTopTabNavigator();

const DiscoveryNavigator = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#f7ffcc" }, // Ensure no margin issue
          tabBarIndicatorStyle: { backgroundColor: "black", height: 2 },
          tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
        }}
      >
        <Tab.Screen name="Select" component={Discover} />
        <Tab.Screen name="Community" component={CommunityNavigator} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7ffcc", // Fill entire screen with this color
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7ffcc", // Ensure consistent background
  },
});

export default DiscoveryNavigator;
