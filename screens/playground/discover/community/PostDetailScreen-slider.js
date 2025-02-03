import React, { useEffect, useState } from "react";
import { 
  View, Text, Image, TouchableOpacity, StyleSheet, Modal, Dimensions, TouchableWithoutFeedback
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Animated, { useSharedValue, withTiming, useAnimatedStyle, runOnJS } from "react-native-reanimated";

const SCREEN_WIDTH = Dimensions.get("window").width;

const PostDetailModal = ({ visible, closeModal, post }) => {
  const translateX = useSharedValue(SCREEN_WIDTH); // Start off-screen
  const [shouldRender, setShouldRender] = useState(visible); // Control rendering

  useEffect(() => {
    if (visible) {
      setShouldRender(true); // Ensure modal renders before animating
      translateX.value = withTiming(0, { duration: 300 }); // Slide in
    } else {
      translateX.value = withTiming(SCREEN_WIDTH, { duration: 300 }, () => {
        runOnJS(setShouldRender)(false); // Ensure modal closes only after animation
      });
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  if (!shouldRender) return null; // Prevents rendering before opening

  return (
    <Modal transparent visible={shouldRender} animationType="none">
      <TouchableWithoutFeedback onPress={() => (translateX.value = withTiming(SCREEN_WIDTH, { duration: 300 }, () => runOnJS(closeModal)()))}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <Animated.View style={[styles.modalContainer, animatedStyle]}>
              
              {/* Close Button */}
              <TouchableOpacity onPress={() => (translateX.value = withTiming(SCREEN_WIDTH, { duration: 300 }, () => runOnJS(closeModal)()))} style={styles.backButton}>
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

              {/* Reply Button */}
              <TouchableOpacity style={styles.replyButton}>
                <FontAwesome name="comment" size={18} color="#888" />
                <Text style={styles.replyButtonText}>Reply</Text>
              </TouchableOpacity>

            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // Dim background
    justifyContent: "flex-end", // Positions modal at bottom
    alignItems: "flex-end", // Aligns modal to right
  },
  modalContainer: {
    backgroundColor: "#f7ffcc",
    width: "80%", // 80% of screen width
    height: "100%", // Lowered modal height
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 16,
    justifyContent: "flex-start", // Lowers content
    // marginBottom: 30, // Pushes modal content down
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
});

export default PostDetailModal;
