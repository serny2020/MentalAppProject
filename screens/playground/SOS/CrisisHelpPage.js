import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CrisisHelpPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>United States of America</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Are You Feeling Overwhelmed?</Text>
        <Image
          source={require("../../../assets/SOS/call.png")} // Replace with your image path
          style={styles.iconImage}
        />
        <Text style={styles.description}>
          If you’re thinking about self-harm or suicide, please call a crisis
          line for immediate support.
        </Text>
        <TouchableOpacity style={styles.callButton} onPress={() => {navigation.navigate("CallPage")}}>
          <Text style={styles.callButtonText}>
            Call Life Threat Emergency Line Now
          </Text>
        </TouchableOpacity>
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>
            Don’t want to call the general Life Threat Emergency Line? No
            problem, we have a list of crisis helplines for you to pick.
          </Text>
          <TouchableOpacity
            onPress={() => console.log("Navigate to helplines list")}
          >
            <Ionicons name="chevron-forward" size={20} color="##000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
    color: "#000",
  },
  mainContent: {
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 80,
  },
  iconImage: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  description: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    marginBottom: 100,
  },
  callButton: {
    backgroundColor: "#a3d977",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  callButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  footerSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    // borderTopWidth: 1,
    // borderTopColor: "#d3d3d3",
  },
  footerText: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
});

export default CrisisHelpPage;
