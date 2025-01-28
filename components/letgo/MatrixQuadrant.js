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
        renderItem={({ item }) => (
          <Text style={styles.bullet}>• {item}</Text>
        )}
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
    </View>
  );
};

export default MatrixQuadrant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#A8D17E",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
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
});
