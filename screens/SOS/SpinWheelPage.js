import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import SpinWheel from "../../components/SpinWheel";

const SpinWheelPage = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelection = (selected) => {
    console.log(selected.title);
    setSelectedOption(selected.title);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.headerText}>Confirm</Text>
        </TouchableOpacity>
      </View>

      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Spin the wheel to pick one!</Text>
      </View>

      {/* Selected Option Section */}
      <View style={styles.selectedOptionContainer}>
        <Image
          // source={require("../../../assets/image/icon/selected.png")} // Replace with your icon file
          source={require("../../assets/image/icon/selected.png")} // Replace with your icon file
          style={styles.selectedOptionIcon}
        />
        <View style={styles.textBackground}>
          <Text style={styles.spinnerText}>
            {selectedOption ? `${selectedOption}` : "Tap to Spin"}
          </Text>
        </View>
      </View>

      {/* Spinner Wheel */}
      <View style={styles.spinnerSection}>
        <SpinWheel onSelection={handleSelection} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDD0", // Softer yellow
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 14,
    color: "#f39c12",
  },
  titleContainer: {
    width: "100%", // Make it span the full width
    alignItems: "center", // Center horizontally
    marginBottom: 20, // Add space below the title
    zIndex: 1, // Ensure it appears above other elements
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  selectedOptionContainer: {
    flexDirection: "row", // Align icon and text horizontally
    alignItems: "center", // Vertically align the icon and text
    backgroundColor: "#FFF", // Optional: light background for the container
    borderWidth: 1, // Optional: border for the container
    borderColor: "#E0E0E0", // Optional: light gray border color
    padding: 10, // Padding inside the container
    borderRadius: 15, // Rounded corners for the container
    marginVertical: 20, // Spacing between this section and others
    shadowColor: "#000", // Shadow for a slight elevation
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    justifyContent: "center",
  },
  selectedOptionIcon: {
    width: 40, // Slightly larger icon size
    height: 40,
    marginRight: 15, // Space between the icon and the text
  },
  textBackground: {
    backgroundColor: "#FFD700", // Background color for the text box
    paddingVertical: 8, // Padding inside the text box
    paddingHorizontal: 15, // Padding inside the text box
    borderRadius: 10, // Rounded corners for the text box
    justifyContent: "center", // Center the text inside the background
    shadowColor: "#000", // Optional: shadow for the text box
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  spinnerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000", // Text color
    textAlign: "center", // Center the text inside the background
  },
  spinnerSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
  },
});

export default SpinWheelPage;
