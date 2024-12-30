import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ChallengeTips = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={32} color="#9b59b6" />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" size={32} color="#9b59b6" />
        </TouchableOpacity>
      </View>

      {/* Tips Section */}
      <View style={styles.tipsContainer}>
        <Text style={styles.tipsHeader}>Tips on how to challenge your thoughts: <Text style={styles.tipsHeaderHighlight}>use facts</Text></Text>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>Negative thought example:</Text>
          <Text style={styles.quoteText}>
            “I can’t find a job.”
          </Text>

          <Text style={styles.tipCategory}>*Time frame: past -- present -- future</Text>
          <Text style={styles.challengeText}>
            Challenge:
            {"\n"}I found a job in the past.{"\n"}
            I just haven’t found a job currently.{"\n"}
            I will find a job soon.
          </Text>

          <Text style={styles.tipCategory}>*Point of view: me --- others/society</Text>
          <Text style={styles.challengeText}>
            Challenge:
            {"\n"}It’s not just me who can’t find a job.{"\n"}
            Most people can’t find a job recently.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    // justifyContent: "space-between",
    justifyContent: "flex-end",
    marginTop: 50,
  },
  tipsContainer: {
    marginTop: 20,
  },
  tipsHeader: {
    fontSize: 22,
    color: "#9b59b6",
    fontWeight: "bold",
    textAlign: "center",
  },
  tipsHeaderHighlight: {
    textDecorationLine: "underline",
  },
  exampleBox: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  exampleText: {
    fontSize: 18,
    color: "#9b59b6",
    fontWeight: "bold",
    marginBottom: 10,
  },
  quoteText: {
    fontSize: 18,
    color: "#333",
    fontStyle: "italic",
    marginBottom: 15,
  },
  tipCategory: {
    fontSize: 16,
    color: "#9b59b6",
    fontWeight: "bold",
    marginTop: 10,
  },
  challengeText: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
    lineHeight: 22,
  },
});

export default ChallengeTips;
