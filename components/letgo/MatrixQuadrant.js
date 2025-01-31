import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import CartesianCoordinates from "../../components/letgo/CartesianCoord";
import QuadrantComponent from "../../components/letgo/QuadrantComponent";

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
      <CartesianCoordinates translateX={2} translateY={0} scale={1.5} />

      {/* Quadrants */}
      <View style={styles.quadrantsContainer}>
        {/* Top Left (Quadrant 1) */}
        <View style={styles.quadrantContainer}>
          <QuadrantComponent
            title="2: Schedule it"
            color="#D3A4F6"
            tasks={tasks.scheduleIt}
            onAddTask={(task) => addTaskToQuadrant("scheduleIt", task)}
          />
        </View>
        {/* Top Right (Quadrant 2) */}
        <View style={styles.quadrantContainer}>
          <QuadrantComponent
            title="1: Do it now"
            color="#9EE7F8"
            tasks={tasks.doNow}
            onAddTask={(task) => addTaskToQuadrant("doNow", task)}
          />
        </View>
        {/* Bottom Left (Quadrant 3) */}
        <View style={styles.quadrantContainer}>
          <QuadrantComponent
            title="4: Eliminate it"
            color="#F89A9A"
            tasks={tasks.eliminateIt}
            onAddTask={(task) => addTaskToQuadrant("eliminateIt", task)}
          />
        </View>
        {/* Bottom Right (Quadrant 4) */}
        <View style={styles.quadrantContainer}>
          <QuadrantComponent
            title="3: Delegate it"
            color="#FBC97F"
            tasks={tasks.delegateIt}
            onAddTask={(task) => addTaskToQuadrant("delegateIt", task)}
          />
        </View>
      </View>
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
    position: "absolute",
  },
  quadrantsContainer: {
    position: "absolute", // Ensures the quadrants are layered over the Cartesian coordinates
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap", // Allows rows to wrap to create the 2x2 grid
    justifyContent: "center",
    alignItems: "center",
  },
  quadrantContainer: {
    width: "50%", // Each quadrant occupies half the width
    height: "50%", // Each quadrant occupies half the height
    padding: 3,
    paddingBottom: 10,
    paddingTop: 20,
  },
  quadrant: {
    flex: 1,
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
