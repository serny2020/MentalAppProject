import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SideMenu from "react-native-side-menu";

// Import screens
import SettingsScreen from "../screens/playground/routine/SettingsScreen";
import Journal from "../screens/home/Journal";
import JournalSummaryScreen from "../screens/home/JournalSummaryScreen";

const Stack = createStackNavigator();

// Nested Stack Navigator for Screens
const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Journal">
      <Stack.Screen
        name="Journal"
        component={Journal}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="JournalSummary"
        component={JournalSummaryScreen}
        options={{
          headerShown: true,
          title: "Journal Summary",
        }}
      />
    </Stack.Navigator>
  );
};

// Custom Side Menu Component
const Menu = ({ navigation, onClose }) => {
  return (
    <View style={styles.menu}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          navigation.navigate("Journal");
          onClose();
        }}
      >
        <Text style={styles.menuText}>Journal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          navigation.navigate("JournalSummary");
          onClose();
        }}
      >
        <Text style={styles.menuText}>Journal Summary</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          navigation.navigate("Settings");
          onClose();
        }}
      >
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

// Main Component with Side Menu
const JournalSideMenuNavigator = ({ navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menu = <Menu navigation={navigation} onClose={closeMenu} />;

  return (
    <SideMenu
      menu={menu}
      isOpen={isMenuOpen}
      onChange={(isOpen) => setIsMenuOpen(isOpen)}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.menuButton}>☰ Open Menu</Text>
        </TouchableOpacity>
        {/* Stack Navigator for main content */}
        <SettingsStack />
      </View>
    </SideMenu>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
  },
  menu: {
    flex: 1,
    backgroundColor: "#f7ffcc",
    padding: 20,
    justifyContent: "center",
  },
  menuItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
  menuText: {
    fontSize: 18,
    color: "#4f4f4f",
  },
  menuButton: {
    fontSize: 24,
    color: "#007AFF",
    padding: 50,
  },
});

export default JournalSideMenuNavigator;
