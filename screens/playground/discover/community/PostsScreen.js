import React, { useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import PostItem from "../../../../components/discover/community/PostItem";
import CreatePostModal from "./CreatePostScreen";

const posts = [
  {
    id: "1",
    user: "Raven",
    mood: "Depressed",
    moodIcon: "😞",
    category: "Relationship",
    time: "5 minutes ago",
    content:
      "I hate myself so much. My life is a joke. I am not able to take care of anyone. I don’t know what to do now. I feel so lonely and hopeless.",
    comments: 5,
    likes: 3,
    shares: 4,
    // avatar: require("./assets/avatar1.png"),
  },
  {
    id: "2",
    user: "Maggie",
    mood: "Worried",
    moodIcon: "😟",
    category: "School work",
    time: "15 minutes ago",
    content:
      "I just started my first semester at college. I am so scared of people around me. I am afraid of failing all my exams.",
    comments: 2,
    likes: 4,
    shares: 5,
    // avatar: require("./assets/avatar2.png"),
  },
  {
    id: "3",
    user: "Allison",
    mood: "Relieved",
    moodIcon: "😇",
    category: "Family",
    time: "17 minutes ago",
    content:
      "Finally cleared all the misunderstandings up. I feel so much more relieved. That was very stressful. Hmm, feel good now.",
    comments: 1,
    likes: 8,
    shares: 1,
    // avatar: require("./assets/avatar3.png"),
  },
];

const PostsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostItem item={item} />}
      />

      {/* Floating Button to Open Create Post Modal */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)} // Open Modal
      >
        <FontAwesome name="plus" size={30} color="#ffffff" />
      </TouchableOpacity>
      {/* Create Post Modal */}
      <CreatePostModal
        visible={modalVisible}
        closeModal={() => setModalVisible(false)} // Close Modal
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
    padding: 10,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8e44ad",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default PostsScreen;
