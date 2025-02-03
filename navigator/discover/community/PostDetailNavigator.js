import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const CommentsScreen = () => (
  <View style={styles.screen}>
    <Text>Comments Page</Text>
  </View>
);

const LovesScreen = () => (
  <View style={styles.screen}>
    <Text>Loves Page</Text>
  </View>
);

const HugsScreen = () => (
  <View style={styles.screen}>
    <Text>Hugs Page</Text>
  </View>
);

const Tab = createMaterialTopTabNavigator();

const PostDetailNavigator = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#f7ffcc" },
          tabBarIndicatorStyle: { backgroundColor: "black", height: 2 },
          tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
        }}
      >
        <Tab.Screen name="Comments" component={CommentsScreen} />
        <Tab.Screen name="Loves" component={LovesScreen} />
        <Tab.Screen name="Hugs" component={HugsScreen} />
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

export default PostDetailNavigator;
