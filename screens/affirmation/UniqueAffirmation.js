import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

const UniqueAffirmation = ({ navigation, route }) => {
    const { role = "friend", traits = ["kind", "sincere", "caring", "respectful"], imageUri } = route.params || {};
  
    const handleAddToCollection = (add) => {
      if (add) {
        Alert.alert("Added", "Your affirmation has been added to the collection!");
      } else {
        Alert.alert("Not Added", "You chose not to add this affirmation.");
      }
    };
  
    return (
      <View style={styles.container}>
        {/* Header */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
  
        {/* Title */}
        <Text style={styles.title}>Here is your unique affirmation:</Text>
  
        {/* Affirmation Card */}
        <View style={styles.card}>
          <Text style={styles.roleText}>As a <Text style={styles.highlight}>{role}</Text>,</Text>
          {imageUri && (
            <Image
              source={{ uri: imageUri }}
              style={styles.image}
            />
          )}
          <Text style={styles.traitsText}>
            I am <Text style={styles.highlight}>{traits.join(", ")}</Text>.
          </Text>
        </View>
  
        {/* Footer */}
        <Text style={styles.footerText}>
          Add it to your <Text style={styles.bold}>Affirmation Collection</Text>?
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.choiceButton, { backgroundColor: "#FF6961" }]} // Red Button
            onPress={() => handleAddToCollection(false)}
          >
            <Text style={styles.choiceText}>NO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.choiceButton, { backgroundColor: "#77DD77" }]} // Green Button
            onPress={() => handleAddToCollection(true)}
          >
            <Text style={styles.choiceText}>YES</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6", // Light blue background
    padding: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  backText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#000",
  },
  card: {
    backgroundColor: "#F7FFCC", // Light yellow background
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  roleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  highlight: {
    color: "#000", // Bolded color
    fontWeight: "bold",
  },
  image: {
    width: "90%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 8,
  },
  traitsText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 8,
    color: "#000",
  },
  footerText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
    color: "#000",
  },
  bold: {
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 60,
  },
  choiceButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  choiceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default UniqueAffirmation;
