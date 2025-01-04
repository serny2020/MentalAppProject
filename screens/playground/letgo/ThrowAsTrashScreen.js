import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  PanResponder,
  Animated,
} from "react-native";

const ThrowAsTrashScreen = ({navigation}) => {
  const [isDraggedToTrash, setIsDraggedToTrash] = useState(false);
  const [pan, setPan] = useState(new Animated.ValueXY());

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (e, gestureState) => {
      const { moveX, moveY } = gestureState;
      if (moveX > 150 && moveY > 400) {
        setIsDraggedToTrash(true); // Assume trash can is in bottom-middle area
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const handleEmptyTrash = () => {
    console.log("Trash emptied!");
    setIsDraggedToTrash(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}onPress={() => navigation.goBack()}>Back</Text>
        <Text style={styles.headerText}>Exit</Text>
      </View>

      {/* Title and Description */}
      <Text style={styles.title}>Throw them as trash</Text>
      <Text style={styles.description}>
        Everyone has down times and negative thoughts. These thoughts cannot
        define who you are. Let them go. <Text style={styles.boldText}>Drag</Text> the sheet to the trash can, then click on the <Text style={styles.boldText}>Empty</Text> button!
      </Text>

      {/* Negative Thoughts (Draggable) */}
      {!isDraggedToTrash ? (
        <Animated.View
          {...panResponder.panHandlers}
          style={[styles.thoughtsBox, pan.getLayout()]}
        >
          <Text style={styles.thoughtText}>
            "I’m not good enough to succeed at anything."
          </Text>
          <Text style={styles.thoughtText}>
            "Everyone else is more talented than I am."
          </Text>
          <Text style={styles.thoughtText}>
            "I’ll never find someone who truly loves me."
          </Text>
          <Text style={styles.thoughtText}>
            "Everything I do is pointless."
          </Text>
          <Text style={styles.thoughtText}>
            "The world is against me."
          </Text>
          <Text style={styles.thoughtText}>
            "My life will never get better."
          </Text>
          <Text style={styles.thoughtText}>
            "I’m too broken to be fixed."
          </Text>
        </Animated.View>
      ) : (
        <Text style={styles.trashText}>Thoughts are in the trash can!</Text>
      )}

      {/* Trash Can */}
      <Image
        source={require("../../../assets/image/letgo/TrashCan.png")}
        style={styles.trashCan}
      />

      {/* Empty Button */}
      <TouchableOpacity style={styles.emptyButton} onPress={handleEmptyTrash}>
        <Text style={styles.buttonText}>Empty</Text>
      </TouchableOpacity>

      {/* Sound Button */}
      <TouchableOpacity style={styles.soundButton} onPress={() => console.log("Toggle sound")}>
        <Text style={styles.soundText}>🔊</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7E9A0",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#000",
    marginBottom: 16,
  },
  boldText: {
    fontWeight: "bold",
  },
  thoughtsBox: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignSelf: "center",
  },
  thoughtText: {
    fontSize: 14,
    color: "#000",
    marginBottom: 8,
  },
  trashText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginBottom: 16,
  },
  trashCan: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 16,
  },
  emptyButton: {
    backgroundColor: "#8BC34A",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  soundButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  soundText: {
    fontSize: 24,
  },
});

export default ThrowAsTrashScreen;
