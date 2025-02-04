import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from "../../../screens/playground/discover/community/PostsScreen";
import CreatePostScreen from "../../../screens/playground/discover/community/CreatePostScreen";
import { PostsProvider } from "../../../context/community/posts/PostsContext";

const Stack = createStackNavigator();

const PostsNavigator = () => {
  return (
    <PostsProvider>
    <Stack.Navigator initialRouteName="PostsScreen">
      <Stack.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="CreatePostScreen"
        component={CreatePostScreen}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
    </PostsProvider>
  );
};

export default PostsNavigator;
