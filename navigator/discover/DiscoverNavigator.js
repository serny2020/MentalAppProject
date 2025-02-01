import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Discover from "../../screens/home/Discover";
import CommunityNavigator from "./CommunityNavigator";
import SOS from "../../screens/home/SOS";
// import NotificationsPage from "../screens/discover/community/Notifications";

const Tab = createMaterialTopTabNavigator();

const DiscoverNavigator = ({navigation}) => {
  const [currentTab, setCurrentTab] = useState("Select"); // Track current tab

  const ErrorScreen = () => (
    <View style={styles.screen}>
      <Text>Shouldn't display</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top Right Custom Buttons */}
        <View style={styles.topRightContainer}>
          {/* "Select" tab - Single Image Button moved to right */}
          {currentTab === "Select" && (
            <TouchableOpacity
              style={[styles.button, styles.rightAlignedButton]}
              onPress={() => console.log("Search button pressed")}
            >
              <Image
                source={require("../../assets/image/discover/communitySearch.png")}
                style={styles.imageButton}
              />
            </TouchableOpacity>
          )}

          {/* "Community" tab - Two Independent Image Buttons */}
          {currentTab === "Community" && (
            <View style={styles.imageContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Notifications")} 
              >
                <Image
                  source={require("../../assets/image/discover/communityBell.png")}
                  style={styles.imageButton}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => console.log("Second settings button pressed")}
              >
                <Image
                  source={require("../../assets/image/discover/communitySearch.png")}
                  style={styles.imageButton}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Tab Navigator */}
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: "#f7ffcc" },
            tabBarIndicatorStyle: { backgroundColor: "black", height: 2 },
            tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
          }}
          screenListeners={{
            state: (e) => {
              const index = e.data.state.index;
              const routeName = e.data.state.routeNames[index];
              setCurrentTab(routeName); // Update current tab when changed
            },
          }}
        >
          <Tab.Screen name="Select" component={Discover} />
          <Tab.Screen name="Community" component={CommunityNavigator} />
          <Tab.Screen
            name=" "
            component={ErrorScreen}
            listeners={{
              tabPress: (e) => {
                e.preventDefault(); // Stops tab navigation
                console.log("Tab switching is disabled");
              },
            }}
          />
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
    flexDirection: "row", // Ensures images align in a row
    top: 9, // Adjust to fit inside the tab bar
    right: 12, // Align to the right
    zIndex: 10, // Ensure it appears above the tab bar
    width: 120, // Set a specific width
    height: 50, // Set a specific height
  },
  rightAlignedButton: {
    marginLeft: "auto", // Pushes the button to the right
  },
  imageContainer: {
    flexDirection: "row",
    gap: 23,
    width: "100%",
  },
  button: {
    backgroundColor: "#f7ffcc", // Black background
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff", // White text
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default DiscoverNavigator;
