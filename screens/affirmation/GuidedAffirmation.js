import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
// import * as ImagePicker from "expo-image-picker";

const GuidedAffirmation = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState("");
  const [customRole, setCustomRole] = useState("");
  const [selectedTraits, setSelectedTraits] = useState([]);
  const [customTrait, setCustomTrait] = useState("");
  const [image, setImage] = useState(null);

  const roles = ["friend", "teacher", "daughter", "parent", "student", "partner", "son", "co-worker"];
  const traits = ["considerate", "fun", "sincere", "responsible", "respectful", "kind"];

  const handleRoleSelection = (role) => setSelectedRole(role);

  const handleTraitSelection = (trait) => {
    if (selectedTraits.includes(trait)) {
      setSelectedTraits(selectedTraits.filter((t) => t !== trait));
    } else if (selectedTraits.length < 5) {
      setSelectedTraits([...selectedTraits, trait]);
    } else {
      Alert.alert("Limit Reached", "You can only select up to 5 traits.");
    }
  };

  const handleImagePicker = async () => {
    // const result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });
    // if (!result.canceled) setImage(result.uri);
  };

  const handleCamera = async () => {
    // const permission = await ImagePicker.requestCameraPermissionsAsync();
    // if (permission.granted) {
    //   const result = await ImagePicker.launchCameraAsync();
    //   if (!result.canceled) setImage(result.uri);
    // } else {
    //   Alert.alert("Permission Denied", "Camera access is required to take a photo.");
    // }
  };

  const handleDone = () => {
    const role = customRole || selectedRole;
    const traits = [...selectedTraits, customTrait].filter(Boolean);
    navigation.navigate("UniqueAffirmation", {
        role,
        traits,
        // imageUri: image, // Assuming `image` contains the URI of the selected image
      });
    // Alert.alert("Submission Complete", `Role: ${role}\nTraits: ${traits.join(", ")}\nImage: ${image || "No image selected"}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Guided Affirmation</Text>
        <TouchableOpacity onPress={handleDone}>
          <Text style={styles.headerText}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Role Section */}
      <Text style={styles.sectionTitle}>Pick one of the roles that you have been enjoying playing in your daily life:</Text>
      <View style={styles.rolesContainer}>
        <Text style={styles.roleLabel}>As a</Text>
        {roles.map((role) => (
          <TouchableOpacity
            key={role}
            style={[
              styles.roleButton,
              selectedRole === role && styles.selectedRoleButton,
            ]}
            onPress={() => handleRoleSelection(role)}
          >
            <Text style={styles.roleButtonText}>{role}</Text>
          </TouchableOpacity>
        ))}
        <TextInput
          style={styles.input}
          placeholder="other:"
          placeholderTextColor="#A9A9A9"
          value={customRole}
          onChangeText={setCustomRole}
        />
      </View>

      {/* Upload Section */}
      <Text style={styles.sectionTitle}>
        Upload a picture of you or take a photo with your smile face :)
      </Text>
      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadButton} onPress={handleImagePicker}>
          <Text style={styles.uploadButtonText}>upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadButton} onPress={handleCamera}>
          <Text style={styles.uploadButtonText}>camera</Text>
        </TouchableOpacity>
      </View>

      {/* Traits Section */}
      <Text style={styles.sectionTitle}>
        Select 3-5 words to describe your role positively:
      </Text>
      <View style={styles.traitsContainer}>
        <Text style={styles.roleLabel}>I am</Text>
        {traits.map((trait) => (
          <TouchableOpacity
            key={trait}
            style={[
              styles.traitButton,
              selectedTraits.includes(trait) && styles.selectedTraitButton,
            ]}
            onPress={() => handleTraitSelection(trait)}
          >
            <Text style={styles.traitButtonText}>{trait}</Text>
          </TouchableOpacity>
        ))}
        <TextInput
          style={styles.input}
          placeholder="other:"
          placeholderTextColor="#A9A9A9"
          value={customTrait}
          onChangeText={setCustomTrait}
        />
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
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  rolesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  roleLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  roleButton: {
    padding: 8,
    margin: 4,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
  },
  selectedRoleButton: {
    backgroundColor: "#B9FBC0",
  },
  roleButtonText: {
    fontSize: 16,
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 8,
    margin: 4,
    flex: 1,
  },
  uploadContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  uploadButton: {
    backgroundColor: "#F5F5F5",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    width: "48%",
  },
  uploadButtonText: {
    fontSize: 16,
    color: "#000",
  },
  traitsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  traitButton: {
    padding: 8,
    margin: 4,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
  },
  selectedTraitButton: {
    backgroundColor: "#B9FBC0",
  },
  traitButtonText: {
    fontSize: 16,
    color: "#000",
  },
});

export default GuidedAffirmation;
