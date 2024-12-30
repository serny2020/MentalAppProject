import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ReframeTips = ({ navigation }) => {
  const examples = [
    {
      id: "1",
      negative: "I can’t find a job",
      reframed: "I haven’t found a job yet, but with persistence, learning, and the right strategies, I will find the right opportunity."
    },
    {
      id: "2",
      negative: "I’ll never get this right.",
      reframed: "Learning takes time, and I’ll improve with practice."
    },
    {
      id: "3",
      negative: "I’m not good enough for this job.",
      reframed: "I have skills and qualities to bring to this role, and I can keep growing."
    },
    {
      id: "4",
      negative: "I failed, so I’m a failure.",
      reframed: "Failing is part of growth; I can learn and try again."
    },
    {
      id: "5",
      negative: "This is too hard; I can’t do it.",
      reframed: "This is challenging, but I can break it into smaller steps and tackle it."
    },
    {
      id: "6",
      negative: "Nobody cares about what I have to say.",
      reframed: "Some people might not, but others value my perspective and insights."
    },
    {
      id: "7",
      negative: "I always mess things up.",
      reframed: "I’ve made mistakes, but I also succeed when I try my best."
    }
  ];

  const renderExample = ({ item }) => (
    <View style={styles.examplePair}>
      <Text style={styles.negativeThought}>{`“${item.negative}”`}</Text>
      <Text style={styles.reframedThought}>{`“${item.reframed}”`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={32} color="#9b59b6" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="close-outline" size={32} color="#9b59b6" />
        </TouchableOpacity>
      </View>

      {/* Tips and Examples Section with Gray Background */}
      <View style={styles.tipsBackgroundWrapper}>
        <View style={styles.tipsBackground}>
          {/* Fixed Tips Section */}
          <View style={styles.tipsContainer}>
            <Text style={styles.tipsHeader}>Tips on reframing unhelpful thoughts:</Text>

            <View style={styles.iconContainer}>
              <Ionicons name="bulb-outline" size={40} color="#9b59b6" />
            </View>

            <Text style={styles.subHeader}>Develop your growth mindset:</Text>
            <Text style={styles.description}>
              Abilities and intelligence can be developed through effort, learning, and perseverance.
            </Text>
            <Text style={styles.examplesHeader}>Examples:</Text>
          </View>

          {/* Scrollable Examples Section */}
          <FlatList
            data={examples}
            keyExtractor={(item) => item.id}
            renderItem={renderExample}
            contentContainerStyle={styles.exampleBox}
          />
        </View>
      </View>
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
  tipsBackgroundWrapper: {
    flex: 1,
    marginBottom: 30, // Adds distance above the bottom of the phone
    marginTop: 20, // Adds distance above the bottom of the phone
  },
  tipsBackground: {
    backgroundColor: "#e0e0e0",
    padding: 15,
    borderRadius: 10,
    flex: 1,
  },
  tipsContainer: {
    marginBottom: 10,
  },
  tipsHeader: {
    fontSize: 22,
    color: "#9b59b6",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  exampleBox: {
    padding: 20,
  },
  examplePair: {
    marginBottom: 15,
  },
  negativeThought: {
    fontSize: 16,
    color: "#ff6b6b",
    fontWeight: "bold",
    marginBottom: 5,
  },
  reframedThought: {
    fontSize: 16,
    color: "#4caf50",
    lineHeight: 22,
  },
  subHeader: {
    fontSize: 18,
    color: "#9b59b6",
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    lineHeight: 22,
  },
  examplesHeader: {
    fontSize: 16,
    color: "#9b59b6",
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ReframeTips;
