import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const settingsOptions = [
  {
    id: 1,
    name: "Ball color",
    icon: require("../../../../assets/image/arcade/hereNow/palette.png"),
  },
  {
    id: 2,
    name: "Bumping sound",
    icon: require("../../../../assets/image/arcade/hereNow/sound.png"),
  },
  {
    id: 3,
    name: "Ball type",
    icon: require("../../../../assets/image/arcade/hereNow/type.png"),
  },
  {
    id: 4,
    name: "Bumping speed",
    icon: require("../../../../assets/image/arcade/hereNow/speed.png"),
  },
];

const HereNowSettingsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Get initial values from route params, fallback to defaults
  const [ballColor, setBallColor] = useState(
    route.params?.ballColor || "#ff4081"
  );
  const [ballType, setBallType] = useState(route.params?.ballType || "color"); // 'color' or 'image'

  // Update state when returning from BallColorScreen or BallTypeScreen
  useEffect(() => {
    if (route.params?.selectedColor) {
      setBallColor(route.params.selectedColor);
    }
    if (route.params?.selectedBallType) {
      setBallType(route.params.selectedBallType);
    }
  }, [route.params]);

  return (
    <LinearGradient colors={["#E3F3E3", "#B000B5"]} style={styles.container}>
      {/* Top Row (Cancel, Settings Icon, Done) */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.topButton}>Cancel</Text>
        </TouchableOpacity>
        <Ionicons name="settings-outline" size={30} color="black" />
        <TouchableOpacity
          onPress={() => {
            navigation.pop(2); // Pop the top two screens
            navigation.navigate("HereAndNowScreen", { ballColor, ballType }); // Navigate to HereAndNowScreen
          }}
        >
          <Text style={styles.topButton}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Change Settings</Text>

      {/* Settings List */}
      {settingsOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={styles.settingItem}
          onPress={() => {
            if (option.id === 1) {
              // Navigate to BallColorScreen and pass current color
              navigation.navigate("BallColorScreen", { ballColor });
            } else if (option.id === 3) {
              // Navigate to BallTypeScreen and pass current ball type
              navigation.navigate("BallTypeScreen", { ballType });
            } else {
              console.log(option.name);
            }
          }}
        >
          <Image source={option.icon} style={styles.iconImage} />
          <Text style={styles.settingText}>{option.name}</Text>
          {option.id === 1 && (
            <View
              style={[styles.colorPreview, { backgroundColor: ballColor }]}
            />
          )}
          {option.id === 3 && (
            <Text style={styles.ballTypeText}>
              {ballType === "color" ? "Color" : "Image"}
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  topButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 5,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  iconImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginRight: 15,
  },
  settingText: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  colorPreview: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000",
  },
  ballTypeText: {
    fontSize: 16,
    color: "#000",
  },
});

export default HereNowSettingsScreen;
