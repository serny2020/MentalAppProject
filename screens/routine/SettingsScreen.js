import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  Feather,
  Entypo,
} from "@expo/vector-icons";

const SettingsScreen = ({ navigation }) => {
  const options = [
    { label: "Profile Setting", icon: <Ionicons name="person-circle-outline" size={24} color="#000" />, route: "ProfileSetting" },
    { label: "Content Control", icon: <Ionicons name="document-outline" size={24} color="#000" />, route: "ContentControl" },
    {
      label: "My Affirmation Collection",
      icon: <MaterialIcons name="collections-bookmark" size={24} color="#000" />,
      route: "AffirmationNavigator",
    },
    {
      label: "Feedback & Suggestions",
      icon: <Ionicons name="chatbubble-ellipses-outline" size={24} color="#000" />,
      route: "FeedbackSuggestions",
    },
    { label: "Notifications", icon: <Ionicons name="notifications-outline" size={24} color="#000" />, route: "Notifications" },
    {
      label: "Change Password",
      icon: <Ionicons name="lock-closed-outline" size={24} color="#000" />,
      route: "ChangePassword",
    },
    { label: "Change Language", icon: <Ionicons name="globe-outline" size={24} color="#000" />, route: "ChangeLanguage" },
    {
      label: "Help & Support",
      icon: <Feather name="headphones" size={24} color="#000" />,
      route: "HelpSupport",
    },
    { label: "Privacy Policy", icon: <Ionicons name="document-text-outline" size={24} color="#000" />, route: "PrivacyPolicy" },
    {
      label: "Terms and Conditions",
      icon: <FontAwesome5 name="file-alt" size={24} color="#000" />,
      route: "TermsConditions",
    },
    { label: "Logout", icon: <Ionicons name="log-out-outline" size={24} color="#000" />, route: "Logout" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={80} color="#000" />
      </View>

      {/* Options */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionRow}
            onPress={() => navigation.navigate(option.route)}
          >
            {option.icon}
            <Text style={styles.optionText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc", // Light yellow background
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  scrollContainer: {
    paddingVertical: 16,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  optionText: {
    fontSize: 16,
    marginLeft: 16,
    color: "#000",
  },
});

export default SettingsScreen;
