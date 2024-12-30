import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AffirmationPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={30} color="#9b59b6" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.greatJobText}>Great Job!</Text>
        <Image
          source={require("../../assets/image/CheckInFinish.png")} // Replace with your image path
          style={styles.image}
        />
        <Text style={styles.subText}>Added to your Affirmation quotes!</Text>
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
    justifyContent: "flex-start",
    marginTop: 50,
    paddingLeft: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  greatJobText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#9b59b6",
    marginBottom: 20,
  },
  image: {
    width: 150, // Adjust the size of the image
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  subText: {
    fontSize: 18,
    color: "#9b59b6",
    textAlign: "center",
  },
});

export default AffirmationPage;
