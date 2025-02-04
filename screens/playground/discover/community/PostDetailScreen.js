import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import PostDetailNavigator from "../../../../navigator/discover/community/PostDetailNavigator";

const PostDetailModal = ({ visible, closeModal, post }) => {
  const [commentText, setCommentText] = useState("");

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Close Button */}
            <TouchableOpacity onPress={closeModal} style={styles.backButton}>
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            {/* Post Header */}
            <View style={styles.postHeader}>
              <Image source={post.avatar} style={styles.avatar} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>
                  <Text style={{ fontWeight: "bold" }}>{post.user}</Text> is{" "}
                  <Text style={styles.mood}>
                    {post.mood} {post.moodIcon}
                  </Text>
                </Text>
                <Text style={styles.metaInfo}>
                  {post.category} • {post.time}
                </Text>
              </View>
            </View>

            {/* Post Content */}
            <Text style={styles.postText}>{post.content}</Text>

            {/* Post Actions (Dynamic Data from Props) */}
            <View style={styles.actionsRow}>
              <TouchableOpacity style={styles.actionButton}>
                {/* <FontAwesome name="comment" size={18} color="#888" /> */}
                {/* <View style={styles.container}> */}
                <Image
                  source={require("../../../../assets/image/discover/community/comment.png")} // Path to your local image
                  style={styles.icon} // Apply custom styles
                />
                {/* </View> */}
                <Text style={styles.actionText}>{post.commentIds.length}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                {/* <FontAwesome name="heart" size={18} color="#e74c3c" /> */}
                <Image
                  source={require("../../../../assets/image/discover/community/heart.png")} // Path to your local image
                  style={styles.icon} // Apply custom styles
                />

                <Text style={styles.actionText}>{post.loveIds.length}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                {/* <MaterialIcons name="diversity-3" size={18} color="#888" /> */}
                <Image
                  source={require("../../../../assets/image/discover/community/hug.png")} // Path to your local image
                  style={styles.icon} // Apply custom styles
                />

                <Text style={styles.actionText}>{post.hugIds.length}</Text>
              </TouchableOpacity>
            </View>

            <PostDetailNavigator />

            {/* Comment Section */}
            <View style={styles.commentContainer}>
              {/* Avatar Outside Input Box */}
              <Image source={post.avatar} style={styles.commentAvatar} />

              {/* Input Box with Send Button */}
              <View style={styles.commentInputWrapper}>
                <TextInput
                  style={styles.commentInput}
                  placeholder="Write a comment..."
                  value={commentText}
                  onChangeText={setCommentText}
                  onSubmitEditing={Keyboard.dismiss} // Dismiss keyboard when "Enter" is pressed
                  returnKeyType="done"
                />

                <TouchableOpacity
                  style={styles.sendButton}
                  onPress={() => {
                    console.log("Sent comment:", commentText);
                    setCommentText(""); // Clear input after sending
                    Keyboard.dismiss(); // Hide keyboard
                  }}
                >
                  <FontAwesome name="paper-plane" size={20} color="#888" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#f7ffcc",
    width: "100%", // Full screen width
    height: "100%", // Full screen height
    padding: 16,
    justifyContent: "flex-start",
  },
  backButton: {
    marginBottom: 10,
    marginTop: 50,
  },
  backText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
  },
  mood: {
    fontWeight: "bold",
    color: "#e74c3c",
  },
  metaInfo: {
    fontSize: 12,
    color: "#888",
  },
  postText: {
    fontSize: 16,
    marginBottom: 10,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#555",
  },
  commentContainer: {
    flexDirection: "row", // Align avatar and input horizontally
    alignItems: "center",
    position: "absolute",
    bottom: 20, // Keeps it at the bottom
    left: 10,
    right: 10,
  },
  commentAvatar: {
    width: 35, // Avatar size
    height: 35,
    borderRadius: 17.5,
    marginRight: 10, // Space between avatar and input
  },
  commentInputWrapper: {
    flexDirection: "row", // Align input and send button horizontally
    flex: 1, // Makes input take full available space
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: "center",
  },
  commentInput: {
    flex: 1,
    fontSize: 14,
  },
  sendButton: {
    padding: 10,
  },
  icon: {
    width: 20, // Set the width
    height: 20, // Set the height
    resizeMode: "contain", // Keep the aspect ratio
  },
});

export default PostDetailModal;
