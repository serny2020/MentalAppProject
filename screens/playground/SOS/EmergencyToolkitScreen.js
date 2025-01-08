import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const EmergencyToolkitScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <MaterialIcons name="settings" size={24} color="#6A0DAD" />
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.headerText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>
        Manage your personal emergency toolkit database
      </Text>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Favorite Books */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My favorite books:</Text>
          <View style={styles.row}>
            <View style={styles.placeholderBox} />
            <View style={styles.placeholderBox} />
          </View>
        </View>

        {/* Favorite Music Playlist */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My favorite music playlist:</Text>
          <View style={styles.row}>
            <View style={styles.placeholderBox} />
          </View>
        </View>

        {/* Loved Ones Contact List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My loved ones contact list:</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.tableText}>Name</Text>
            <Text style={styles.tableText}>Contact</Text>
          </View>
          <View style={styles.placeholderBox} />
        </View>

        {/* Loved Pictures */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My loved pictures:</Text>
          <View style={styles.row}>
            <View style={styles.placeholderBox} />
            <View style={styles.placeholderBox} />
          </View>
        </View>

        {/* Favorite Exercise Videos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My favorite exercise videos:</Text>
          <View style={styles.row}>
            <View style={styles.placeholderBox} />
            <View style={styles.placeholderBox} />
          </View>
        </View>

        {/* Customization */}
        <Text style={styles.footerText}>
          Didn’t find anything works for you? No worries! Add your own
          collections here.
        </Text>
        <TouchableOpacity
          style={styles.customizeButton}
          onPress={() => navigation.navigate("CustomizeScreen")}
        >
          <Text style={styles.customizeButtonText}>Customize Yours</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#333",
  },
  scrollContent: {
    paddingBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 16,
  },
  placeholderBox: {
    backgroundColor: "#E0E0E0",
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  tableText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  footerText: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 16,
    color: "#666",
  },
  customizeButton: {
    backgroundColor: "#6A0DAD",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 8,
  },
  customizeButtonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default EmergencyToolkitScreen;
