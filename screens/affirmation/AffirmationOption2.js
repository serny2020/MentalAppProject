import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const AffirmationOption2 = ({ navigation }) => {
  const handleAdd = (type) => {
    Alert.alert(`Add ${type}`, `You selected to add ${type}.`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Affirmation Images</Text>
        <TouchableOpacity onPress={() => Alert.alert("Done", "Affirmation saved!")}>
          <Text style={styles.headerText}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.optionTitle}>Two Options:</Text>
        <Text style={styles.subtitle}>Build your own affirmation here:</Text>

        {/* Guided Affirmation */}
        <Text style={styles.label}>• Guided Affirmation</Text>
        <TouchableOpacity
          style={[styles.addBox, { backgroundColor: "#ADD8E6" }]} // Light blue box
          onPress={() => navigation.navigate("GuidedAffirmation")}
        >
          <Text style={styles.addText}>click to add</Text>
        </TouchableOpacity>

        {/* Write Your Own Affirmation */}
        <Text style={styles.label}>• Write an affirmation for yourself</Text>
        <TouchableOpacity
          style={[styles.addBox, { backgroundColor: "#B9FBC0" }]} // Light green box
          onPress={() => navigation.navigate("WriteAffirmation")}
        >
          <Text style={styles.addText}>click to add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8D7DA", // Light pink background
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
    textDecorationLine: "underline",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  content: {
    flex: 1,
    marginTop: 16,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  addBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    borderRadius: 8,
    marginBottom: 24,
  },
  addText: {
    fontSize: 16,
    color: "#000",
  },
});

export default AffirmationOption2;
