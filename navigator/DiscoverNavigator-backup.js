import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Discover from "../screens/home/Discover";
import CommunityNavigator from "./CommunityNavigator";

const Tab = createMaterialTopTabNavigator();

const DiscoveryNavigator = () => {
  const [currentTab, setCurrentTab] = useState("Select"); // Track current tab

  const SummaryScreen = () => {
    const currentTab = "Select";

    // Dynamic content based on active tab
    let summaryContent;
    if (currentTab === "Select") {
      summaryContent = "🔍 Showing summary based on Select tab";
    } else if (currentTab === "Community") {
      summaryContent = "👥 Summary for Community tab interactions";
    } else {
      summaryContent = "📊 General Summary";
    }

    return (
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>{summaryContent}</Text>
      </View>
    );
  };

  {
    /* Top Right Custom Buttons */
  }
  <View style={styles.topRightContainer}>
    {currentTab === "Select" && (
      <Pressable
        style={styles.button}
        onPress={() => console.log("Search button pressed")}
      >
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>
    )}
    {currentTab === "Community" && (
      <Pressable
        style={styles.button}
        onPress={() => console.log("Settings button pressed")}
      >
        <Text style={styles.buttonText}>Settings</Text>
      </Pressable>
    )}
  </View>;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top Right Custom Buttons */}
        <View style={styles.topRightContainer}>
          {currentTab === "Select" && (
            <Pressable
              style={styles.button}
              onPress={() => console.log("Search button pressed")}
            >
              <Text style={styles.buttonText}>Search</Text>
            </Pressable>
          )}
          {currentTab === "Community" && (
            <Pressable
              style={styles.button}
              onPress={() => console.log("Settings button pressed")}
            >
              <Text style={styles.buttonText}>Settings</Text>
            </Pressable>
          )}
        </View>

        {/* Tab Navigator */}
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: "#f7ffcc" },
            tabBarIndicatorStyle: { backgroundColor: "black", height: 2 },
            tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
          }}
          screenListeners={({ navigation }) => ({
            tabPress: (e) => {
              const state = navigation.getState();
              const currentTab = state.routes[state.index].name;

              // Disable the Summary tab if Select or Community data is missing
              if (e.target.includes("Summary")) {
                e.preventDefault();
                // alert("Please enter data in Select and Community tabs before accessing Summary.");
              }
            },
          })}
        >
          <Tab.Screen name="Select" component={Discover} />
          <Tab.Screen name="Community" component={CommunityNavigator} />
          <Tab.Screen name="Summary" component={SummaryScreen} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7ffcc",
  },
  container: {
    flex: 1,
    position: "relative", // Needed for absolute positioning
  },
  topRightContainer: {
    position: "absolute",
    top: 10, // Adjust to fit inside the tab bar
    right: 20, // Align to the right
    zIndex: 10, // Ensure it appears above the tab bar
  },
  button: {
    backgroundColor: "#000", // Black background
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff", // White text
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default DiscoveryNavigator;
