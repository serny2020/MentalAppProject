import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Modal
} from "react-native";
import VisibilityPickerModal from "../../../../components/discover/community/VisibilityPickerModal";

const categories = [
  "I need help", "Addiction", "School", "Friends", "Relationship", "Anxiety",
  "Self-care", "My Story", "Helpful Tips", "Self-harm", "Mental Health",
  "Depression", "Hope", "Health", "Grief", "Family", "Job", "Other",
];

const CreatePostModal = ({ visible, closeModal }) => {
  const [postText, setPostText] = useState("");

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          
          {/* Top Bar with Back and Post Button */}
          <View style={styles.topBar}>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButton}>
              <Text style={styles.postButtonText}>Post</Text>
            </TouchableOpacity>
          </View>

          {/* Header with Avatar & Visibility Picker */}
          <View style={styles.headerContainer}>
            <Image source={require("../../../../assets/image/avatar.png")} style={styles.icon} />
            <Text style={styles.header}>Write a Post</Text>
            <VisibilityPickerModal />
          </View>

          {/* Post Input */}
          <TextInput
            style={styles.textInput}
            placeholder="Write about how you feel at this moment..."
            multiline
            value={postText}
            onChangeText={setPostText}
          />

          {/* Add Emotion Button */}
          <Text style={styles.label}>Add Emotion:</Text>
          <TouchableOpacity style={styles.selectButton}>
            <Text>Select</Text>
          </TouchableOpacity>

          {/* Add Category Section */}
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
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // Dim background effect
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#f7ffcc",
    width: "90%", // Smaller width to look like a modal
    maxHeight: "90%",
    borderRadius: 15,
    padding: 16,
  },
  modalContainer: {
    backgroundColor: "#f7ffcc",
    width: "100%", // Full screen width
    height: "100%", // Full screen height
    padding: 16,
    justifyContent: "flex-start",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between", // "Back" on left, "Post" on right
    alignItems: "center",
    marginTop: 50,
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
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
});

export default CreatePostModal;
