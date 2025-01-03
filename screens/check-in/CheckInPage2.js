import { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CheckInContext } from "../../context/CheckInContext";
import additionalEmotions from "../../data/extra-emotion-data"

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
    setSelectedEmotions(
      (prev) =>
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
    const selectedEmotionData = [...emotions.Negative, ...emotions.Positive, ...additionalEmotions].filter((e) =>
      selectedEmotions.includes(e.id)
    );
    console.log("Selected emotions:", selectedEmotionData);
    // Update context
    updateCheckInData("emotions", selectedEmotionData);

    // Navigate to the next page
    // navigation.navigate('OtherNavigator', { screen: 'CheckInPage3' });
    // navigation.navigate('CheckInPage3withoutInput');
    navigation.navigate('CheckInPage3KeyIssue');
    // navigation.navigate('CheckInPage3formatedCrash');
  };

  useEffect(() => {
    // Log the updated emotions when state changes for debugging
    console.log("Selected Emotions:", selectedEmotions);
  }, [selectedEmotions]);

  // const additionalEmotions = [
  //   { id: 18, emoji: "🤔", label: "Curious" },
  //   { id: 19, emoji: "🙃", label: "Playful" },
  //   { id: 20, emoji: "🥰", label: "Affectionate" },
  //   { id: 21, emoji: "😐", label: "Neutral" },
  //   { id: 22, emoji: "😵", label: "Overwhelmed" },
  // ];

  // const INNER_CATEGORIES = Array.from({ length: 6 }, (_, index) => ({
  //   id: index + 1,
  //   label: `inner ${index + 1}`,
  //   color: `hsl(${(index * 60) % 360}, 70%, 75%)`, // Generate colors dynamically
  // }));
  
  // const MIDDLE_CATEGORIES = Array.from({ length: 12 }, (_, index) => ({
  //   id: index + 7,
  //   label: `middle ${index + 1}`,
  //   color: `hsl(${(index * 30) % 360}, 70%, 75%)`,
  // }));
  
  // const OUTER_CATEGORIES = Array.from({ length: 36 }, (_, index) => ({
  //   id: index + 19,
  //   label: `outer ${index + 1}`,
  //   color: `hsl(${(index * 20) % 360}, 70%, 80%)`,
  // }));
  
  // // Mapping the new categories to the additionalEmotions structure, starting id from 18
  // const additionalEmotions = [
  //   ...INNER_CATEGORIES.map((item, index) => ({
  //     id: index + 18, // Start id from 18
  //     color: item.color,
  //     label: `inner ${index + 18}`, // Reflect new id in the label
  //   })),
  //   ...MIDDLE_CATEGORIES.map((item, index) => ({
  //     id: index + 18 + INNER_CATEGORIES.length, // Offset by INNER_CATEGORIES length
  //     color: item.color,
  //     label: `middle ${index + 18 + INNER_CATEGORIES.length}`, // Reflect new id in the label
  //   })),
  //   ...OUTER_CATEGORIES.map((item, index) => ({
  //     id: index + 18 + INNER_CATEGORIES.length + MIDDLE_CATEGORIES.length + index, // Offset by INNER and MIDDLE lengths
  //     color: item.color,
  //     label: `outer ${index + 18 + INNER_CATEGORIES.length + MIDDLE_CATEGORIES.length + index}`, // Reflect new id in the label
  //   })),
  // ];
  
  // // console.log(additionalEmotions);
  
  
  // // Helper function to generate emojis for the categories
  // function getEmojiForCategory(index) {
  //   const emojis = [
  //     "😊", "😢", "😡", "😨", "😮", "😠", // Emojis for INNER_CATEGORIES
  //     "🤔", "🙃", "🥰", "😐", "😵", "😎", // Additional emojis for MIDDLE_CATEGORIES
  //     "🤯", "😬", "🙄", "😴", "🤗", "😲", "😤", "😇", // Emojis for OUTER_CATEGORIES
  //     "😳", "😱", "🧐", "😶", "😑", "🙌", "👍", "👎",
  //   ];
  //   return emojis[index % emojis.length]; // Cycle through the emoji list
  // }
  


  // const INNER_CATEGORIES = Array.from({ length: 6 }, (_, index) => ({
  //   id: index + 1,
  //   label: `inner ${index + 1}`,
  //   color: `hsl(${(index * 60) % 360}, 70%, 75%)`, // Generate colors dynamically
  // }));
  
  // const MIDDLE_CATEGORIES = Array.from({ length: 12 }, (_, index) => ({
  //   id: index + 7,
  //   label: `middle ${index + 1}`,
  //   color: `hsl(${(index * 30) % 360}, 70%, 75%)`,
  // }));
  
  // const OUTER_CATEGORIES = Array.from({ length: 36 }, (_, index) => ({
  //   id: index + 19,
  //   label: `outer ${index + 1}`,
  //   color: `hsl(${(index * 20) % 360}, 70%, 80%)`,
  // }));
  
  // // Mapping the new categories to the additionalEmotions structure, starting id from 18
  // const additionalEmotions = [
  //   ...INNER_CATEGORIES.map((item, index) => ({
  //     id: index + 18, // Start id from 18
  //     label: item.label,
  //     color: item.color, // Keep the color field
  //   })),
  //   ...MIDDLE_CATEGORIES.map((item, index) => ({
  //     id: index + 18 + INNER_CATEGORIES.length, // Offset by INNER_CATEGORIES length
  //     label: item.label,
  //     color: item.color, // Keep the color field
  //   })),
  //   ...OUTER_CATEGORIES.map((item, index) => ({
  //     id: index + 18 + INNER_CATEGORIES.length + MIDDLE_CATEGORIES.length, // Offset by INNER and MIDDLE lengths
  //     label: item.label,
  //     color: item.color, // Keep the color field
  //   })),
  // ];
  
  // console.log(additionalEmotions);

  
  const handleSelectFromOtherPage = (selectedEmotionsFromOtherPage) => {
    setSelectedEmotions(() => {
      // Extract IDs of selected items from the child
      const selectedIdsFromChild = selectedEmotionsFromOtherPage.map(
        (emotion) => emotion.id
      );

      console.log("Updated selections from child:", selectedIdsFromChild);

      // Return the exact state of the child selections
      return selectedIdsFromChild; // Reflect the exact state of the child
    });
  };

  // const handleOpenOtherPage = () => {
  //   navigation.navigate("OtherPage", {
  //     existingEmotions: [...emotions.Positive, ...emotions.Negative],
  //     additionalEmotions, // List of available items for selection
  //     onSelect: handleSelectFromOtherPage, // Callback to handle the selected items
  //     initialSelectedEmotionsId: selectedEmotions, // Pass the currently selected emotions
  //   });
  // };
  const handleOpenOtherPage = () => {
    navigation.navigate("CircularOther", {
      existingEmotions: [...emotions.Positive, ...emotions.Negative],
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
        <Text style={styles.questionText}>
          What emotions are you experiencing?
        </Text>
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
              selectedCategory === "Positive" &&
                styles.activeCategoryButtonText,
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
              selectedCategory === "Negative" &&
                styles.activeCategoryButtonText,
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
                selectedEmotions.includes(emotion.id) &&
                  styles.selectedMoodButton,
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
