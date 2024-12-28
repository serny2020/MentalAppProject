import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CheckInContext } from "../../context/CheckInContext";
import { OtherPageInput } from "../../util/OtherPageInput";
import { OtherPageInputFormated } from "../../util/OtherPageInputFormated";

const CheckInPage3 = ({ navigation }) => {
  const { updateCheckInData } = useContext(CheckInContext);
  const [selectedCauses, setSelectedCauses] = useState([]);

  const causes = [
    { id: 1, label: "work" },
    { id: 2, label: "family" },
    { id: 3, label: "study" },
    { id: 4, label: "job" },
    { id: 5, label: "money" },
    { id: 6, label: "health" },
    { id: 7, label: "partner" },
    { id: 8, label: "pets" },
    { id: 9, label: "weather" },
    { id: 10, label: "friends" },
    { id: 11, label: "sleep" },
    { id: 12, label: "food" },
    { id: "other", label: "other" },
  ];

  const additionalCauses = [
    { id: 13, label: "trauma" },
    { id: 14, label: "substance" },
    { id: 15, label: "music" },
    { id: 16, label: "parenting" },
  ];

  const toggleCause = (causeId) => {
    setSelectedCauses((prev) =>
      prev.includes(causeId)
        ? prev.filter((id) => id !== causeId) // Remove if already selected
        : [...prev, causeId] // Add if not selected
    );
  };

  const handleOtherSelection = (updatedSelections) => {
    // Merge "Other" selections with existing causes
    // const updatedCauseIds = updatedSelections.map((cause) => cause.id);
    // setSelectedCauses((prev) => [
    //   ...prev.filter((id) => !additionalCauses.some((cause) => cause.id === id)),
    //   ...updatedCauseIds,
    // ]);

    // console.log("Updated Causes after OtherPage:", updatedSelections);

    setSelectedCauses(() => {
        // Extract IDs of selected items from the child
        const selectedIdsFromChild = updatedSelections.map((emotion) => emotion.id);
    
        console.log("Updated selections from child:", selectedIdsFromChild);
    
        // Return the exact state of the child selections
        return selectedIdsFromChild; // Reflect the exact state of the child
      });
  };

//   const handleOpenOtherPage = () => {

//     navigation.navigate("OtherPage", {
//       existingEmotions: causes, // Existing causes (used generically)
//       additionalEmotions: additionalCauses, // Additional options
//       onSelect: handleOtherSelection, // Callback for selections
//       initialSelectedEmotionsId: selectedCauses, // Pass current selection
//       showInputBox: true,
//     });
//   };
  const handleOpenOtherPage = () => {

    navigation.navigate("OtherPageInputFormated");
  };

  const handleNext = () => {
    const selectedCauseData = causes
      .filter((cause) => selectedCauses.includes(cause.id))
      .concat(
        additionalCauses.filter((cause) => selectedCauses.includes(cause.id))
      );

    console.log("Selected Causes:", selectedCauseData);

    // Update context
    updateCheckInData("causes", selectedCauseData);

    // Navigate to the next page
    navigation.navigate("CheckInPage4");
  };

  useEffect(() => {
    console.log("Selected Causes:", selectedCauses);
  }, [selectedCauses]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.skip}>{"⬅️"}</Text>
        </TouchableOpacity>
        <Text style={styles.skip} onPress={() => navigation.navigate("Home")}>
          {"❌"}
        </Text>
      </View>

      {/* Title */}
      <View style={styles.centeredTimeContainer}>
        <Text style={styles.questionText}>What's the major cause of that?</Text>
      </View>

      {/* Causes Grid */}
      <View style={styles.moodContainer}>
        {causes.map((cause) =>
          cause.id === "other" ? (
            <TouchableOpacity
              key={cause.id}
              style={styles.moodButton}
              onPress={handleOpenOtherPage}
            >
              <Text style={styles.moodEmoji}>{cause.label}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={cause.id}
              style={[
                styles.moodButton,
                selectedCauses.includes(cause.id) && styles.selectedMoodButton,
              ]}
              onPress={() => toggleCause(cause.id)}
            >
              <Text
                style={[
                  styles.moodEmoji,
                  selectedCauses.includes(cause.id) && styles.selectedMoodLabel,
                ]}
              >
                {cause.label}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>

      {/* Next Button */}

      <TouchableOpacity
  style={[styles.nextButton, styles.nextButtonActive]} // Always active style
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
    fontSize: 16,
    color: "#9b59b6",
    top: 10,
  },
  centeredTimeContainer: {
    alignItems: "center",
    marginVertical: 20,
    marginTop: 80,
  },
  questionText: {
    fontSize: 22,
    color: "#9b59b6",
    fontWeight: "bold",
    marginBottom: 20,
  },
  moodContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  moodButton: {
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 10,
    backgroundColor: "#E5E5E5",
  },
  selectedMoodButton: {
    backgroundColor: "#B7FFBF",
    borderWidth: 2,
    borderColor: "#9b59b6",
  },
  moodEmoji: {
    fontSize: 16,
    color: "#9b59b6",
  },
  selectedMoodLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
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

export default CheckInPage3;
