import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";

const SOS = ({ navigation }) => {
  const [reorderableOptions, setReorderableOptions] = useState([
    {
      id: "2",
      text: "Connect Your ",
      boldText: "Loved Ones",
      action: () => navigation.navigate("SOSNavigator", { screen: "LovedOnesPage" }),
    },
    {
      id: "3",
      text: "Chat in Your ",
      boldText: "Community",
      action: () => alert("Chat in Your Community!"),
    },
    {
      id: "4",
      text: "Find a ",
      boldText: "Professional Therapist",
      action: () => navigation.navigate("SOSNavigator", { screen: "CrisisHelpPage" }),
    },
  ]);

  const handleReorderPress = () => {
    navigation.navigate("SOSNavigator", {
      screen: "ReorderSOS",
      params: {
        reorderableOptions,
        updateOptions: (newOrder) => setReorderableOptions(newOrder),
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Image
          source={require("../../assets/SOS/SOSIcon.png")} // Replace with your actual local image path
          style={styles.localIcon}
        />
        <Text style={styles.headerText}>
          Dear <Text style={styles.highlight}>Larry</Text>,{"\n"}
          Don’t worry, we’ll help you. {"\n"}You are not alone.{"\n"}
          <Text style={styles.highlight}>We love you. ❤️</Text>
        </Text>
      </View>

      {/* Right Column Slider */}
      <View style={styles.rightColumn}>
        <View style={styles.sliderLine}></View>
        <View style={styles.sliderCircle}></View>
      </View>

      {/* Options Section */}
      <ScrollView style={styles.optionsContainer}>
        {/* Fixed First Option */}
        <TouchableOpacity
          style={styles.optionRow}
          onPress={() =>
            navigation.navigate("SOSNavigator", {
              screen: "EmergencyToolkitScreen",
            })
          }
        >
          <Text style={styles.optionText}>
            Open Your Personal{" "}
            <Text style={styles.bold}>Emergency Toolkit</Text>
          </Text>
        </TouchableOpacity>

        {/* Reorderable Options */}
        {reorderableOptions.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.optionRow}
            onPress={item.action}
          >
            <Text style={styles.optionText}>
              {item.text}
              <Text style={styles.bold}>{item.boldText}</Text>
            </Text>
          </TouchableOpacity>
        ))}

        {/* Fixed Last Option */}
        <TouchableOpacity
          style={styles.optionRow}
          onPress={() =>
            navigation.navigate("SOSNavigator", { screen: "CrisisHelpPage" })
          }
        >
          <Text style={styles.optionText}>
            Call <Text style={styles.bold}>Life Threat Emergency Line</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Spinner Section */}
      <View style={styles.spinnerSection}>
        <Text style={styles.spinnerText}>
          Hard to decide which one to pick? Try our{" "}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SOSNavigator", { screen: "SpinWheelPage" })
            }
          >
            <Text style={styles.link}>spinner!</Text>
          </TouchableOpacity>
        </Text>
      </View>

      {/* Reorder Button */}
      <View style={styles.reorderButtonContainer}>
        <TouchableOpacity onPress={handleReorderPress} style={styles.reorderButton}>
          <Text style={styles.reorderButtonText}>Reorder Options</Text>
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
    paddingTop: 70,
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  localIcon: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  headerText: {
    fontSize: 16,
    color: "#f39c12",
    lineHeight: 22,
  },
  highlight: {
    fontWeight: "bold",
    color: "#e74c3c",
  },
  rightColumn: {
    position: "absolute",
    top: 150,
    right: 10,
    height: "75%",
    alignItems: "center",
    marginRight: 20,
  },
  sliderLine: {
    width: 2,
    height: "100%",
    backgroundColor: "#e74c3c",
  },
  sliderCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#e74c3c",
    position: "absolute",
    top: 0,
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionRow: {
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3",
    paddingVertical: 15,
  },
  optionText: {
    fontSize: 16,
    color: "#000",
  },
  bold: {
    fontWeight: "bold",
  },
  spinnerSection: {
    alignItems: "center",
    marginTop: 20,
  },
  spinnerText: {
    fontSize: 14,
    color: "#f39c12",
  },
  link: {
    fontWeight: "bold",
    color: "#9b59b6",
  },
  reorderButtonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  reorderButton: {
    backgroundColor: "#f39c12",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  reorderButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SOS;
