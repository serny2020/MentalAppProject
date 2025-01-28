import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const StepOneScreen = ({ navigation }) => {
  const [priorities, setPriorities] = useState(["", "", ""]);
  const [todos, setTodos] = useState(Array(7).fill(""));

  const updatePriority = (index, value) => {
    const updatedPriorities = [...priorities];
    updatedPriorities[index] = value;
    setPriorities(updatedPriorities);
  };

  const updateTodo = (index, value) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = value;
    setTodos(updatedTodos);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.stepText}>Step One:</Text>
        <TouchableOpacity onPress={() => navigation.navigate("StepTwoScreen")}>
          <Text style={styles.headerText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Instructions */}
      <Text style={styles.instructions}>
        Write down all the things you have to do, then{" "}
        <Text style={styles.bold}>RANK</Text> 3 things that are important to you.
      </Text>

      {/* Priorities Section */}
      <View style={styles.box}>
        <Text style={styles.sectionTitle}>Priorities</Text>
        {priorities.map((priority, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder={`${index + 1}.`}
            value={priority}
            onChangeText={(value) => updatePriority(index, value)}
          />
        ))}
      </View>

      {/* To-Do Section */}
      <View style={styles.box}>
        <Text style={styles.sectionTitle}>TO-DO</Text>
        {todos.map((todo, index) => (
          <TextInput
            key={index}
            style={styles.todoInput}
            placeholder={`Task ${index + 1}`}
            value={todo}
            onChangeText={(value) => updateTodo(index, value)}
          />
        ))}
      </View>

      {/* Footer */}
      <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate("EisenhowerMatrixInteractive")}>
        <Text style={styles.footerText}>
          Didn’t like this method? No problem. We have another option for you!{" "}
          <Image 
          source={require('../../../assets/image/icon/rightArrow.png')} // Update with your image path
          style={styles.arrowImage} 
        />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9FBC0",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  stepText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  instructions: {
    fontSize: 16,
    marginBottom: 16,
    color: "#000",
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  box: {
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    fontSize: 16,
    color: "#000",
  },
  todoInput: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
    marginBottom: 4,
    fontSize: 14,
    color: "#000",
  },
  footer: {
    marginTop: 16,
  },
  footerText: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
  },
  arrowImage: {
    width: 16,  // Adjust the width of your image
    height: 16, // Adjust the height of your image
    marginLeft: 5, // Optional: Add spacing between the text and the image
  },
});

export default StepOneScreen;
