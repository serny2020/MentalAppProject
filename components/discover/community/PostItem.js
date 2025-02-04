import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import PostDetailModal from "../../../screens/playground/discover/community/PostDetailScreen";

const PostItem = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      {/* Post Item */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.postContainer}>
          <View style={styles.header}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.userInfo}>
              <View style={styles.userRow}>
                <Text style={styles.userName}>{item.user}</Text>
                <Text style={styles.isText}> is </Text>
                <Text style={styles.mood}>
                  {item.mood} {item.moodIcon}
                </Text>
              </View>
              <Text style={styles.category}>
                {item.category} • {item.time}
              </Text>
            </View>
          </View>
          <Text style={styles.content}>{item.content}</Text>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton}>
              {/* <FontAwesome name="comment" size={18} color="#888" /> */}
              <Image
                source={require("../../../assets/image/discover/community/comment.png")} // Path to your local image
                style={styles.icon} // Apply custom styles
              />
              <Text style={styles.actionText}>{item.comments}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              {/* <FontAwesome name="heart" size={18} color="#e74c3c" /> */}
              <Image
                source={require("../../../assets/image/discover/community/heart.png")} // Path to your local image
                style={styles.icon} // Apply custom styles
              />

              <Text style={styles.actionText}>{item.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Image
                source={require("../../../assets/image/discover/community/hug.png")} // Path to your local image
                style={styles.icon} // Apply custom styles
              />

              {/* <MaterialIcons name="people" size={18} color="#888" /> */}
              <Text style={styles.actionText}>{item.shares}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      {/* Modal Component */}
      <PostDetailModal
        visible={modalVisible}
        closeModal={() => setModalVisible(false)}
        post={item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "#ffffe0",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
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
    fontWeight: "bold",
    fontSize: 16,
  },
  mood: {
    // color: "#555",
    color: "#e74c3c",
    fontWeight: "bold",
  },
  category: {
    color: "#888",
    fontSize: 12,
  },
  content: {
    marginTop: 10,
    fontSize: 14,
    color: "#333",
  },
  actions: {
    flexDirection: "row",
    marginTop: 10,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  actionText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#555",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

export default PostItem;
