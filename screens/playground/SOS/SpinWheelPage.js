import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SpinWheel from "../../../components/SpinWheel"; // Adjust the path as needed
import SpinSpinWheelTestWheel from "../../../components/SpinWheelTest"; // Adjust the path as needed

const SpinWheelPage = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelection = (selected) => {
    console.log(selectedOption)
    setSelectedOption(selected.label);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Spin the wheel to pick one!</Text>
        <TouchableOpacity>
          <Text style={styles.headerText}>Confirm</Text>
        </TouchableOpacity>
      </View>

      {/* Selected Option */}
        {/* <View style={styles.selectedOption}>
          <Text style={styles.spinnerText}>
            {selectedOption ? `Selected: ${selectedOption}` : "Your Loved Ones"}
          </Text>
        </View> */}

      {/* Spinner Wheel */}
      <View style={styles.spinnerSection}>
        <SpinWheel onSelection={handleSelection} />
        {/* <SpinSpinWheelTestWheel /> */}
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
      fontSize: 14, // Slightly smaller font for Back/Confirm
      color: "#f39c12",
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#000",
      flex: 1,
      textAlign: "center",
      marginHorizontal: 10, // Padding for balance
    },
    selectedOption: {
      alignItems: "center",
      marginBottom: 20,
      paddingVertical: 10,
      backgroundColor: "#FFD700",
      borderRadius: 10,
      shadowColor: "#000", // Added shadow for better visibility
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    spinnerText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#000",
    },
    spinnerSection: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    //   backgroundColor: "#f0f4f8", // Light gray for contrast
      borderRadius: 10,
      padding: 10,
    },
    spinButton: {
      position: "absolute",
      bottom: 20,
      width: 70, // Adjusted size for better centering
      height: 70,
      backgroundColor: "#000",
      borderRadius: 35,
      alignItems: "center",
      justifyContent: "center",
    },
    spinButtonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
    },
  });
  
export default SpinWheelPage;
