import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Playground = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="stats-chart-outline" size={30} color="#000" />
        <Ionicons name="settings-outline" size={30} color="#000" />
      </View>

      {/* Boxes */}
      <View style={styles.boxContainer}>
        <TouchableOpacity style={[styles.box, styles.boxPurple]}>
          <Text style={styles.boxText}>Dreamboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box, styles.boxYellow]}>
          <Text style={styles.boxText}>Arcade</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.boxContainer}>
        <TouchableOpacity style={[styles.box, styles.boxGreen]}>
          <Text style={styles.boxText}>LetGo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.box, styles.boxPink]}>
          <Text style={styles.boxText}>Laughs</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  box: {
    flex: 1,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  boxPurple: {
    backgroundColor: "#d6b3ff",
  },
  boxYellow: {
    backgroundColor: "#ffeb99",
  },
  boxGreen: {
    backgroundColor: "#b3ffb3",
  },
  boxPink: {
    backgroundColor: "#ffb3b3",
  },
  boxText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Playground;
