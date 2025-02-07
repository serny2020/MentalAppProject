import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import ballsOptions from "../../../../data/balls-option";
import { useNowAndThen } from "../../../../context/Arcade/NowAndThenContext";

const BallTypeScreen = () => {
  const navigation = useNavigation();
  const { ballType, setBallType } = useNowAndThen(); // Get and set ball type from context

  // Handle selection
  const handleSelect = (option) => {
    setBallType(option.id); // Update context
    navigation.goBack(); // Go back without passing props
  };

  return (
    <LinearGradient colors={["#E3F3E3", "#B000B5"]} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.topButton}>Cancel</Text>
          </TouchableOpacity>
          <Image
            source={require("../../../../assets/image/arcade/hereNow/type.png")}
            style={{ width: 30, height: 30 }}
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.topButton}>Done</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>
          Select <Text style={{ fontWeight: "bold" }}>Ball Type</Text>
        </Text>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.grid}>
            {ballsOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.option,
                  ballType === option.id && styles.selectedOption, // Use context ballType
                ]}
                onPress={() => handleSelect(option)}
              >
                <Image source={option.source} style={styles.ballImage} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  topButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  gridContainer: {
    paddingVertical: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap", // Allows items to wrap into multiple rows
    justifyContent: "center", // Center items horizontally
  },
  option: {
    width: "30%", // Adjust width for a 3-column grid
    margin: 5, // Space between items
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: "#fff", // Highlight selected ball type
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  ballImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});

export default BallTypeScreen;
