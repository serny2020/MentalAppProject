import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ConfirmAffirmationScreen = ({ navigation }) => {
  const handleNoPress = () => {
    // Handle the "NO" button press
    console.log("User selected NO");
    navigation.goBack();
  };

  const handleYesPress = () => {
    // Handle the "YES" button press
    console.log("User selected YES");
    // Navigate to the Affirmation Collection or any next screen
    navigation.navigate("AffirmationCollection");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.headerText}>Exit</Text>
        </TouchableOpacity>
      </View>

      {/* Confirmation Text */}
      <Text style={styles.confirmationText}>
        Would you like to add the 6 selected Affirmation Images to your{" "}
        <Text style={styles.boldText}>Affirmation Collection</Text>?
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.noButton]}
          onPress={handleNoPress}
        >
          <Text style={styles.buttonText}>NO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.yesButton]}
          onPress={handleYesPress}
        >
          <Text style={styles.buttonText}>YES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8D7DA", // Light pink background
    paddingHorizontal: 16,
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  confirmationText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
    color: "#000",
  },
  boldText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  noButton: {
    backgroundColor: "#FF6961", // Red
  },
  yesButton: {
    backgroundColor: "#77DD77", // Green
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default ConfirmAffirmationScreen;
