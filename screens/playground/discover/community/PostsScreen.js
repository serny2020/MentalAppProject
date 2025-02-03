import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

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

// const PostItem = ({ item }) => (
//   <View style={styles.postContainer}>
//     <View style={styles.header}>
//       <Image source={item.avatar} style={styles.avatar} />
//       <View style={styles.userInfo}>
//         <Text style={styles.userName}>
//           {item.user} is{" "}
//           <Text style={styles.mood}>
//             {item.mood} {item.moodIcon}
//           </Text>
//         </Text>
//         <Text style={styles.category}>
//           {item.category} • {item.time}
//         </Text>
//       </View>
//     </View>
//     <Text style={styles.content}>{item.content}</Text>
//     <View style={styles.actions}>
//       <TouchableOpacity style={styles.actionButton}>
//         <FontAwesome name="comment" size={18} color="#888" />
//         <Text style={styles.actionText}>{item.comments}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.actionButton}>
//         <FontAwesome name="heart" size={18} color="#e74c3c" />
//         <Text style={styles.actionText}>{item.likes}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.actionButton}>
//         <MaterialIcons name="people" size={18} color="#888" />
//         <Text style={styles.actionText}>{item.shares}</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// );

const PostItem = ({ item }) => (
    <TouchableOpacity onPress={() => Alert.alert("Post Clicked", `You clicked on ${item.user}'s post`)}>
      <View style={styles.postContainer}>
        <View style={styles.header}>
          <Image source={item.avatar} style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{item.user} is <Text style={styles.mood}>{item.mood} {item.moodIcon}</Text></Text>
            <Text style={styles.category}>{item.category} • {item.time}</Text>
          </View>
        </View>
        <Text style={styles.content}>{item.content}</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="comment" size={18} color="#888" />
            <Text style={styles.actionText}>{item.comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome name="heart" size={18} color="#e74c3c" />
            <Text style={styles.actionText}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="people" size={18} color="#888" />
            <Text style={styles.actionText}>{item.shares}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostItem item={item} />}
      />
      <TouchableOpacity style={styles.floatingButton}>
        <FontAwesome name="plus" size={30} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7ffcc", padding: 10 },
  postContainer: {
    backgroundColor: "#ffffe0",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  header: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  userInfo: { flex: 1 },
  userName: { fontWeight: "bold", fontSize: 16 },
  mood: { color: "#555" },
  category: { color: "#888", fontSize: 12 },
  content: { marginTop: 10, fontSize: 14, color: "#333" },
  actions: { flexDirection: "row", marginTop: 10 },
  actionButton: { flexDirection: "row", alignItems: "center", marginRight: 15 },
  actionText: { marginLeft: 5, fontSize: 14, color: "#555" },
//   floatingButton: {
//     position: "absolute",
//     bottom: 20,
//     right: 20,
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   buttonImage: {
//     width: 50,
//     height: 50,
//     resizeMode: "contain",
//   },
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
