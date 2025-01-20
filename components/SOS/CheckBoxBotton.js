import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CheckBoxBotton = ({
  selectedTab,
  selectedTools,
  tools,
  onPress,
  isSelectAll,
  styles, // Pass styles from the parent component
}) => {
  // Determine button state (background color and disabled state)
  const isDisabled =
    selectedTab === "General"
      ? isSelectAll
        ? selectedTools.filter((tool) =>
            tools.some((t) => t.name === tool.name)
          ).length === tools.length // Select All disabled if all tools are selected
        : !selectedTools.some((tool) =>
            tools.some((t) => t.name === tool.name)
          ) // Deselect All disabled if none are selected
      : isSelectAll
      ? selectedTools.filter((tool) =>
          tools.some((t) => t.name === tool.name)
        ).length === tools.length
      : !selectedTools.some((tool) =>
          tools.some((t) => t.name === tool.name)
        );

  const backgroundColor = isSelectAll
    ? selectedTab === "General"
      ? selectedTools.filter((tool) =>
          tools.some((t) => t.name === tool.name)
        ).length < tools.length
        ? "#6A0DAD"
        : "#B085DA"
      : selectedTools.filter((tool) =>
          tools.some((t) => t.name === tool.name)
        ).length < tools.length
      ? "#6A0DAD"
      : "#B085DA"
    : selectedTab === "General"
    ? selectedTools.some((tool) =>
        tools.some((t) => t.name === tool.name)
      )
      ? "#6A0DAD"
      : "#B085DA"
    : selectedTools.some((tool) =>
        tools.some((t) => t.name === tool.name)
      )
    ? "#6A0DAD"
    : "#B085DA";

  return (
    <TouchableOpacity
      style={[
        styles.actionButton,
        {
          backgroundColor,
        },
      ]}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Text style={styles.actionButtonText}>
        {isSelectAll ? "Select All" : "Deselect All"}
      </Text>
    </TouchableOpacity>
  );
};

export default CheckBoxBotton;
