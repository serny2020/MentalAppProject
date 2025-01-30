import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Discover = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>All</Text></TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>Meditation</Text></TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>Breath</Text></TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>Program</Text></TouchableOpacity>
        </View>
        {/* <Ionicons name="search-outline" size={30} color="#000" /> */}
      </View>

      <ScrollView>
        {/* Recommendations Section */}
        <Text style={styles.sectionHeader}>Recommendation just for you</Text>
        <View style={styles.itemContainer}>
          <TouchableOpacity style={styles.itemBox}><Text style={styles.itemText}>Article</Text></TouchableOpacity>
          <TouchableOpacity style={styles.itemBox}><Text style={styles.itemText}>Breath Excise</Text></TouchableOpacity>
          <TouchableOpacity style={styles.itemBox}><Text style={styles.itemText}>CBT video</Text></TouchableOpacity>
        </View>

        {/* Meditation Section */}
        <Text style={styles.sectionHeader}>Meditation</Text>
        <View style={styles.itemContainer}>
          <TouchableOpacity style={styles.itemBox}><Text style={styles.itemText}>voice 1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.itemBox}><Text style={styles.itemText}>sound 1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.itemBox}><Text style={styles.itemText}>voice 2</Text></TouchableOpacity>
        </View>

        {/* Breathing Exercises Section */}
        <Text style={styles.sectionHeader}>Breathing Excises</Text>
        <View style={styles.itemContainer}>
          <TouchableOpacity style={styles.itemBox}><Text style={styles.itemText}>Box Breathing</Text></TouchableOpacity>
          <TouchableOpacity style={styles.itemBox}><Text style={styles.itemText}>4-7-8 Breathing</Text></TouchableOpacity>
          <TouchableOpacity style={styles.itemBox}><Text style={styles.itemText}>Belly Breathing</Text></TouchableOpacity>
        </View>

        {/* Mental Health Education Program Section */}
        <Text style={styles.sectionHeader}>Mental Health Education Program</Text>
        <View style={styles.itemContainer}>
          <TouchableOpacity style={styles.itemBox}><Text style={styles.itemText}>CBT</Text></TouchableOpacity>
          <TouchableOpacity style={styles.itemBox}><Text style={styles.itemText}>DBT</Text></TouchableOpacity>
          <TouchableOpacity style={styles.itemBox}><Text style={styles.itemText}>Emotions</Text></TouchableOpacity>
        </View>

        {/* More Button */}
        <TouchableOpacity style={styles.moreButton}><Text style={styles.moreText}>More</Text></TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
  },
  filterButton: {
    backgroundColor: "#e5e5e5",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  filterText: {
    color: "#9b59b6",
    fontSize: 14,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemBox: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 5,
  },
  itemText: {
    fontSize: 14,
    color: "#000",
  },
  moreButton: {
    alignSelf: "center",
    marginTop: 20,
  },
  moreText: {
    fontSize: 14,
    color: "#9b59b6",
    fontWeight: "bold",
  },
});

export default Discover;
