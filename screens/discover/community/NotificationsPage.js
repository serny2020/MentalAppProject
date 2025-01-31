import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NotificationNavigator from "../../../navigator/NotificationNavigator";

const NotificationsPage = ({ navigation }) => {

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Notifications</Text>
      </View>

      <NotificationNavigator/>
    </View>
  );
};

const getColor = (type) => {
  switch (type) {
    case "alert":
      return "red";
    case "info":
      return "blue";
    case "success":
      return "green";
    default:
      return "black";
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
    padding: 20,
  },
  backButton: {
    padding: 8, // Increases touchable area
  },
  backText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1, // Makes the title take available space
    marginLeft: 60,
  },
  headerRow: {
    flexDirection: "row", // Aligns items horizontally
    alignItems: "center", // Ensures vertical alignment
    justifyContent: "space-between", // Spaces back button & title nicely
    paddingVertical: 10, // Adds padding for better touchability
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  message: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  emptyText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 50,
  },
});

export default NotificationsPage;
