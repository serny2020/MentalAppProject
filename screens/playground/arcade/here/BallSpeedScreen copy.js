import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "react-native"; // Import to handle status bar height

const BallSpeedScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Get initial speed from route params or default to 2
  const initialSpeed = route.params?.bumpSpeed || 2;
  const [bumpSpeed, setBumpSpeed] = useState(initialSpeed);

  const handleSave = () => {
    // Go back to settings screen with updated bumpSpeed
    navigation.navigate("HereNowSettingsScreen", { bumpSpeed });
  };

  return (
    <LinearGradient colors={["#E3F3E3", "#B000B5"]} style={styles.gradientContainer}>
      <View style={styles.container}>
        {/* Header at the top */}
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.topButton}>Cancel</Text>
          </TouchableOpacity>
          <Image
            source={require("../../../../assets/image/arcade/hereNow/speed.png")}
            style={{ width: 30, height: 30 }}
          />
          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.topButton}>Done</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>
          Select <Text style={{ fontWeight: "bold" }}>Ball Speed</Text>
        </Text>

        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={bumpSpeed}
          onValueChange={setBumpSpeed}
        />
        <Text style={styles.speedText}>Speed: {bumpSpeed}</Text>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 20,
  },
  topButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    // marginTop: 200, // Push content below the header
  },
  slider: {
    marginTop: 200,
    width: "80%",
    height: 40,
  },
  speedText: {
    fontSize: 18,
    marginVertical: 10,
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  saveButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default BallSpeedScreen;
