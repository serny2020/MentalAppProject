import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const AddAffirmationImages = ({ navigation }) => {

  const handleGuidedAffirmation = () => {
    navigation.navigate("GuidedAffirmation");
  };

  const handleWriteAffirmation = () => {
    navigation.navigate("WriteAffirmation");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Done", "Changes saved!")}>
          <Text style={styles.headerText}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>You have two options to Add Affirmation Images</Text>

      {/* Option 1 */}
      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>Option 1:</Text>
        <Text style={styles.optionDescription}>
          Add up to 6 of your favorite affirmation quotes from our database:
        </Text>
        <TouchableOpacity style={[styles.button, styles.option1Button]} onPress={() => {navigation.navigate("AffirmationSwipePage")}}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Option 2 */}
      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>Option 2:</Text>
        <Text style={styles.optionDescription}>Build your own affirmation here:</Text>

        {/* Guided Affirmation */}
        <Text style={styles.subOptionTitle}>• Guided Affirmation</Text>
        <TouchableOpacity
          style={[styles.button, styles.option2Button]}
          onPress={handleGuidedAffirmation}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        {/* Write an Affirmation */}
        <Text style={styles.subOptionTitle}>• Write an affirmation for yourself</Text>
        <TouchableOpacity
          style={[styles.button, styles.option3Button]}
          onPress={handleWriteAffirmation}
        >
          <Text style={styles.buttonText}>Add</Text>
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
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F8D7DA",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
    color: "#000",
  },
  optionContainer: {
    marginBottom: 24,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#000",
  },
  optionDescription: {
    fontSize: 16,
    marginBottom: 16,
    color: "#000",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 24,
  },
  option1Button: {
    backgroundColor: "#D8BFD8", // Light purple
  },
  option2Button: {
    backgroundColor: "#ADD8E6", // Light blue
  },
  option3Button: {
    backgroundColor: "#B9FBC0", // Light green
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  subOptionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
});

export default AddAffirmationImages;
