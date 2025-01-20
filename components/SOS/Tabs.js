import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Tabs = ({ selectedTab, setSelectedTab, styles }) => {
  return (
    <View style={styles.tabsContainer}>
      {/* General Tab */}
      <TouchableOpacity
        style={[styles.tab, selectedTab === "General" && styles.activeTab]}
        onPress={() => setSelectedTab("General")}
      >
        <Text
          style={[
            styles.tabText,
            selectedTab === "General" && styles.activeTabText,
          ]}
        >
          General Tips
        </Text>
      </TouchableOpacity>

      {/* Multimedia Tab */}
      <TouchableOpacity
        style={[styles.tab, selectedTab === "Multimedia" && styles.activeTab]}
        onPress={() => setSelectedTab("Multimedia")}
      >
        <Text
          style={[
            styles.tabText,
            selectedTab === "Multimedia" && styles.activeTabText,
          ]}
        >
          Multimedia Toolbox
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tabs;
