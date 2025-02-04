const posts = [
  {
    id: "1",
    userId: "u1",
    user: "Raven",
    //   avatar: require("./assets/avatar1.png"),
    mood: "Depressed",
    moodIcon: "😞",
    category: "Relationship",
    time: "5 minutes ago",
    content:
      "I hate myself so much. My life is a joke. I am not able to take care of anyone. I don’t know what to do now. I feel so lonely and hopeless.",
    commentIds: ["c1", "c2", "c3", "c4", "c5"],
    loveIds: ["u3", "u4", "u5"],
    hugIds: ["u6", "u7"],
    shareCount: 4,
  },
  {
    id: "2",
    userId: "u2",
    user: "Maggie",
    //   avatar: require("./assets/avatar1.png"),
    mood: "Worried",
    moodIcon: "😟",
    category: "School work",
    time: "15 minutes ago",
    content:
      "I just started my first semester at college. I am so scared of people around me. I am afraid of failing all my exams.",
    commentIds: ["c6", "c7"],
    loveIds: ["u8", "u9", "u10", "u11"],
    hugIds: ["u12", "u13"],
    shareCount: 5,
  },
  {
    id: "3",
    userId: "u3",
    user: "Allison",
    //   avatar: require("./assets/avatar1.png"),
    mood: "Relieved",
    moodIcon: "😇",
    category: "Family",
    time: "17 minutes ago",
    content:
      "Finally cleared all the misunderstandings up. I feel so much more relieved. That was very stressful. Hmm, feel good now.",
    commentIds: ["c8"],
    loveIds: ["u14", "u15", "u16", "u17", "u18", "u19", "u20", "u21"],
    hugIds: ["u22"],
    shareCount: 1,
  },
];

const comments = [
  {
    id: "c1",
    postId: "1",
    userId: "u8",
    content: "Hang in there, Raven. You're not alone!",
    time: "4 minutes ago",
    loveIds: ["u9", "u10"],
    replyIds: ["r1"],
  },
  {
    id: "c6",
    postId: "2",
    userId: "u11",
    content: "It gets better, Maggie. You'll find your pace soon!",
    time: "12 minutes ago",
    loveIds: ["u14"],
    replyIds: [],
  },
  {
    id: "c7",
    postId: "2",
    userId: "u15",
    content: "If you need any tips, feel free to ask!",
    time: "10 minutes ago",
    loveIds: [],
    replyIds: [],
  },
  {
    id: "c8",
    postId: "3",
    userId: "u16",
    content: "That’s great to hear! Family is everything.",
    time: "15 minutes ago",
    loveIds: ["u17", "u18"],
    replyIds: [],
  },
];

const replies = [
  {
    id: "r1",
    commentId: "c1",
    userId: "u1",
    content: "Thanks for the support. It means a lot.",
    time: "3 minutes ago",
    loveIds: ["u12"],
  },
];

const reactions = [
  { id: "reaction1", postId: "1", userId: "u4", type: "love" },
  { id: "reaction2", postId: "2", userId: "u9", type: "hug" },
  { id: "reaction3", postId: "3", userId: "u18", type: "love" },
];

export { posts, comments, replies, reactions };
