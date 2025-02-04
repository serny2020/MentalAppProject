// import React, { useState } from "react";
// import {
//   View,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";
// import PostItem from "../../../../components/discover/community/PostItem";
// import CreatePostModal from "./CreatePostScreen";
// import { posts } from "../../../../data/community/posts/Posts";

// const PostsScreen = () => {
//   const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={posts}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <PostItem item={item} />}
//       />

//       {/* Floating Button to Open Create Post Modal */}
//       <TouchableOpacity
//         style={styles.floatingButton}
//         onPress={() => setModalVisible(true)} // Open Modal
//       >
//         <FontAwesome name="plus" size={30} color="#ffffff" />
//       </TouchableOpacity>
//       {/* Create Post Modal */}
//       <CreatePostModal
//         visible={modalVisible}
//         closeModal={() => setModalVisible(false)} // Close Modal
//       />

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f7ffcc",
//     padding: 10,
//   },
//   floatingButton: {
//     position: "absolute",
//     bottom: 20,
//     right: 20,
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#8e44ad",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//   },
// });

// export default PostsScreen;


import React, { useState, useContext } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import PostItem from "../../../../components/discover/community/PostItem";
import CreatePostModal from "./CreatePostScreen";
import PostsContext from "../../../../context/community/posts/PostsContext";

const PostsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const { posts, dispatch } = useContext(PostsContext); // Get posts from Context

  // Function to handle new post addition
  const handleAddPost = (newPost) => {
    dispatch({ type: "ADD_POST", payload: newPost }); // Dispatch action to add post
    setModalVisible(false); // Close modal after adding post
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts} // Use posts from Context
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
        addPost={handleAddPost} // Pass function to add post
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

