import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Matrix from "./Matrix";
import CartesianCoordinates from "../../../components/letgo/CartesianCoord";

const EisenhowerMatrix = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          // style={styles.backButton}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.centerIcon}>
          <Ionicons name="help-circle-outline" size={24} color="#000" />
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>
        Learn more about the{" "}
        <Text style={styles.boldText}>Eisenhower Matrix</Text> - a framework for
        prioritizing tasks
      </Text>


      {/* Matrix Grid */}
      <View style={styles.matrixContainer}>
        {/* <Image
          source={require("../../../assets/image/productivity/EisenMatrix.png")} // Replace with your local image path
          style={styles.image}
        /> */}
        <Matrix/>
      </View>

      {/* Example Tasks */}
      <View style={styles.additionalInfo}>
        <Text style={styles.sectionTitle}>
          Example tasks in the <Text style={styles.boldText}>"eliminate"</Text>{" "}
          quadrant can be:
        </Text>
        <Text style={styles.listItem}>• Social media</Text>
        <Text style={styles.listItem}>• Browsing online without a purpose</Text>
        <Text style={styles.listItem}>
          • Taking a survey that’s not really important
        </Text>
        <Text style={styles.listItem}>
          • Going to events we don’t really like
        </Text>
        <Text style={styles.listItem}>• Non-essential shopping</Text>
      </View>

      {/* Notes */}
      <View style={styles.additionalInfo}>
        <Text style={styles.sectionTitle}>
          Note on the <Text style={styles.boldText}>"eliminate"</Text> quadrant:
        </Text>
        <Text style={styles.paragraph}>
          • It is the easiest to understand rationally, but sometimes the
          hardest to deal with emotionally.
        </Text>
        <Text style={styles.paragraph}>
          • It’s better to just delete tasks in the “eliminate quadrant”.
          Otherwise, do these tasks only if you have completed all tasks in the
          other three quadrants.
        </Text>
      </View>

      {/* Reference */}
      <Text
        style={styles.reference}
        onPress={() =>
          Linking.openURL("https://www.spica.com/blog/the-eisenhower-matrix")
        }
      >
        Reference: https://www.spica.com/blog/the-eisenhower-matrix
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8FF96",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton:{
    // fontSize: 18,
    // color: "#000",
    // fontWeight: "bold",
  },
  centerIcon: {
    flex: 1,
    marginLeft: 120,
  },
  backText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 20,
    color: "#000",
  },
  boldText: {
    fontWeight: "bold",
  },
  matrixContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
    // marginTop: 5,
    // top: -10,
  },
  additionalInfo: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItem: {
    fontSize: 12,
    color: "#000",
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 12,
    color: "#000",
    marginBottom: 5,
  },
  reference: {
    fontSize: 12,
    color: "#0000FF",
    textDecorationLine: "underline",
  },
});

export default EisenhowerMatrix;
