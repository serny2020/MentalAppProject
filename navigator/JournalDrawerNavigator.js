import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, StyleSheet } from "react-native";

// Import screens
import SettingsScreen from "../screens/playground/routine/SettingsScreen";
import Journal from "../screens/home/Journal";
import JournalSummaryScreen from "../screens/home/JournalSummaryScreen";
import { useCallback } from "react";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Screen Component with Focus Effect
const JournalWithFocusEffect = () => {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      navigation.closeDrawer(); // Close the drawer when this screen gains focus
    }, [navigation])
  );

  return <Journal />;
};

// Nested Stack Navigator for Settings
const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Journal">
      <Stack.Screen
        name="Journal"
        component={JournalWithFocusEffect}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

// Custom Drawer Content
const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Directly render JournalSummaryScreen */}
      <JournalSummaryScreen navigation={navigation} />
    </View>
  );
};

// Drawer Navigator
const JournalDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="SettingsStack"
      screenOptions={{
        drawerType: 'front', // Ensures the drawer slides over the screen
        drawerStyle: {
          backgroundColor: "#f7ffcc", // Background color of the drawer
        },
        headerStyle: {
          backgroundColor: "#f7ffcc", // Header background color
          shadowColor: "transparent", // Remove shadow if needed
        },
        headerTintColor: "#4f4f4f", // Header text color
        headerTitleAlign: "left", // Align title to the left
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: "bold",
          color: "#4f4f4f", // Customize header title color
        },
      }}
    >
      <Drawer.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          title: "", // Title in the drawer
          drawerLabel: "Settings",
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
  },
});

export default JournalDrawerNavigator;
