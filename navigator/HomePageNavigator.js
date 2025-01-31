import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Routine from '../screens/home/Routine';
import Journal from '../screens/home/Journal';
import Playground from '../screens/home/Playground';
import Discover from '../screens/home/Discover';
import SOS from '../screens/home/SOS';
import PlaygroundNavigator from './PlaygroundNavigator';
import JournalDrawerNavigator from './JournalDrawerNavigator';
import JournalSideMenu from './JournalSideMenu';
import DiscoveryNavigator from './DiscoverNavigator';

const Tab = createBottomTabNavigator();

const HomePageNavigator = () => {
  return (
    // <Tab.Navigator
    //   screenOptions={({ route }) => ({
    //     tabBarIcon: ({ color, size }) => {
    //       let iconName;

    //       if (route.name === 'Routine') {
    //         iconName = 'ellipsis-horizontal-circle-outline';
    //       } else if (route.name === 'Journal') {
    //         iconName = 'book-outline';
    //       } else if (route.name === 'Playground') {
    //         iconName = 'rocket-outline';
    //       } else if (route.name === 'Discover') {
    //         iconName = 'search-outline';
    //       } else if (route.name === 'SOS') {
    //         iconName = 'alert-circle-outline';
    //       }

    //       return <Ionicons name={iconName} size={size} color={color} />;
    //     },
    //     tabBarActiveTintColor: '#9b59b6', // Active tab icon and text color
    //     tabBarInactiveTintColor: '#9b59b6', // Inactive tab icon and text color
    //     tabBarStyle: {
    //       backgroundColor: '#f7ffcc', // Background color for the tab bar
    //       borderTopColor: '#e5e5e5', // Optional border for better visuals
    //     },
    //     headerShown: false, // Hide the header for each tab screen
    //   })}
    // >
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconSource;
        let isMiddleTab = route.name === "Playground"; // Middle tab condition

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
          <View
            style={[
              styles.iconContainer,
              isMiddleTab && styles.middleIconContainer, // Apply larger size to middle tab
            ]}
          >
            <Image
              source={iconSource}
              style={[
                styles.iconImage,
                isMiddleTab && styles.middleIconImage, // Increase size for middle tab
              ]}
            />
          </View>
        );
      },
      tabBarActiveTintColor: "#9b59b6",
      tabBarInactiveTintColor: "#9b59b6",
      tabBarStyle: styles.tabBarStyle, // Apply the taller tab bar style
      tabBarLabelStyle: styles.tabBarLabelStyle, 
      headerShown: false,
    })}
  >
    <Tab.Screen name="Routine" component={Routine} />
      {/* <Tab.Screen name="Journal" component={Journal} /> */}
      <Tab.Screen name="Journal" component={JournalDrawerNavigator} />
      {/* <Tab.Screen name="Journal" component={JournalSideMenu} /> */}
      <Tab.Screen name="Playground" component={Playground} />
      {/* <Tab.Screen name="Discover" component={Discover} /> */}
      <Tab.Screen name="Discover" component={DiscoveryNavigator} />
      <Tab.Screen name="SOS" component={SOS} />
    </Tab.Navigator>
  );
};

const styles = {
  tabBarStyle: {
    backgroundColor: "#f7ffcc",
    borderTopColor: "gray",
    height: 95, // ⬆️ Makes the tab bar taller
    paddingBottom: 15, // Ensures icons are centered
    paddingTop: 10, // Adjusts spacing for alignment
  },
  tabBarLabelStyle: {
    fontSize: 12, // Adjust font size if needed
    marginTop: 15, // Pushes text lower
    paddingBottom: 5, // Adds extra spacing below
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25, // Makes it a perfect circle
    backgroundColor: "#e5e5e5", // Gray circle beneath the image
    justifyContent: "center",
    alignItems: "center",
  },
  middleIconContainer: {
    width: 65, // Larger circle for middle tab
    height: 65,
    borderRadius: 32.5, // Adjust for perfect roundness
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  middleIconImage: {
    width: 45, // Larger image for middle tab
    height: 45,
  },
};


export default HomePageNavigator;
