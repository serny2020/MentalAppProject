import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Alert, // Import Alert
} from "react-native";
import VisibilityPickerModal from "../../../../components/discover/community/VisibilityPickerModal";
import AddEmotionModal from "./AddEmotionScreen";
import CategorySelector from "./CategorySelector";
import PostsContext from "../../../../context/community/posts/PostsContext";

const CreatePostModal = ({ visible, closeModal }) => {
  const [postText, setPostText] = useState("");
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [emotionModalVisible, setEmotionModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Positive");

  // Get the dispatch function from PostsContext
  const { dispatch } = useContext(PostsContext);

  // Function to handle the creation of a new post
  const handlePost = () => {
    // Sanity check: Ensure all required fields are selected
    if (!postText.trim()) {
      Alert.alert("Missing Content", "Please write something before posting.");
      return;
    }

    if (!selectedEmotion) {
      Alert.alert("Missing Emotion", "Please select an emotion before posting.");
      return;
    }

    if (!selectedCategory) {
      Alert.alert("Missing Category", "Please select a category before posting.");
      return;
    }

    console.log(selectedEmotion);

    const newPost = {
      id: String(new Date().getTime()), // Generate a unique id (consider using a UUID generator for production)
      userId: "u1", // Replace with the current user's id if available
      user: "You", // Replace with the current user's name if available
      mood: selectedEmotion.mood,
      moodIcon: selectedEmotion.moodIcon,
      category: selectedCategory,
      time: "Just now", // For a more dynamic time display, integrate a date formatting library
      content: postText,
      commentIds: [],
      loveIds: [],
      hugIds: [],
    };

    // Dispatch the ADD_POST action with the new post as the payload
    dispatch({ type: "ADD_POST", payload: newPost });

    // Optionally clear the input fields and close the modal
    setPostText("");
    setSelectedEmotion(null);
    setSelectedCategory("Positive");
    closeModal();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            {/* Attach the handlePost function to the Post button */}
            <TouchableOpacity style={styles.postButton} onPress={handlePost}>
              <Text style={styles.postButtonText}>Post</Text>
            </TouchableOpacity>
          </View>

          {/* Header */}
          <View style={styles.headerContainer}>
            <Image
              source={require("../../../../assets/image/avatar.png")}
              style={styles.icon}
            />
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

          {/* Emotion Picker */}
          <Text style={styles.label}>Add Emotion:</Text>
          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => setEmotionModalVisible(true)}
          >
            <Text>
              {selectedEmotion
                ? `${selectedEmotion.moodIcon} ${selectedEmotion.mood}`
                : "Select Emotion"}
            </Text>
          </TouchableOpacity>

          {/* Add Category Section */}
          <CategorySelector
            selectedCategory={selectedCategory}
            onSelectCategory={(category) => setSelectedCategory(category)}
          />

          {/* Emotion Picker Modal */}
          <AddEmotionModal
            visible={emotionModalVisible}
            closeModal={() => setEmotionModalVisible(false)}
            onSelectEmotion={(emotion) => setSelectedEmotion(emotion)}
          />
        </View>
      </View>
    </Modal>
  );
};

// STYLES
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#f7ffcc",
    width: "100%",
    height: "100%",
    padding: 16,
    justifyContent: "flex-start",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginLeft: 50,
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
});

export default CreatePostModal;
