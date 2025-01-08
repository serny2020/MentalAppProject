import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Use Ionicons for icons

const Routine = ({navigation}) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit'
  }); // Get the current date in MM-DD format

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Plan: {currentDate} Community</Text>
        <TouchableOpacity onPress={() => {navigation.navigate("SettingsNavigator", {screen: "Settings"})}}>
          <Ionicons name="person-circle-outline" size={30} color="#9b59b6" />
        </TouchableOpacity>
      </View>

      {/* Timeline */}
      <ScrollView contentContainerStyle={styles.timelineContainer}>
        <View style={styles.timelineLine} />
        <View style={styles.timelineItem}>
          <Ionicons name="ellipse" size={12} color="#800080" style={styles.timelineDot} />
          <Text style={styles.timeText}>8:00</Text>
          <Text style={styles.periodText}>Morning</Text>
          <View style={styles.taskBox}><Text style={styles.taskText}>Affirmation</Text></View>
        </View>
        <View style={styles.timelineItem}>
          <Ionicons name="ellipse" size={12} color="#800080" style={styles.timelineDot} />
          <Text style={styles.timeText}>14:00</Text>
          <Text style={styles.periodText}>Afternoon</Text>
          <View style={styles.taskBox}><Text style={styles.taskText}>Meditation</Text></View>
        </View>
        <View style={styles.timelineItem}>
          <Ionicons name="ellipse" size={12} color="#800080" style={styles.timelineDot} />
          <Text style={styles.timeText}>20:00</Text>
          <Text style={styles.periodText}>Evening</Text>
          <View style={styles.taskBox}><Text style={styles.taskText}>Journaling</Text></View>
        </View>
      </ScrollView>

      {/* Reorder Note */}
      <Text style={styles.reorderText}>Feel free to reorder each part of your routine.</Text>
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
    marginTop: 80,
  },
  headerText: {
    fontSize: 24,
    color: "#9b59b6",
    fontWeight: "bold",
  },
  timelineContainer: {
    marginTop: 20,
    position: 'relative',
  },
  timelineLine: {
    position: 'absolute',
    left: 15,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: "#800080",
  },
  timelineItem: {
    marginBottom: 30,
    paddingLeft: 30,
    position: 'relative',
  },
  timelineDot: {
    position: 'absolute',
    left: 10,
    top: 5,
  },
  timeText: {
    fontSize: 16,
    color: "#9b59b6",
    fontWeight: "bold",
  },
  periodText: {
    fontSize: 14,
    color: "#9b59b6",
    marginBottom: 5,
  },
  taskBox: {
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#e5e5e5",
    color: "#9b59b6",
    marginTop: 10,
  },
  taskText: {
    fontSize: 16,
    color: "#9b59b6",
    fontWeight: "bold",
  },
  reorderText: {
    textAlign: "center",
    fontSize: 16,
    color: "#9b59b6",
    marginVertical: 20,
  },
});

export default Routine;
