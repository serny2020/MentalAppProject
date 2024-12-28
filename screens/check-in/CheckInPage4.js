import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useCheckInContext } from "../../context/CheckInContext";

const CheckInPage4 = ({ navigation }) => {
  // const { moods, emotions, causes } = useCheckInContext(); // Get data from context
  const { checkInData, updateCheckInData } = useCheckInContext(); // Get data from context
  const { moods, emotions, causes } = checkInData; // Extract data from checkInData
  const [selectedCauses, setSelectedCauses] = useState([]);
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [details, setDetails] = useState("");

  const toggleSelection = (id, selectedItems, setSelectedItems) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Debugging: Log the context data
  useEffect(() => {
    console.log("Moods from context:", moods); // Dictionary
    console.log("Causes from context:", causes); // List of dictionaries
    console.log("Emotions from context:", emotions); // List of dictionaries
  }, [moods, causes, emotions]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.skip}>{"⬅️"}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.skip}>X</Text>
        </TouchableOpacity>
      </View>

      {/* Question Text */}
      <Text style={styles.questionText}>Tell us more about what happened:</Text>

      {/* Mood Section */}
      <Text style={styles.subQuestionText}>I feel</Text>
      <View style={styles.moodContainer}>
        {moods && (
          <TouchableOpacity style={styles.moodButton}>
            <Text style={styles.moodEmoji}>
              {moods.emoji} {moods.label}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Causes Section */}
      <Text style={styles.subQuestionText}>Because of</Text>
      <View style={styles.moodContainer}>
        {causes.map((cause) => (
          <TouchableOpacity
            key={cause.id}
            style={[
              styles.moodButton,
              selectedCauses.includes(cause.id) && styles.selectedMoodButton,
            ]}
            onPress={() => toggleSelection(cause.id, selectedCauses, setSelectedCauses)}
          >
            <Text style={styles.moodEmoji}>{cause.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Emotions Section */}
      <Text style={styles.subQuestionText}>My emotions</Text>
      <View style={styles.moodContainer}>
        {emotions.map((emotion) => (
          <TouchableOpacity
            key={emotion.id}
            style={[
              styles.moodButton,
              selectedEmotions.includes(emotion.id) && styles.selectedMoodButton,
            ]}
            onPress={() => toggleSelection(emotion.id, selectedEmotions, setSelectedEmotions)}
          >
            <Text style={styles.moodEmoji}>
              {emotion.emoji} {emotion.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Text Input */}
      <Text style={styles.subQuestionText}>Cause in detail:</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Write here..."
        placeholderTextColor="#9b59b6"
        value={details}
        onChangeText={(text) => setDetails(text)}
        multiline
      />

      {/* Next Button */}
      <TouchableOpacity
        style={[
          styles.nextButton,
          details ? styles.nextButtonActive : styles.nextButtonInactive,
        ]}
        disabled={!details}
        onPress={() => {
          // Navigate to the next page or handle the next logic
          console.log("Selected Causes:", selectedCauses);
          console.log("Selected Emotions:", selectedEmotions);
          console.log("Details:", details);
        }}
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
    fontSize: 16,
    color: "#9b59b6",
  },
  questionText: {
    fontSize: 22,
    color: "#9b59b6",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  subQuestionText: {
    fontSize: 18,
    color: "#9b59b6",
    marginBottom: 10,
    fontWeight: "500",
  },
  moodContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  moodButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    margin: 5,
    backgroundColor: "#e5e5e5",
    borderWidth: 1,
    borderColor: "#9b59b6",
  },
  selectedMoodButton: {
    backgroundColor: "#b7ffbf",
    borderWidth: 2,
    borderColor: "#9b59b6",
  },
  moodEmoji: {
    fontSize: 16,
    color: "#9b59b6",
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

export default CheckInPage4;
