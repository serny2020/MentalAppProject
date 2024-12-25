import { useState, useContext, useEffect} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CheckInContext } from "../../context/CheckInContext";

const CheckInPage2 = ({ navigation }) => {
  const { updateCheckInData } = useContext(CheckInContext);
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Positive"); // Default to Positive

  const emotions = {
    Positive: [
      { id: 1, emoji: "😊", label: "Peaceful" },
      { id: 2, emoji: "😎", label: "Confident" },
      { id: 3, emoji: "😊", label: "Content" },
      { id: 4, emoji: "😋", label: "Grateful" },
      { id: 5, emoji: "😁", label: "Excited" },
      { id: 6, emoji: "😋", label: "Fulfilled" },
      { id: 7, emoji: "😄", label: "Proud" },
      { id: 8, emoji: "❤️", label: "Loved" },
      { id: 9, emoji: "😄", label: "Optimistic" },
      { id: "other", emoji: "➕", label: "Other" },
    ],
    Negative: [
      { id: 10, emoji: "😟", label: "Worried" },
      { id: 11, emoji: "😢", label: "Sad" },
      { id: 12, emoji: "😠", label: "Angry" },
      { id: 13, emoji: "😔", label: "Disappointed" },
      { id: 14, emoji: "😕", label: "Confused" },
      { id: 15, emoji: "😨", label: "Scared" },
      { id: 16, emoji: "😒", label: "Frustrated" },
      { id: 17, emoji: "😩", label: "Stressed" },
      { id: "other", emoji: "➕", label: "Other" },
    ],
  };

  const toggleEmotion = (emotionId) => {
    setSelectedEmotions((prev) =>
      prev.includes(emotionId)
        ? prev.filter((id) => id !== emotionId) // Remove if already selected
        : [...prev, emotionId] // Add if not selected
    );
  };

  const switchCategory = (category) => {
    setSelectedCategory(category);
    setSelectedEmotions([]); // Clear previously selected emotions when switching category
  };

  const handleNext = () => {
    const selectedEmotionData = emotions[selectedCategory].filter((e) =>
      selectedEmotions.includes(e.id)
    );

    // Update context
    updateCheckInData("emotions", selectedEmotionData);

    // Log the updated context for debugging
    // console.log("Updated CheckIn Context:", checkInData);

    // Navigate to the next page
    navigation.navigate("NextCheckInPage");
  };

  useEffect(() => {
    // Log the updated emotions when state changes for debugging
    console.log("Selected Emotions:", selectedEmotions);
  }, [selectedEmotions]);


  const additionalEmotions = [
    { id: 18, emoji: "🤔", label: "Curious" },
    { id: 19, emoji: "🙃", label: "Playful" },
    { id: 20, emoji: "🥰", label: "Affectionate" },
    { id: 21, emoji: "😐", label: "Neutral" },
    { id: 22, emoji: "😵", label: "Overwhelmed" },
  ];
  // const handleSelectFromOtherPage = (selectedEmotionsFromOtherPage) => {
  //   // Replace the parent's selectedEmotions list with the one received from the child
  //   const selectedIds = selectedEmotionsFromOtherPage.map((emotion) => emotion.id);
  
  //   console.log("Updated selections from child:", selectedIds);
  
  //   setSelectedEmotions(selectedIds); // Update parent's list to match the child's list exactly
  // };

  const handleSelectFromOtherPage = (selectedEmotionsFromOtherPage) => {
  
    setSelectedEmotions(() => {
      // Extract IDs of selected items from the child
      const selectedIdsFromChild = selectedEmotionsFromOtherPage.map((emotion) => emotion.id);
  
      console.log("Updated selections from child:", selectedIdsFromChild);
  
      // Return the exact state of the child selections
      return selectedIdsFromChild; // Reflect the exact state of the child
    });
  };

  // const handleSelectFromOtherPage = (selectedEmotionsFromOtherPage) => {
  //   setSelectedEmotions((prevSelectedEmotions) => {
  //     // Extract IDs of selected items from the child
  //     const selectedIdsFromChild = selectedEmotionsFromOtherPage.map((emotion) => emotion.id);
  
  //     console.log("Selections received from child:", selectedIdsFromChild);
  
  //   // Create the updated list of IDs
  //   const updatedSelections = [
  //     ...selectedIdsFromChild, // IDs from the child
  //     ...selectedEmotions.filter((id) => !selectedIdsFromChild.includes(id)), // IDs from the parent not in child
  //   ];

  //   console.log("Updated selections:", updatedSelections);

  //   return updatedSelections; // Return the updated list of IDs
  //   });
  // };
  

  const handleOpenOtherPage = () => {
    navigation.navigate("OtherPage", {
      existingEmotions : [...emotions.Positive, ...emotions.Negative],
      additionalEmotions, // List of available items for selection
      onSelect: handleSelectFromOtherPage, // Callback to handle the selected items
      initialSelectedEmotionsId: selectedEmotions, // Pass the currently selected emotions
    });
  };


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
        <Text style={styles.questionText}>What emotions are you experiencing?</Text>
      </View>

      {/* Positive/Negative Buttons */}
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            selectedCategory === "Negative" && styles.inactiveCategoryButton,
          ]}
          onPress={() => switchCategory("Positive")}
        >
          <Text
            style={[
              styles.categoryButtonText,
              selectedCategory === "Positive" && styles.activeCategoryButtonText,
            ]}
          >
            Positive
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            selectedCategory === "Positive" && styles.inactiveCategoryButton,
          ]}
          onPress={() => switchCategory("Negative")}
        >
          <Text
            style={[
              styles.categoryButtonText,
              selectedCategory === "Negative" && styles.activeCategoryButtonText,
            ]}
          >
            Negative
          </Text>
        </TouchableOpacity>
      </View>

      {/* Emotions Grid */}
      <View style={styles.moodContainer}>
        {emotions[selectedCategory].map((emotion) =>
          emotion.id === "other" ? (
            <TouchableOpacity
              key={emotion.id}
              style={styles.moodButton}
              onPress={handleOpenOtherPage}
            >
              <Text style={styles.moodEmoji}>{emotion.emoji}</Text>
              <Text style={styles.moodLabel}>{emotion.label}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={emotion.id}
              style={[
                styles.moodButton,
                selectedEmotions.includes(emotion.id) && styles.selectedMoodButton,
              ]}
              onPress={() => toggleEmotion(emotion.id)}
            >
              <Text style={styles.moodEmoji}>{emotion.emoji}</Text>
              <Text style={styles.moodLabel}>{emotion.label}</Text>
            </TouchableOpacity>
          )
        )}
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={[
          styles.nextButton,
          selectedEmotions.length > 0
            ? styles.nextButtonActive
            : styles.nextButtonInactive,
        ]}
        onPress={handleNext}
        disabled={selectedEmotions.length === 0}
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
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#B7FFBF",
    width: 100,
    alignItems: "center",
  },
  inactiveCategoryButton: {
    backgroundColor: "#E5E5E5",
  },
  categoryButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9b59b6",
  },
  activeCategoryButtonText: {
    color: "#FFF",
  },
  moodContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  moodButton: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    margin: 10,
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
    fontSize: 12,
    color: "#9b59b6",
    marginTop: 5,
    textAlign: "center",
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

export default CheckInPage2;
