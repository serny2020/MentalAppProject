import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Updated import from Expo

const HappinessJournalReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    [
      "I learned how to make Sushi today!",
      "I helped a friend move.",
      "My friend said I am very kind and respectful:D",
    ],
    ["Completed a workout!", "Tried a new recipe.", "Called a family member."],
    [
      "Had a great meeting at work.",
      "Finished reading a book.",
      "Took a walk in the park.",
    ],
    // Add more reviews as needed
  ];
  const [isModalVisible, setModalVisible] = useState(false);
  const handleSettingsPress = (section) => {
    console.log("a setting for happiness journal");
  };

  const handleCollapsePress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Happniess Journal Daily Review</Text>
        <TouchableOpacity
          onPress={() => handleSettingsPress("HappinessJournalReview")}
        >
          <Ionicons name="ellipsis-horizontal" size={24} color="#555" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={handlePrev} style={styles.arrowButton}>
          <Ionicons name="chevron-back-outline" size={24} color="#000" />
        </TouchableOpacity>

        <View style={styles.reviewBox}>
          {reviews[currentIndex].map((item, index) => (
            <Text key={index} style={styles.reviewText}>
              {`${index + 1}. ${item}`}
            </Text>
          ))}
        </View>

        <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
          <Ionicons name="chevron-forward-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.pageIndicator}>{`${currentIndex + 1}/${
        reviews.length
      }`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
    height: 280, // Keeps the component height consistent
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#800080",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  arrowButton: {
    padding: 10,
  },
  reviewBox: {
    backgroundColor: "#d3d3d3",
    width: 250, // Fixed width
    height: 150, // Fixed height
    borderRadius: 10,
    alignItems: "left",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  reviewText: {
    fontSize: 16,
    color: "#555",
    textAlign: "left", // Align text to the left
    marginVertical: 5, // Add vertical spacing
    paddingLeft: 10, // Add left padding for indentation
    lineHeight: 20, // Optional: Adjust line height for better readability
  },
  pageIndicator: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
});

export default HappinessJournalReview;
