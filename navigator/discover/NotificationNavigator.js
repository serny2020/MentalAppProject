import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Dummy Screens for Each Tab
const AllScreen = () => (
  <View style={styles.screen}>
    <Text>All Notifications</Text>
  </View>
);

const CommentsScreen = () => (
  <View style={styles.screen}>
    <Text>Comments</Text>
  </View>
);

const LovesHugsScreen = () => (
  <View style={styles.screen}>
    <Text>Loves & Hugs</Text>
  </View>
);

const FollowersScreen = () => (
  <View style={styles.screen}>
    <Text>New Followers</Text>
  </View>
);

const Tab = createMaterialTopTabNavigator();

const NotificationNavigator = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#f7ffcc" },
          tabBarIndicatorStyle: { backgroundColor: "black", height: 2 },
          tabBarLabelStyle: { fontSize: 14, fontWeight: "bold", textTransform: "none" },
          tabBarScrollEnabled: true, // Enables scrolling if tabs overflow
        }}
      >
        <Tab.Screen name="All" component={AllScreen} />
        <Tab.Screen name="Comments" component={CommentsScreen} />
        <Tab.Screen name="Loves & Hugs" component={LovesHugsScreen} />
        <Tab.Screen name="New Followers" component={FollowersScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7ffcc", // Ensures full background color consistency
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7ffcc",
  },
});

export default NotificationNavigator;
