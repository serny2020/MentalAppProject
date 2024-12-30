import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Routine from '../screens/home/Routine';
import Journal from '../screens/home/Journal';
import Playground from '../screens/home/Playground';
import Discover from '../screens/home/Discover';
import SOS from '../screens/home/SOS';
import PlaygroundNavigator from './PlaygroundNavigator';

const Tab = createBottomTabNavigator();

const HomePageNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Routine') {
            iconName = 'ellipsis-horizontal-circle-outline';
          } else if (route.name === 'Journal') {
            iconName = 'book-outline';
          } else if (route.name === 'Playground') {
            iconName = 'rocket-outline';
          } else if (route.name === 'Discover') {
            iconName = 'search-outline';
          } else if (route.name === 'SOS') {
            iconName = 'alert-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#9b59b6', // Active tab icon and text color
        tabBarInactiveTintColor: '#9b59b6', // Inactive tab icon and text color
        tabBarStyle: {
          backgroundColor: '#f7ffcc', // Background color for the tab bar
          borderTopColor: '#e5e5e5', // Optional border for better visuals
        },
        headerShown: false, // Hide the header for each tab screen
      })}
    >
      <Tab.Screen name="Routine" component={Routine} />
      <Tab.Screen name="Journal" component={Journal} />
      <Tab.Screen name="Playground" component={Playground} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="SOS" component={SOS} />
    </Tab.Navigator>
  );
};

export default HomePageNavigator;
