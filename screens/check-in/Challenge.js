import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCheckInContext } from "../../context/CheckInContext"; // Import context hook

const ChallengeThoughts = ({ navigation }) => {
  const { checkInData, updateCheckInData } = useCheckInContext(); // Get data from context
  const [challenge, setChallenge] = useState("");

  const handleNext = () => {
    // Update context with new challenge thoughts
    updateCheckInData("challenges", challenge);

    // Navigate to the next page
    navigation.navigate("Reframe");
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={32} color="#9b59b6" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Question Section */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          How can you challenge these unhelpful thoughts?
        </Text>
        <TouchableOpacity style={styles.questionMarkButton} onPress = {() => navigation.navigate("ChallengeTips")}>
          <Text style={styles.questionMarkText}>?</Text>
        </TouchableOpacity>
      </View>

      {/* Input Section */}
      <TextInput
        style={styles.inputBox}
        placeholder="Type your thoughts here..."
        placeholderTextColor="#9b59b6"
        multiline={true}
        value={challenge}
        onChangeText={setChallenge}
      />

      {/* Next Button */}
      <TouchableOpacity
        style={[
          styles.nextButton,
          styles.nextButtonActive,
        ]}
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  skip: {
    fontSize: 24,
    color: "#9b59b6",
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  questionText: {
    fontSize: 22,
    color: "#9b59b6",
    fontWeight: "bold",
  },
  questionMarkButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#9b59b6",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  questionMarkText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#e5e5e5",
    color: "#9b59b6",
    minHeight: 100,
    marginBottom: 20,
    textAlignVertical: "top",
  },
  nextButton: {
    width: "100%",
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    bottom: 80,
    marginTop: "auto",
  },
  nextButtonActive: {
    backgroundColor: "#9b59b6",
  },
  nextButtonInactive: {
    backgroundColor: "#d3d3d3",
  },
  nextButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ChallengeThoughts;
