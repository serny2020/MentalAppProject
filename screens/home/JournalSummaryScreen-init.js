import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const JournalSummaryScreen = () => {
  const heatmapData = Array(42).fill(0); // Example heatmap data for 42 days
  const happinessJournal = [
    { year: 2025, month: 1, date: 11, content: "I helped my roommate..." },
  ];
  const moodJournal = [
    { year: 2025, month: 1, date: 8, content: "I feel sad because I didn’t..." },
  ];

  const getIntensityColor = (intensity) => {
    const colors = ["#FFFFFF", "#D4EED1", "#A6D5A5", "#6FA96C", "#356C36"];
    return colors[intensity];
  };

  const renderHeatmap = ({ item, index }) => (
    <View
      style={[
        styles.heatmapCell,
        { backgroundColor: getIntensityColor(Math.floor(Math.random() * 5)) },
      ]}
    />
  );

  const renderJournal = ({ item }) => (
    <View style={styles.journalEntry}>
      <Text style={styles.journalText}>
        YEAR {item.year} MONTH {item.month} DATE {item.date} CONTENT{" "}
        {item.content}
      </Text>
      <TouchableOpacity>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.userName}>Kelly</Text>
        <Ionicons name="search-outline" size={24} color="#000" />
      </View>

      {/* Heatmap */}
      <View>
        <FlatList
          data={heatmapData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderHeatmap}
          numColumns={7}
          scrollEnabled={false} // Disable scrolling for heatmap
        />
        <View style={styles.monthLabels}>
          <Text style={styles.monthLabel}>DECEMBER</Text>
          <Text style={styles.monthLabel}>JANUARY</Text>
          <Text style={styles.monthLabel}>FEBRUARY</Text>
        </View>
      </View>

      {/* Journal Entries */}
      <FlatList
        data={[...happinessJournal, ...moodJournal]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderJournal}
        contentContainerStyle={{ paddingVertical: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 30,
    paddingTop: 70, // Add padding to the top of the screen
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  heatmapCell: {
    width: 40,
    height: 40,
    margin: 4,
    borderRadius: 4,
  },
  monthLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    paddingHorizontal: 16,
  },
  monthLabel: {
    fontSize: 14,
    color: "#000",
  },
  journalEntry: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFF",
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  journalText: {
    fontSize: 14,
    color: "#000",
    flex: 1,
  },
});

export default JournalSummaryScreen;
