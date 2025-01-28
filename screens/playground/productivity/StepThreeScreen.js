import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const StepThreeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.stepText}>Step Three:</Text>
        <TouchableOpacity onPress={() => navigation.navigate("NextStep")}>
          <Text style={styles.headerText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Instructions */}
      <Text style={styles.mainInstruction}>
        <Text style={styles.bold}>BREAK</Text> it into manageable pieces
      </Text>
      <Text style={styles.subInstruction}>
        Try to draw a <Text style={styles.bold}>mind map</Text> below or on your paper!
      </Text>

      {/* Mind Map */}
      <View style={styles.mindMapContainer}>
        <View style={styles.mindMapNode}>
          <Text style={styles.mindMapText}>Mini task03</Text>
        </View>
        <View style={styles.mindMapNode}>
          <Text style={styles.mindMapText}>Mini task01</Text>
        </View>
        <View style={styles.centralNode}>
          <Text style={styles.mindMapText}>your task</Text>
        </View>
        <View style={styles.mindMapNode}>
          <Text style={styles.mindMapText}>Mini task02</Text>
        </View>
        <View style={styles.mindMapNode}>
          <Text style={styles.mindMapText}>Mini task03</Text>
        </View>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        Still confused how to do this? Don’t worry, check out this example we provided for you!{" "}
        <TouchableOpacity onPress={() => navigation.navigate("ExampleScreen")}>
          <Text style={styles.arrowText}>➔</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9FBC0",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  stepText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mainInstruction: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 8,
    color: "#000",
  },
  bold: {
    fontWeight: "bold",
  },
  subInstruction: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
    color: "#000",
  },
  mindMapContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  mindMapNode: {
    backgroundColor: "#E0E0E0",
    padding: 12,
    borderRadius: 20,
    position: "absolute",
  },
  centralNode: {
    backgroundColor: "#E0E0E0",
    padding: 20,
    borderRadius: 40,
    position: "absolute",
  },
  mindMapText: {
    fontSize: 14,
    textAlign: "center",
    color: "#A9A9A9",
  },
  footerText: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
    marginTop: 16,
  },
  arrowText: {
    fontSize: 18,
    color: "#FF00FF",
  },
});

export default StepThreeScreen;
