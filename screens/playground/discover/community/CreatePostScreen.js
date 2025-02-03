import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import VisibilityPickerModal from "../../../../components/discover/community/VisibilityPickerModal";

const categories = [
  "I need help",
  "Addiction",
  "School",
  "Friends",
  "Relationship",
  "Anxiety",
  "Self-care",
  "My Story",
  "Helpful Tips",
  "Self-harm",
  "Mental Health",
  "Depression",
  "Hope",
  "Health",
  "Grief",
  "Family",
  "Job",
  "Other",
];

const CreatePostScreen = () => {
  const navigation = useNavigation();
  const [postText, setPostText] = useState("");
//   const [visibility, setVisibility] = useState("Public");

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity> */}

<View style={styles.topBar}>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Text style={styles.backText}>Back</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.postButton}>
    <Text style={styles.postButtonText}>Post</Text>
  </TouchableOpacity>
</View>

      <View style={styles.headerContainer}>
        <Image source={require("../../../../assets/image/avatar.png")} style={styles.icon} />
        <Text style={styles.header}>Write a Post</Text>
        <VisibilityPickerModal />
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Write about how you feel at this moment..."
        multiline
        value={postText}
        onChangeText={setPostText}
      />

      <Text style={styles.label}>Add Emotion:</Text>
      <TouchableOpacity style={styles.selectButton}>
        <Text>Select</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Add Category:</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryButton}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
    padding: 16,
  },
  backText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end", // Aligns content to the right
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10, // Adds space between modal and text
    flex: 1, // Allows text to take available space
    textAlign: "center", // Moves the text to the right
  },
  icon: {
    width: 30, // Adjust as needed
    height: 30,
    marginLeft: 25, // Adds space between text and icon
  },
  dropdownContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  textInput: {
    backgroundColor: "#e0e0e0",
    height: 100,
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    textAlignVertical: "top",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
  selectButton: {
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  categoryButton: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 8,
  },
  postButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
topBar: {
    flexDirection: "row",
    justifyContent: "space-between", // Aligns "Back" to the left and "Post" to the right
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  postButton: {
    // backgroundColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  
});


export default CreatePostScreen;
