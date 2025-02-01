import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const CallPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Exit pressed")}>
          <Text style={styles.headerText}>Exit</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.emergencyNumber}>911</Text>
        <Text style={styles.emergencyLabel}>EMERGENCY NUMBER</Text>
        <Image
          source={require("../../assets/SOS/call2.png")} // Replace with your image path
          style={styles.phoneIcon}
        />
        <TouchableOpacity style={styles.callButton} onPress={() => console.log("Call button pressed")}>
          <Text style={styles.callButtonText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc", // Light background color
    paddingHorizontal: 20,
    paddingTop: 50, // Reduced top padding to make header closer to the top
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50, // Reduced spacing between header and main content
  },
  headerText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  mainContent: {
    flex: 1,
    justifyContent: "flex-start", // Aligns closer to the top
    alignItems: "center",
    paddingTop: 30, // Add padding if needed for spacing consistency
  },
  emergencyNumber: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 30, 
  },
  emergencyLabel: {
    fontSize: 20,
    color: "#000",
    marginBottom: 40, // Reduced spacing
  },
  phoneIcon: {
    width: 100,
    height: 100,
    marginBottom: 80, // Reduced spacing
  },
  callButton: {
    backgroundColor: "#a3d977", // Green button background
    width: 80,
    height: 80,
    borderRadius: 40, // Makes it circular
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Adds shadow for Android
  },
  callButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default CallPage;
