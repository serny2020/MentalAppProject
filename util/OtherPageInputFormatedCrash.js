import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { CheckInContext } from '../context/CheckInContext';

const CustomCausePage = ({ navigation }) => {
  const { updateCheckInData, checkInData } = useContext(CheckInContext);
  const [causes, setCauses] = useState(['trauma', 'substance', 'music', 'parenting']);
  const [newCause, setNewCause] = useState('');
  const [selectedCauses, setSelectedCauses] = useState(checkInData.causes || []);

  useEffect(() => {
    // Merge previously selected causes with the default causes, avoiding duplicates
    const allCauses = Array.from(new Set([...causes, ...(checkInData.causes || [])]));
    setCauses(allCauses);
  }, []);

  const addCause = () => {
    if (newCause.trim() && !causes.includes(newCause)) {
      setCauses([...causes, newCause]);
      setNewCause('');
    }
  };

  const toggleSelectCause = (cause) => {
    if (selectedCauses.includes(cause)) {
      setSelectedCauses(selectedCauses.filter(item => item !== cause));
    } else {
      setSelectedCauses([...selectedCauses, cause]);
    }
  };

  const handleConfirm = () => {
    updateCheckInData('causes', selectedCauses);
    navigation.goBack();
  };

  useEffect(() => {
    console.log('Current causes:', causes);
    console.log('Selected causes:', selectedCauses);
  }, [causes, selectedCauses]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 24, color: 'red' }}>❌</Text>
        </TouchableOpacity>
        <Text style={styles.skip}>Others</Text>
      </View>

      <View style={styles.centeredTimeContainer}>
        <Text style={styles.questionText}>What is your cause?</Text>
      </View>

      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Type a custom cause"
          value={newCause}
          onChangeText={setNewCause}
        />
        <TouchableOpacity style={[styles.moodButton, { backgroundColor: '#9b59b6', marginTop: 10 }]} onPress={addCause}>
          <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={causes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.moodButton, selectedCauses.includes(item) ? styles.selectedMoodButton : {}]}
            onPress={() => toggleSelectCause(item)}
          >
            <Text style={{ color: selectedCauses.includes(item) ? '#FFF' : '#9b59b6' }}>{item}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.moodContainer}
      />

      <TouchableOpacity style={[styles.nextButton, styles.nextButtonActive]} onPress={handleConfirm}>
        <Text style={styles.nextButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ffcc",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  skip: {
    fontSize: 16,
    color: "#9b59b6",
    top: 10,
  },
  centeredTimeContainer: {
    alignItems: "center",
    marginVertical: 20,
    marginTop: 40,
  },
  questionText: {
    fontSize: 22,
    color: "#9b59b6",
    fontWeight: "bold",
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#9b59b6',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  moodContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  moodButton: {
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 10,
    backgroundColor: "#E5E5E5",
  },
  selectedMoodButton: {
    backgroundColor: "#B7FFBF",
    borderWidth: 2,
    borderColor: "#9b59b6",
  },
  nextButton: {
    width: "100%",
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    bottom: 80,
    marginTop: "auto",
  },
  nextButtonActive: {
    backgroundColor: "#9b59b6",
  },
  nextButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CustomCausePage;
