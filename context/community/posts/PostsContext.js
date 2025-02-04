import React, { createContext, useReducer } from "react";
import { posts } from "../../../data/community/posts/posts";
const initialPosts = posts

const PostsContext = createContext();

// Reducer function for managing post actions
const postsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...state]; // Add new post at the beginning

    case "ADD_LIKE":
      return state.map((post) =>
        post.id === action.payload
          ? { ...post, loveIds: [...post.loveIds, action.userId] }
          : post
      );

    case "ADD_HUG":
      return state.map((post) =>
        post.id === action.payload
          ? { ...post, hugIds: [...post.hugIds, action.userId] }
          : post
      );

    case "ADD_COMMENT":
      return state.map((post) =>
        post.id === action.payload.postId
          ? { ...post, commentIds: [...post.commentIds, action.payload.commentId] }
          : post
      );

    default:
      return state;
  }
};

// Context Provider
export const PostsProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(postsReducer, initialPosts);

  return (
    <PostsContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
