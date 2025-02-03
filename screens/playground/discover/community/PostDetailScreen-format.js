import React, { useState } from "react";
import { 
  View, Text, Image, TouchableOpacity, FlatList, TextInput, StyleSheet, Modal
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const commentsData = [
  { id: "1", user: "Mike", time: "1h ago", comment: "You are not alone. Be strong.", likes: 4 },
  { id: "2", user: "Anna", time: "3h ago", comment: "Hey, wanna talk? I'm here for you.", likes: 7 },
  { id: "3", user: "Cody", time: "8h ago", comment: "I'm really sorry you're feeling this way. You're important.", likes: 9 },
];

const PostDetailModal = ({ visible, closeModal }) => {
  const [commentText, setCommentText] = useState("");

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          
          {/* Close Button */}
          <TouchableOpacity onPress={closeModal} style={styles.backButton}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          {/* Post Header */}
          <View style={styles.postHeader}>
            {/* <Image source={require("../../../../assets/avatar.png")} style={styles.avatar} /> */}
            <View style={styles.userInfo}>
              <Text style={styles.userName}>
                <Text style={{ fontWeight: "bold" }}>Raven</Text> is <Text style={styles.mood}>Depressed 😞</Text>
              </Text>
              <Text style={styles.metaInfo}>Relationship • 5 minutes ago</Text>
            </View>
            <TouchableOpacity>
              <MaterialIcons name="more-vert" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* Post Content */}
          <Text style={styles.postText}>
            I hate myself so much. My life is a joke. I feel so lonely and hopeless.
          </Text>

          {/* Post Actions */}
          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome name="comment" size={18} color="#888" />
              <Text style={styles.actionText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome name="heart" size={18} color="#e74c3c" />
              <Text style={styles.actionText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <MaterialIcons name="people" size={18} color="#888" />
              <Text style={styles.actionText}>4</Text>
            </TouchableOpacity>
          </View>

          {/* Comments Section */}
          <FlatList
            data={commentsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.commentContainer}>
                {/* <Image source={require("../../../../assets/avatar1.png")} style={styles.commentAvatar} /> */}
                <View style={styles.commentContent}>
                  <Text style={styles.commentHeader}>
                    <Text style={{ fontWeight: "bold" }}>{item.user}</Text>{" "}
                    <Text style={styles.commentTime}>{item.time}</Text>
                  </Text>
                  <Text style={styles.commentText}>{item.comment}</Text>
                  <View style={styles.commentActions}>
                    <TouchableOpacity>
                      <Text style={styles.replyText}>Reply</Text>
                    </TouchableOpacity>
                    <Text style={styles.commentLikes}>{item.likes} ❤️</Text>
                  </View>
                </View>
              </View>
            )}
          />

          {/* Comment Input */}
          <View style={styles.commentInputContainer}>
            {/* <Image source={require("../../../../assets/user_avatar.png")} style={styles.commentInputAvatar} /> */}
            <TextInput
              style={styles.commentInput}
              placeholder="Say something to Raven..."
              value={commentText}
              onChangeText={setCommentText}
            />
            <TouchableOpacity style={styles.sendButton}>
              {/* <Image source={require("../../../../assets/send_icon.png")} style={styles.sendIcon} /> */}
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // Dim background
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#f7ffcc",
    width: "100%", // Full screen width
    height: "100%", // Full screen height
    padding: 16,
  },
  backButton: {
    marginBottom: 10,
  },
  backText: {
    marginTop: 50,
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
    flexDirection: "row",
    marginBottom: 15,
  },
  commentAvatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  commentHeader: {
    fontSize: 14,
  },
  commentTime: {
    fontSize: 12,
    color: "#888",
  },
  commentText: {
    fontSize: 14,
    marginVertical: 5,
  },
  commentActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  replyText: {
    color: "blue",
  },
  commentLikes: {
    fontSize: 14,
  },
  commentInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
  },
  commentInputAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  commentInput: {
    flex: 1,
    fontSize: 14,
  },
  sendButton: {
    padding: 10,
  },
  sendIcon: {
    width: 25,
    height: 25,
  },
});

export default PostDetailModal;
