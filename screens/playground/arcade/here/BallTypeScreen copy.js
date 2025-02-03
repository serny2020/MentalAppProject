// BallTypeScreen.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import ballsOptions from "../../../../data/balls-option";

const BallTypeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Optionally receive the current ball type and ball color (if needed)
  // so you can show which image is currently selected.
  const { currentBallType } = route.params || {};

  // When an image option is selected, navigate back (or forward) with the chosen type.
  // For example, if your settings screen is expecting { ballType, ballColor }.
  const handleSelect = (option) => {
    // navigation.pop(1); // Pop the top two screens
    navigation.navigate("HereNowSettingsScreen", {
      ballType: option.id,
    });
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
                  currentBallType === option.id && styles.selectedOption,
                ]}
                onPress={() => handleSelect(option)}
              >
                <Image source={option.source} style={styles.ballImage} />
                {/* <Text style={styles.label}>{option.label}</Text> */}
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
    // backgroundColor: "#fff",
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
  },
  ballImage: {
    width: 50, // Adjust as needed
    height: 50,
    resizeMode: "contain",
  },
  label: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default BallTypeScreen;
