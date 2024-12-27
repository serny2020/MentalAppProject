import { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CheckInContext } from "../../context/CheckInContext";

const CheckInPage1 = ({ navigation }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const { updateCheckInData } = useContext(CheckInContext); // Access context functions

  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Log the updated emotions when state changes for debugging
    console.log("Selected Moods:", selectedMood);
  }, [selectedMood]);

  const moods = [
    { id: 1, emoji: "😢", label: "Sad" },
    { id: 2, emoji: "😟", label: "Worried" },
    { id: 3, emoji: "🙂", label: "Fine" },
    { id: 4, emoji: "😊", label: "Happy" },
    { id: 5, emoji: "😁", label: "Excited" },
  ];

  const handleNext = () => {
    const moodData = selectedMood
      ? moods.find((m) => m.id === selectedMood)
      : []; // Empty array if no mood is selected

    console.log("Selected Mood:", moodData);

    // Update the context with the selected mood or an empty list
    updateCheckInData("mood", selectedMood ? moodData : []);

    // Navigate to the next page
    navigation.navigate("CheckInPage2");
  };

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.skip} onPress={() => navigation.navigate("Home")}>
          ❌
        </Text>
      </View>

      {/* Date and Time */}
      <View style={styles.centeredTimeContainer}>
        <Text style={styles.dateText}>{formattedDate}</Text>
        <Text style={styles.timeText}>{formattedTime}</Text>
      </View>

      {/* Question */}
      <View style={styles.questionSection}>
        <Text style={styles.questionText}>How are you feeling now?</Text>
        <View style={styles.moodContainer}>
          {moods.map((mood) => (
            <TouchableOpacity
              key={mood.id}
              style={[
                styles.moodButton,
                selectedMood === mood.id && styles.selectedMoodButton,
              ]}
              onPress={() =>
                setSelectedMood(selectedMood === mood.id ? null : mood.id)
              }
            >
              <Text style={styles.moodEmoji}>{mood.emoji}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {selectedMood && (
          <Text style={styles.selectedMoodLabel}>
            {moods.find((m) => m.id === selectedMood)?.label}
          </Text>
        )}
      </View>

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
    justifyContent: "flex-end",
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
    marginTop: 80, // Pushes the container further down
  },
  dateText: {
    fontSize: 18,
    color: "#9b59b6",
    fontWeight: "bold",
  },
  timeText: {
    fontSize: 16,
    color: "#9b59b6",
  },
  questionSection: {
    alignItems: "center",
    marginTop: 20,
  },
  questionText: {
    fontSize: 22,
    color: "#9b59b6",
    fontWeight: "bold",
    marginBottom: 20,
  },
  moodContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  moodButton: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#E5E5E5",
  },
  selectedMoodButton: {
    backgroundColor: "#B7FFBF",
    borderWidth: 2,
    borderColor: "#9b59b6",
  },
  moodEmoji: {
    fontSize: 28,
  },
  selectedMoodLabel: {
    fontSize: 18,
    color: "#9b59b6",
    fontWeight: "bold",
    marginTop: 10,
  },
  nextButton: {
    width: "100%",
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    bottom: 80,
    marginTop: "auto", // Pushes the button to the bottom of the screen
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

export default CheckInPage1;
