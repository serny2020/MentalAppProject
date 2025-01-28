import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ThreeKsTechniqueScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("StepOneScreen")}>
          <Text style={styles.headerText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Try Our 3 Ks Technique!</Text>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.listItem}>
          • <Text style={styles.bold}>RANK</Text> all the things to be done
        </Text>
        <Text style={styles.listItem}>
          • <Text style={styles.bold}>PICK</Text> the most important thing you
          want to do
        </Text>
        <Text style={styles.listItem}>
          • <Text style={styles.bold}>BREAK</Text> it into manageable pieces
        </Text>
      </View>

      {/* Image */}
      <Image
        source={require("../../../assets/image/productivity/3Ks.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9FBC0", // Light green background
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#000",
  },
  content: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  listItem: {
    fontSize: 16,
    marginVertical: 5,
    color: "#000",
  },
  bold: {
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
});

export default ThreeKsTechniqueScreen;
