import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  route,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import themes from "../../data/affirmation-background"

const ChangeBackgroundScreen = ({ navigation, route }) => {
  const { updateBackgroundImage } = route.params;
  const [selectedTheme, setSelectedTheme] = useState(null);

  const handleSelectTheme = (theme) => {
    setSelectedTheme(theme);
  };

  const handleDone = () => {
    if (selectedTheme) {
      updateBackgroundImage(selectedTheme.image); // Set the background image
      navigation.goBack();
    } else {
      Alert.alert("No Theme Selected", "Please select a theme before proceeding.");
    }
  };
  
  const handleUpload = () => {
    Alert.alert("Upload Background", "This feature is under development!");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
        <Ionicons name="layers-outline" size={24} color="#000" />
        <TouchableOpacity onPress={handleDone}>
          <Text style={styles.doneButton}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Change the background theme:</Text>

      {/* Themes */}
      <View style={styles.themeGrid}>
        {themes.map((theme, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.themeOption,
              selectedTheme === theme && styles.selectedTheme,
            ]}
            onPress={() => handleSelectTheme(theme)}
          >
            <Image source={theme.image} style={styles.themeImage} />
            <Text style={styles.themeText}>{theme.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Upload Option */}
      <Text style={styles.uploadText}>
        Didn’t like any of these, no worries! Upload your own background picture
        here!
      </Text>
      <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
        <Text style={styles.uploadButtonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFD6E0", // Light pink background
      padding: 16,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },
    cancelButton: {
      fontSize: 16,
      color: "#000",
      textDecorationLine: "underline",
    },
    doneButton: {
      fontSize: 16,
      color: "#000",
      textDecorationLine: "underline",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 16,
      textAlign: "center",
      color: "#000",
    },
    themeGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginBottom: 16,
    },
    themeOption: {
      flexBasis: "48%", // Ensure two items per row with some spacing
      alignItems: "center",
      marginBottom: 16,
      borderRadius: 8,
      overflow: "hidden",
      borderWidth: 2,
      borderColor: "transparent",
    },
    selectedTheme: {
      borderColor: "#000",
    },
    themeImage: {
      width: "100%",
      height: 220,
      borderRadius: 8,
    },
    themeText: {
      fontSize: 14,
      fontWeight: "bold",
      marginTop: 8,
      color: "#000",
      textAlign: "center",
    },
    uploadText: {
      textAlign: "center",
      fontSize: 14,
      marginBottom: 16,
      color: "#000",
    },
    uploadButton: {
      backgroundColor: "#D3D3D3",
      paddingVertical: 12,
      paddingHorizontal: 24,
      alignSelf: "center",
      borderRadius: 8,
    },
    uploadButtonText: {
      fontSize: 16,
      color: "#000",
    },
  });
  
export default ChangeBackgroundScreen;
