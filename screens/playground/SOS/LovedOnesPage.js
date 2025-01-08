import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert
} from "react-native";

const LovedOnesPage = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [contact, setContact] = useState("");

  const addContact = () => {
    if (name.trim() && relationship.trim() && contact.trim()) {
      setContacts([...contacts, { name, relationship, contact }]);
      setName("");
      setRelationship("");
      setContact("");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>
        Connect Your <Text style={styles.highlight}>Loved Ones</Text>
      </Text>
      <Text style={styles.subtitle}>Create your loved ones contact list:</Text>

      {/* Input Form */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name (e.g. Fary)"
          placeholderTextColor="#A9A9A9"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Relationship (e.g. Best Friend)"
          placeholderTextColor="#A9A9A9"
          value={relationship}
          onChangeText={setRelationship}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact (e.g. 888-888-8888)"
          placeholderTextColor="#A9A9A9"
          keyboardType="phone-pad"
          value={contact}
          onChangeText={setContact}
        />
        <TouchableOpacity style={styles.addButton} onPress={addContact}>
          <Text style={styles.addButtonText}>Add Contact</Text>
        </TouchableOpacity>
      </View>

      {/* Contact List */}
      <View style={styles.listContainer}>
        <FlatList
          data={contacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.contactRow}
              onPress={() => {
                // Handle click event
                Alert.alert("", 
                  `Are you calling ${item.name}?`,
                  [
                    { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
                    { text: "OK", onPress: () => console.log("OK Pressed") },
                  ],
                );
              }}
            >
              <Text style={styles.contactText}>{item.name}</Text>
              <Text style={styles.contactText}>{item.relationship}</Text>
              <Text style={styles.contactText}>{item.contact}</Text>
            </TouchableOpacity>
          )}
          ListHeaderComponent={() => (
            <View style={styles.listHeader}>
              <Text style={styles.headerText}>Name</Text>
              <Text style={styles.headerText}>Relationship</Text>
              <Text style={styles.headerText}>Contact</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc", // Light yellow background
    padding: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  backText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 8,
  },
  highlight: {
    color: "#FF69B4", // Highlight color
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
    color: "#333",
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#FF69B4",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  listContainer: {
    backgroundColor: "#FFF0F0", // Light pink background
    borderRadius: 8,
    padding: 8,
    flex: 1,
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 8,
    marginBottom: 8,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  contactText: {
    fontSize: 16,
    flex: 1,
    textAlign: "center",
    color: "#000",
  },
});

export default LovedOnesPage;
