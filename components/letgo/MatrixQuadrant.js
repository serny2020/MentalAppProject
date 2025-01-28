import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Quadrant = ({ title, color, tasks, onAddTask }) => {
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim()) {
      onAddTask(input);
      setInput("");
    }
  };

  return (
    <View style={[styles.quadrant, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text style={styles.bullet}>• {item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        style={styles.input}
        placeholder="Add task..."
        value={input}
        onChangeText={setInput}
        onSubmitEditing={handleAddTask}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const MatrixQuadrant = () => {
  const [tasks, setTasks] = useState({
    doNow: [],
    scheduleIt: [],
    delegateIt: [],
    eliminateIt: [],
  });

  const addTaskToQuadrant = (quadrant, task) => {
    setTasks((prev) => ({
      ...prev,
      [quadrant]: [...prev[quadrant], task],
    }));
  };

  return (
    <View style={styles.container}>
      {/* Horizontal Axis */}
      <View style={styles.horizontalAxis} />
      {/* Vertical Axis */}
      <View style={styles.verticalAxis} />
      {/* Arrows */}
      <Text style={styles.yAxisArrow}>↑</Text>
      <Text style={styles.xAxisArrow}>→</Text>
      <View style={styles.row}>
        <Quadrant
          title="1: Do it now"
          color="#9EE7F8"
          tasks={tasks.doNow}
          onAddTask={(task) => addTaskToQuadrant("doNow", task)}
        />
        <Quadrant
          title="2: Schedule it"
          color="#D3A4F6"
          tasks={tasks.scheduleIt}
          onAddTask={(task) => addTaskToQuadrant("scheduleIt", task)}
        />
      </View>
      <View style={styles.row}>
        <Quadrant
          title="3: Delegate it"
          color="#FBC97F"
          tasks={tasks.delegateIt}
          onAddTask={(task) => addTaskToQuadrant("delegateIt", task)}
        />
        <Quadrant
          title="4: Eliminate it"
          color="#F89A9A"
          tasks={tasks.eliminateIt}
          onAddTask={(task) => addTaskToQuadrant("eliminateIt", task)}
        />
      </View>

      {/* Labels for Axes */}
      <Text style={[styles.axisLabel, styles.important]}>Important</Text>
      <Text style={[styles.axisLabel, styles.notImportant]}>Not important</Text>
      <Text style={[styles.axisLabel, styles.urgent]}>Urgent</Text>
      <Text style={[styles.axisLabel, styles.notUrgent]}>Not urgent</Text>
    </View>
  );
};

export default MatrixQuadrant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    // backgroundColor: "#A8D17E",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  quadrant: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  bullet: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
    backgroundColor: "#fff",
  },
  addButton: {
    backgroundColor: "#333",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  important: {
    top: 10,
    marginTop: 10,
    left: "65%",
    top: "-2%",
    transform: [{ translateX: -20 }],
  },
  notImportant: {
    bottom: 10,
    left: "70%",
    bottom: "2%",
    transform: [{ translateX: -40 }],
  },
  urgent: {
    right: 10,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  notUrgent: {
    left: 10,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  axisLabel: {
    position: "absolute",
    fontSize: 14,
    fontWeight: "bold",
  },
  horizontalAxis: {
    position: "absolute",
    width: "100%",
    height: 3,
    backgroundColor: "black",
    top: "52%",
    left: "5%",
  },
  verticalAxis: {
    position: "absolute",
    height: "100%",
    width: 3,
    backgroundColor: "black",
    left: "54.3%",
    top: "3%",
  },

  yAxisArrow: {
    position: "absolute",
    top: "-0.5%", // Adjusts the arrow position at the top of the vertical axis
    left: "53.6%",
    fontSize: 24,
    fontWeight: "bold",
    transform: [{ translateX: -6 }], // Centering adjustment
  },
  xAxisArrow: {
    position: "absolute",
    right: "1.5%", // Adjusts the arrow position at the right end of the horizontal axis
    top: "50.7%",
    fontSize: 24,
    fontWeight: "bold",
    transform: [{ translateY: -6 }], // Centering adjustment
  },
});
