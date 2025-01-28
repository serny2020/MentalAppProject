import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const StepTwoScreen = ({ navigation }) => {
  const [task, setTask] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.stepText}>Step Two:</Text>
        <TouchableOpacity onPress={() => navigation.navigate("StepThreeScreen")}>
          <Text style={styles.headerText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Instructions */}
      <Text style={styles.instructions}>
        <Text style={styles.bold}>PICK</Text> the Nov.1 task from your priorities
      </Text>

      {/* Input for the selected task */}
      <TextInput
        style={styles.input}
        placeholder="e.g. Give a class presentation"
        placeholderTextColor="#A9A9A9"
        value={task}
        onChangeText={(value) => setTask(value)}
      />

      {/* Identify section */}
      <View style={styles.identifySection}>
        <Text style={styles.identifyTitle}>Identify:</Text>
        <Text style={styles.identifyText}>
          Ask yourself, “Can I finish this task all at once easily? Is this task too
          complicated and overwhelming to manage?”
        </Text>
      </View>

      {/* Conclusion */}
      <Text style={styles.conclusionText}>
        If you can do this task easily, just do it now! Otherwise, click on{" "}
        <Text style={styles.bold}>“Next”</Text> to go to step three:)
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
    textAlign: "center",
  },
  instructions: {
    fontSize: 16,
    marginBottom: 16,
    color: "#000",
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
  },
  identifySection: {
    marginBottom: 16,
  },
  identifyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  identifyText: {
    fontSize: 16,
    color: "#000",
  },
  conclusionText: {
    fontSize: 16,
    textAlign: "center",
    color: "#000",
  },
});

export default StepTwoScreen;
