import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AffirmationContext } from "../../context/AffirmationContext";
import { useContext } from "react";

const ConfirmAffirmationScreen = ({ route, navigation }) => {
  const { selections } = route.params; // Get the passed data
  const { addAffirmation, selectedAffirmations } = useContext(AffirmationContext);
  console.log("Context data:", selectedAffirmations);
  const handleNoPress = () => {
    // Handle the "NO" button press
    // console.log("User selected NO");
    // navigation.goBack();
    navigation.reset({
      index: 0, // Sets the position of the new screen in the stack
      routes: [{ name: "AffirmationCollection" }], // Replace stack with this route
    });

  };

  const handleYesPress = () => {
    // Store all selections into context
    selections.forEach((selection) => addAffirmation(selection));
    console.log("User selected YES");
  
    // Reset navigation and navigate to AffirmationCollection
    navigation.reset({
      index: 0, // Sets the position of the new screen in the stack
      routes: [{ name: "AffirmationCollection" }], // Replace stack with this route
    });
  };
  

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.headerText}>Exit</Text>
        </TouchableOpacity>
      </View>

      {/* Confirmation Text */}
      <Text style={styles.confirmationText}>
        Would you like to add the <Text style={styles.boldText}>{selections.length}</Text> selected Affirmation Images to your{" "}
        <Text style={styles.boldText}>Affirmation Collection</Text>?
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.noButton]}
          onPress={handleNoPress}
        >
          <Text style={styles.buttonText}>NO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.yesButton]}
          onPress={handleYesPress}
        >
          <Text style={styles.buttonText}>YES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8D7DA", // Light pink background
    paddingHorizontal: 16,
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  confirmationText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
    color: "#000",
  },
  boldText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  noButton: {
    backgroundColor: "#FF6961", // Red
  },
  yesButton: {
    backgroundColor: "#77DD77", // Green
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default ConfirmAffirmationScreen;
