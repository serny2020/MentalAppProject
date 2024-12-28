import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const CognitiveDistortionsPage = ({ navigation }) => {
  const distortions = [
    { name: "Polarized Thinking", description: "If I don’t stick to my goals 100%, I’m a failure." },
    { name: "Mind Reading", description: "They didn’t reply; they must hate me." },
    { name: "Overgeneralization", description: "I couldn’t solve this problem; I’ll never understand math." },
    { name: "Mental Filtering", description: "My presentation went well, but I stumbled over one word, so it was a disaster." },
    { name: "Fortune Telling", description: "The professor will think I’m not smart if I ask this question." },
    { name: "Disqualifying the Positive", description: "That compliment doesn’t mean anything; they were just being nice." },
    { name: "Should/Must Statements", description: "I should always be successful at everything I do." },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* Navigate back when the left arrow is pressed */}
          <Text style={styles.skip}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity>
                  <Text style={styles.skip} onPress={() => navigation.navigate("Home")}>
                    {"❌"}
                  </Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.questionText}>Unhelpful Thoughts: Cognitive Distortions</Text>

      {/* Cognitive Distortions List */}
      <ScrollView>
        {distortions.map((distortion, index) => (
          <View key={index} style={styles.distortionItem}>
            <Text style={styles.distortionName}>{distortion.name}</Text>
            <Text style={styles.distortionDescription}>{distortion.description}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Next Button */}
      <TouchableOpacity
        style={[styles.nextButton, styles.nextButtonActive]} // Assuming the button is always active
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ...StyleSheet.create({
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
    questionText: {
      fontSize: 22,
      color: "#9b59b6",
      fontWeight: "bold",
      marginBottom: 10,
      marginTop: 20,
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
  }),
  distortionItem: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#e5e5e5",
  },
  distortionName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#9b59b6",
    marginBottom: 5,
  },
  distortionDescription: {
    fontSize: 16,
    color: "#9b59b6",
  },
});

export default CognitiveDistortionsPage;
