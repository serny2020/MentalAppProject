import React from "react";
import { View, Image, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Routine from "../screens/home/Routine";
import Journal from "../screens/home/Journal";
import Playground from "../screens/home/Playground";
import Discover from "../screens/home/Discover";
import SOS from "../screens/home/SOS";
import PlaygroundNavigator from "./playground/PlaygroundNavigator";
import JournalDrawerNavigator from "./journal/JournalDrawerNavigator";
import JournalSideMenu from "./journal/JournalSideMenu";
import DiscoveryNavigator from "./discover/DiscoverNavigator";
import NotificationsPage from "../screens/discover/community/NotificationsPage";

const Tab = createBottomTabNavigator();

const HomePageNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;
          let isMiddleTab = route.name === "Playground"; // Check if it's the middle tab

          if (route.name === "Routine") {
            iconSource = require("../assets/image/icon/routine.png");
          } else if (route.name === "Journal") {
            iconSource = require("../assets/image/icon/journal.png");
          } else if (route.name === "Playground") {
            iconSource = require("../assets/image/icon/playground.png"); // Middle tab
          } else if (route.name === "Discover") {
            iconSource = require("../assets/image/icon/discover.png");
          } else if (route.name === "SOS") {
            iconSource = require("../assets/image/icon/sos.png");
          }

          return (
            <View style={styles.iconContainer}>
              {/* Highlighted Background - Separate from Icon */}
              {focused && (
                <View
                  style={
                    isMiddleTab
                      ? styles.middleHighlightedTab
                      : styles.highlightedTab
                  }
                />
              )}
              {/* Icon on Top */}
              <View
                style={[
                  styles.innerCircle,
                  ,
                  isMiddleTab && styles.middleIconContainer,
                ]}
              >
                <Image
                  source={iconSource}
                  style={[
                    styles.iconImage,
                    isMiddleTab && styles.middleIconImage, // Adjust size for middle tab
                  ]}
                />
              </View>
              {/* Label for Selected Tab */}
              {focused}
              {/* {focused && <Text style={styles.tabLabel}>{route.name}</Text>} */}
            </View>
          );
        },
        tabBarActiveTintColor: "#9b59b6",
        tabBarInactiveTintColor: "#9b59b6",
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Routine" component={Routine} />
      <Tab.Screen name="Journal" component={JournalDrawerNavigator} />
      <Tab.Screen name="Playground" component={Playground} />
      <Tab.Screen name="Discover" component={DiscoveryNavigator} />
      <Tab.Screen name="SOS" component={SOS} />
    </Tab.Navigator>
  );
};

const styles = {
  tabBarStyle: {
    backgroundColor: "#f7ffcc",
    borderTopColor: "gray",
    height: 100, // ⬆️ Makes the tab bar taller
    paddingBottom: 15, // Ensures icons are centered
    paddingTop: 10, // Adjusts spacing for alignment
  },
  tabBarLabelStyle: {
    fontSize: 12, // Adjust font size if needed
    marginTop: 15, // Pushes text lower
    paddingBottom: 5, // Adds extra spacing below
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    width: 60,
    height: 60,
    backgroundColor: "#d3d3d3", // Gray circle background
    borderRadius: 30, // Ensures circular shape
    alignItems: "center",
    justifyContent: "center",
  },
  middleIconContainer: {
    width: 70, // Larger circle for middle tab
    height: 70,
    borderRadius: 32.5, // Adjust for perfect roundness
    bottom: 5,
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  middleIconImage: {
    width: 50, // Larger image for middle tab
    height: 50,
  },

  highlightedTab: {
    position: "absolute",
    width: 70,
    height: 75,
    backgroundColor: "#d4f08a", // Light green highlight
    borderRadius: 15, // ⬅️ More square
    bottom: -25, // ⬅️ Moves just the highlight lower
  },
  middleHighlightedTab: {
    position: "absolute",
    width: 85,
    height: 90,
    backgroundColor: "#d4f08a",
    borderRadius: 18, // Slightly more rounded for the middle tab
    bottom: -25, // Moves just the middle highlight lower
  },
};

export default HomePageNavigator;
