import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const CalanderPicker = ({ onConfirm }) => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleConfirm = (date) => {
    setSelectedDate(date);
    setPickerVisible(false);
    if (onConfirm) onConfirm(date);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by date</Text>
      <TouchableOpacity
        style={styles.dateDisplay}
        onPress={() => setPickerVisible(true)}
      >
        <Text style={styles.dateText}>
          {selectedDate.toDateString()}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isPickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setPickerVisible(false)}
        customHeaderIOS={() => (
          <Text style={styles.header}>Filter by date</Text>
        )}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => setPickerVisible(false)}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => handleConfirm(selectedDate)}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateDisplay: {
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  cancelButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  confirmButton: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StyledDatePicker;
