import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WheelColorPicker from "react-native-wheel-color-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useNowAndThen } from "../../../../context/Arcade/NowAndThenContext";

const BallColorScreen = () => {
  const navigation = useNavigation();
  const { ballColor, setBallColor } = useNowAndThen(); // Get and set color from context

  return (
    <LinearGradient colors={["#E3F3E3", "#B000B5"]} style={styles.container}>
      {/* Top Row (Cancel, Palette Icon, Done) */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.topButton}>Cancel</Text>
        </TouchableOpacity>
        <Image
          source={require("../../../../assets/image/arcade/hereNow/palette.png")}
          style={{ width: 30, height: 30 }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.topButton}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Instruction */}
      <Text style={styles.instructionText}>
        Click on any color to change the{" "}
        <Text style={styles.boldText}>Ball color</Text>
      </Text>

      {/* Color Picker */}
      <View style={styles.colorPickerContainer}>
        <WheelColorPicker
          initialColor={ballColor}
          onColorChangeComplete={setBallColor} // Directly update context
          style={{ width: 250, height: 250 }}
        />
      </View>

      {/* Preview */}
      <Text style={styles.previewText}>Preview</Text>
      <View style={styles.previewContainer}>
        <View style={[styles.previewBall, { backgroundColor: ballColor }]} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
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
  instructionText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  colorPickerContainer: {
    marginVertical: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  previewText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  previewContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  previewBall: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#000",
  },
});

export default BallColorScreen;
