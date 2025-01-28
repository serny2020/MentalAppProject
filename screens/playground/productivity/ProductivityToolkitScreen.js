import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProductivityToolkitScreen = ({ navigation }) => {

  const handleInterested = () => {
    // Handle the "Interested" action
    console.log("User selected 'Interested'");
    navigation.navigate("ToolkitDetails"); // Navigate to the next screen
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ThreeKsTechniqueScreen")}>
          <Text style={styles.headerText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <Text style={styles.title}>
        We have a <Text style={styles.bold}>productivity management toolkit</Text> for you,
        do you want to turn your helpful thoughts into actions?
      </Text>
      <Image
        source={require("../../../assets/image/productivity/prod_home.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.notInterestedButton]}
          onPress={() => navigation.goBack()}        >
          <Text style={styles.buttonText}>Not interested</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.interestedButton]}
          onPress={() => navigation.navigate("ThreeKsTechniqueScreen")}
        >
          <Text style={styles.buttonText}>Interested</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9FBC0", // Light green background
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    position: "absolute",
    top: 40,
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
  title: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
    color: "#000",
  },
  bold: {
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 30,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  notInterestedButton: {
    backgroundColor: "#FF6961", // Red
  },
  interestedButton: {
    backgroundColor: "#77DD77", // Green
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default ProductivityToolkitScreen;
