import React, { useState } from "react";
import { 
  View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Modal 
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const PostDetailModal = ({ visible, closeModal, post }) => {
  const [replyModalVisible, setReplyModalVisible] = useState(false);
  const [replyText, setReplyText] = useState("");

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
            <Image source={post.avatar} style={styles.avatar} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>
                <Text style={{ fontWeight: "bold" }}>{post.user}</Text> is <Text style={styles.mood}>{post.mood} {post.moodIcon}</Text>
              </Text>
              <Text style={styles.metaInfo}>{post.category} • {post.time}</Text>
            </View>
          </View>

          {/* Post Content */}
          <Text style={styles.postText}>{post.content}</Text>

          {/* Reply Button (Opens Second Modal) */}
          <TouchableOpacity 
            style={styles.replyButton} 
            onPress={() => setReplyModalVisible(true)}
          >
            <FontAwesome name="comment" size={18} color="#888" />
            <Text style={styles.replyButtonText}>Reply</Text>
          </TouchableOpacity>

          {/* Second Modal (Reply Modal) */}
          <Modal visible={replyModalVisible} animationType="slide" transparent>
            <View style={styles.modalOverlay}>
              <View style={styles.replyModalContainer}>
                
                <TouchableOpacity onPress={() => setReplyModalVisible(false)} style={styles.closeReplyButton}>
                  <Text style={styles.closeReplyText}>Close</Text>
                </TouchableOpacity>

                <Text style={styles.modalTitle}>Reply to {post.user}</Text>
                
                <TextInput
                  style={styles.replyInput}
                  placeholder="Write your reply..."
                  value={replyText}
                  onChangeText={setReplyText}
                />

                <TouchableOpacity 
                  style={styles.sendReplyButton}
                  onPress={() => {
                    console.log("Reply Sent:", replyText);
                    setReplyModalVisible(false);
                    setReplyText("");
                  }}
                >
                  <Text style={styles.sendReplyText}>Send Reply</Text>
                </TouchableOpacity>

              </View>
            </View>
          </Modal>

        </View>
      </View>
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
    width: "90%",
    maxHeight: "90%",
    borderRadius: 15,
    padding: 16,
  },
  backButton: {
    marginBottom: 10,
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
  replyButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  replyButtonText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#555",
  },
  replyModalContainer: {
    backgroundColor: "#fff",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  closeReplyButton: {
    alignSelf: "flex-end",
  },
  closeReplyText: {
    fontSize: 16,
    color: "red",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  replyInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  sendReplyButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 8,
  },
  sendReplyText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default PostDetailModal;
