import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PostsScreen from "../../screens/playground/discover/community/PostsScreen";


// Dummy Screens
// const PostsScreen = () => (
//   <View style={styles.screen}>
//     <Text>Posts Page</Text>
//   </View>
// );

const GroupsScreen = () => (
  <View style={styles.screen}>
    <Text>Groups Page</Text>
  </View>
);

const EventsScreen = () => (
  <View style={styles.screen}>
    <Text>Events Page</Text>
  </View>
);

const Tab = createMaterialTopTabNavigator();

const CommunityNavigator = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#f7ffcc" },
          tabBarIndicatorStyle: { backgroundColor: "black", height: 2 },
          tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
        }}
      >
        <Tab.Screen name="Posts" component={PostsScreen} />
        <Tab.Screen name="Groups" component={GroupsScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
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

export default CommunityNavigator;
