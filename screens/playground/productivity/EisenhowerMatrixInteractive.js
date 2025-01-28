import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MatrixQuadrant from "../../../components/letgo/MatrixQuadrant";

const EisenhowerMatrixInteractive = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Next pressed!")}>
          <Text style={styles.headerText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Title and Description */}
      <Text style={styles.title}>
        <Text style={styles.boldText}>Categorize</Text> all the things you have
        to do in the <Text style={styles.boldText}>Eisenhower matrix</Text>,
        start to do things that are both urgent and important to you (Quadrant
        I). Then follow this order to finish the rest of your tasks:{" "}
        <Text style={styles.boldText}>1 → 2 → 3 → (4)</Text>
        <Text>{"      "}</Text>
        <Ionicons
          name="help-circle-outline"
          size={20}
          color="#0000FF" // Blue color for the icon
          style={styles.questionMarkIcon}
          onPress={() => navigation.navigate("EisenhowerMatrix")} // Replace "HelpPage" with the actual name of your page
        />
      </Text>

      {/* Matrix */}
      <View style={styles.matrixContainer}>
        <MatrixQuadrant />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9FBC0",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    color: "#000",
    // marginBottom: 10,
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  matrixContainer: {
    flex: 1,
    position: "relative",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 25,
  },
});

export default EisenhowerMatrixInteractive;
