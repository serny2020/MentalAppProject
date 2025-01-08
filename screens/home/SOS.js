import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const SOS = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Image
          source={{ uri: "https://example.com/love-icon.png" }} // Replace with actual image URL or local asset
          style={styles.iconImage}
        />
        <Text style={styles.headerText}>
          Dear <Text style={styles.highlight}>Larry</Text>,{"\n"}
          Don’t worry, we’ll help you. {"\n"}You are not alone.{"\n"}
          <Text style={styles.highlight}>We love you. ❤️</Text>
        </Text>
      </View>

      {/* Left Column Slider */}
      <View style={styles.leftColumn}>
        <View style={styles.sliderLine}></View>
        <View style={styles.sliderCircle}></View>
      </View>

      {/* Options Section */}
      <ScrollView style={styles.optionsContainer}>
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
        <TouchableOpacity
          style={styles.optionRow}
          onPress={() =>
            navigation.navigate("SOSNavigator", { screen: "LovedOnesPage" })
          }
        >
          <Text style={styles.optionText}>
            Connect Your{" "}
            <Text style={styles.bold}>Loved Ones</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>
            Chat in Your <Text style={styles.bold}>Community</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>
            Find a <Text style={styles.bold}>Professional Therapist</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
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
  iconImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  headerText: {
    fontSize: 16,
    color: "#f39c12",
    lineHeight: 22,
    marginLeft: 40,
  },
  highlight: {
    fontWeight: "bold",
    color: "#e74c3c",
  },
  leftColumn: {
    position: "absolute",
    top: 150,
    left: 10,
    height: "75%",
    alignItems: "center",
    marginLeft: 20,
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
    marginLeft: 40, // Account for the left column slider
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
});

export default SOS;
