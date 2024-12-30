import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Arcade = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backText} onPress={() => navigation.goBack()}>
            Back
          </Text>
        </TouchableOpacity>
        <Ionicons name="settings-outline" size={30} color="#6a1b9a" />
      </View>
      <Text style={styles.title}>Arcade</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e1bee7",
        paddingHorizontal: 20,
        paddingTop: 40,
      },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  backText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Arcade;
