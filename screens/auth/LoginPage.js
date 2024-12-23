import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here (e.g., API call, validation)
    console.log("Logged in with", { email, password });
    navigation.navigate("Home"); // Navigate to the Main page after login
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.centerContainer}>
        <Text style={styles.welcomeText}>Log In</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#9b59b6"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#9b59b6"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>

      {/* Secondary Option */}
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate("Auth", { screen: "SignUp" })}
      >
        <Text style={styles.secondaryButtonText}>
          Don’t have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    position: "absolute",
    top: 50,
    width: "100%",
  },
  skip: {
    fontSize: 16,
    color: "#9b59b6",
    textDecorationLine: "underline",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 32,
    color: "#9b59b6",
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#9b59b6",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#9b59b6",
    fontSize: 16,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#9b59b6",
    fontSize: 18,
    fontWeight: "bold",
  },
  secondaryButton: {
    alignItems: "center",
    marginBottom: 20,
  },
  secondaryButtonText: {
    color: "#9b59b6",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default LoginPage;
